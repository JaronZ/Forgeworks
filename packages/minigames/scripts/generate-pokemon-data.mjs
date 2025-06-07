import { writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";

function curl(url) {
	return new Promise((resolve, reject) => {
		const curlProcess = spawn("curl", ["-s", "-H", "Accept: application/json", url]);

		curlProcess.on("error", (error) => {
			reject(`Error executing curl: ${error.message}`, url);
		});

		curlProcess.on("close", (code) => {
			if (code !== 0) {
				reject(`curl process exited with code ${code}`, url);
			}
		});

		let data = "";
		curlProcess.stdout.on("data", (chunk) => {
			data += chunk.toString();
		});
		curlProcess.stderr.on("data", (chunk) => {
			console.error(`curl stderr: ${chunk.toString()}`, url);
		});

		curlProcess.stdout.on("end", () => {
			try {
				const jsonData = JSON.parse(data);
				resolve(jsonData);
			} catch (error) {
				reject(`Error parsing JSON from ${url}: ${error.message}\nData: ${data}`);
			}
		});
	});
}

console.log("Generating Pokémon data...");
console.log("This may take a while, please wait...");
console.log("If you see an error about 'curl' not being found, please install curl on your system.");
const pokemons = await curl("https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0");
console.log(`Found ${pokemons.count} Pokémon, fetching data...`);

const chunks = pokemons.results.reduce((acc, pokemon, index) => {
	if (index % 100 === 0) {
		acc.push([]);
	}
	acc[acc.length - 1].push(pokemon);
	return acc;
}, []);

function fetchPokemonData(chunk) {
	return Promise.all(
		chunk.map(async (pokemon) => {
			console.log(`Fetching data for ${pokemon.name}...`);
			const species = await curl(pokemon.url);
			const name = species.names.find((name) => name.language.name === "en").name;
			const gen = await curl(species.generation.url);
			return {
				_key: species.name,
				name: name.replace(/(♀|♂)/g, ""),
				gen: gen.id
			};
		})
	);
}

async function* chunkGenerator(chunks) {
	for (const chunk of chunks) {
		yield fetchPokemonData(chunk);
	}
}

console.log(`Processing ${chunks.length} chunks of Pokémon data...`);
const results = [];
for await (const chunk of chunkGenerator(chunks)) {
	console.log(`Processing chunk of ${chunk.length} Pokémon...`);
	results.push(...chunk);
	console.log(`Processed chunk, fetched data for ${chunk.length} Pokémon.`);
}
console.log(`All Pokémon data fetched successfully.`);

console.log(`Fetched data for ${results.length} Pokémon.`);
const resultsToObject = results.reduce(
	(acc, pokemon) => ({ ...acc, [pokemon._key]: { name: pokemon.name, gen: pokemon.gen } }),
	{}
);

console.log("Writing Pokémon data to file...");
await writeFile("src/config/minigames/pokemon.json", JSON.stringify(resultsToObject, null, 2), "utf-8");
console.log("Pokémon data generated successfully!");
