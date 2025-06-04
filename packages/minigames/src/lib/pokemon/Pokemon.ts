export class Pokemon {
	private static instances: Pokemon[] = [];

	public name: string;
	public gen: number;

	public constructor({ name, gen }: { name: string; gen: number }) {
		this.name = name;
		this.gen = gen;
		Pokemon.instances.push(this);
	}

	public static getRandom(): Pokemon {
		return global.lcminigames.pickRandom(Pokemon.instances);
	}

	public getName(): string {
		return this.name;
	}
}

const pokemon = JsonIO.read("kubejs/config/lcminigames/pokemon.json");
Object.keys(pokemon).forEach((k) => {
	// @ts-expect-error Dynamic property assignment
	Pokemon[k] = new Pokemon(pokemon[k]);
});
