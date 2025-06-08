import { Pokemon } from "../pokemon/Pokemon";
import { scramble, createChatFrame, centeredMessage, MINUTE_TICKS } from "../util";
import { getDefaultRewards } from "./rewards";

export const scrambledMinigame = {
	name: "scrambled",
	type: "chat",
	currentWord: null as string | null,
	events: ["chat"],
	timeLimit: MINUTE_TICKS * 0.5,
	getRewards() {
		return getDefaultRewards();
	},
	shouldEnd({ message }: $PlayerChatReceivedKubeEvent_): boolean {
		return message.toLowerCase() === this.currentWord;
	},
	execute({ server }: $ServerKubeEvent_) {
		this.currentWord = Pokemon.getRandom().getName().toLowerCase();
		const scrambled = scramble(this.currentWord);
		server.tell(
			createChatFrame("Server Minigame", [
				`${centeredMessage("Unscramble the following pokémon")}\n`,
				// @ts-expect-error Typings from .probe are wrong
				Text.aqua(centeredMessage(scrambled))
			])
		);
	},
	// @ts-expect-error Typings should be updated
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r unscrambled the word`
			: "No one managed to unscrambled the word";
		server.tell(
			createChatFrame("Server Minigame", [
				`${centeredMessage(message)}\n`,
				centeredMessage(`§b${this.currentWord}`)
			])
		);
		this.currentWord = null;
	}
};
