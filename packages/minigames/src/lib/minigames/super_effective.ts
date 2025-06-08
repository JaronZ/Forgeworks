import { PokemonType } from "../pokemon/PokemonTypes";
import { MINUTE_TICKS, createChatFrame, centeredMessage } from "../util";
import { getDefaultRewards } from "./rewards";

export const superEffectiveMinigame = {
	name: "super_effective",
	type: "chat",
	defending: null as string[] | null,
	events: ["chat"],
	timeLimit: MINUTE_TICKS * 0.75,
	getRewards() {
		return getDefaultRewards();
	},
	shouldEnd({ message }: $PlayerChatReceivedKubeEvent_): boolean {
		return PokemonType.isEffective(message.toLowerCase(), this.defending as string[]);
	},
	execute({ server }: $ServerKubeEvent_) {
		this.defending = PokemonType.getRandom();
		const defendingString = this.defending.join(" / ");
		server.tell(
			createChatFrame("Server Minigame", [
				`${centeredMessage("What type is super effective against the following pokémon")}\n`,
				Text.aqua(centeredMessage(defendingString))
			])
		);
	},
	// @ts-expect-error Typings should be updated
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r Bested the pokémon!`
			: "No one managed to beat the pokémon";
		server.tell(createChatFrame("Server Minigame", `${centeredMessage(message)}`));
	}
};
