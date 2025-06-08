import { Pokemon } from "../pokemon/Pokemon";
import { createChatFrame, centeredMessage, MINUTE_TICKS } from "../util";
import { getDefaultRewards } from "./rewards";

export const generationMinigame = {
	name: "generation",
	type: "chat",
	generation: null as string | null,
	events: ["chat"],
	timeLimit: MINUTE_TICKS * 0.5,
	getRewards() {
		return getDefaultRewards();
	},
	shouldEnd({ message }: $PlayerChatReceivedKubeEvent_): boolean {
		return message.toLowerCase() === this.generation;
	},
	execute({ server }: $ServerKubeEvent_) {
		const pokemon = Pokemon.getRandom();
		this.generation = pokemon.gen.toString();
		server.tell(
			createChatFrame("Server Minigame", [
				`${centeredMessage("From what generation is the following pokémon")}\n`,
				Text.aqua(centeredMessage(pokemon.getName()))
			])
		);
	},
	// @ts-expect-error Typings should be updated
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r guessed the generation`
			: "No one managed to guess the generation";
		server.tell(
			createChatFrame("Server Minigame", [
				`${centeredMessage(message)}\n`,
				centeredMessage(`§bGeneration ${this.generation}`)
			])
		);
		this.generation = null;
	}
};
