import type { $MinecraftServer } from "net.minecraft.server.MinecraftServer";
import type { $Player } from "net.minecraft.world.entity.player.Player";
import { Collection } from "../Collection";
import { shuffle, flatArray, pickRandom } from "../util";
import generationMinigame from "./generation";
import scrambledMinigame from "./scrambled";
import superEffectiveMinigame from "./super_effective";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const minigames = new Collection<string, any>();
minigames.set("generation", generationMinigame);
minigames.set("scrambled", scrambledMinigame);
minigames.set("super_effective", superEffectiveMinigame);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let currentMinigame: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let minigameTimer: any = null;

function transformRewards(rewards: { item: unknown; chance: number }[]): unknown[] {
	return shuffle(flatArray(rewards.map((r) => Array.from({ length: r.chance }).fill(r.item))));
}

function giveReward(winner: $Player): void {
	const rewards = transformRewards(currentMinigame.getRewards());

	if (!rewards || rewards.length === 0) {
		console.warn(`${currentMinigame.name} has no reward`);
		return;
	}

	const reward = pickRandom(rewards);
	// @ts-expect-error Typings should be updated for rewards
	winner.addItem(reward);
}

function timeLimit(server: $MinecraftServer): void {
	if (!currentMinigame) return;
	if (minigameTimer) minigameTimer.clear();
	minigameTimer = server.scheduleInTicks(currentMinigame.timeLimit, () => {
		endMinigame({ server: server });
	});
}

export function shouldExecute(eventName: string): boolean {
	return currentMinigame?.events?.includes(eventName);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function execute(data: any, onEnd: any): void {
	if (currentMinigame.shouldEnd(data)) {
		global.lcminigames.endMinigame({
			server: data.server,
			winner: data.player
		});
		if (onEnd) onEnd();
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function endMinigame(data: any): void {
	if (!currentMinigame) {
		console.warn("There is currently no minigame");
		return;
	}
	currentMinigame.end(data);
	if (data.winner) giveReward(data.winner);
	minigameTimer.clear();
	minigameTimer = null;
	currentMinigame = null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function startMinigame(data: any): void {
	const keys = Array.from(minigames.keys());
	const pickedKey = pickRandom(keys);
	currentMinigame = minigames.get(pickedKey);

	timeLimit(data.server);

	currentMinigame.execute(data);
}
