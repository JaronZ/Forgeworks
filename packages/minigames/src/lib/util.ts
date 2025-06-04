import type { $Component$$Type } from "net.minecraft.network.chat.Component";
import type { $MutableComponent } from "net.minecraft.network.chat.MutableComponent";
import { DefaultFontInfo } from "./DefaultFontInfo";

const CENTER_PX = 154;

export function pickRandom<T>(list: T[]): T {
	return list[Math.floor(Math.random() * list.length)];
}

export function scramble(word: string): string {
	return word
		.split("")
		.sort(() => 0.5 - Math.random())
		.sort(() => 0.5 - Math.random())
		.sort(() => 0.5 - Math.random())
		.sort(() => 0.5 - Math.random())
		.sort(() => 0.5 - Math.random())
		.join("");
}

export function shuffle<T>(array: T[]): T[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

export function centeredMessage(msg: string): string {
	if (msg === null || msg === "") return "";

	let messagePxSize = 0;
	let previousCode = false;
	let isBold = false;

	msg.split("").forEach((c) => {
		if (c === "§") {
			previousCode = true;
		} else if (previousCode) {
			previousCode = false;
			isBold = c === "l" || c === "L";
		} else {
			const dFI = DefaultFontInfo.getDefaultFontInfo(c);
			messagePxSize += isBold ? dFI.getBoldLength() : dFI.getLength();
			messagePxSize++;
		}
	});

	const halvedMessageSize = messagePxSize / 2;
	const toCompensate = CENTER_PX - halvedMessageSize;
	const spaceLength = DefaultFontInfo.SPACE.getLength() + 1;
	let compensated = 0;
	let sb = "";
	while (compensated < toCompensate) {
		sb += " ";
		compensated += spaceLength;
	}
	return sb + msg;
}

export function createChatFrame(title: string, content: $Component$$Type | $Component$$Type[]): $MutableComponent {
	return Text.join(
		Text.yellow(global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`)),
		"\n",
		Text.green(global.lcminigames.centeredMessage(`§l${title}`)),
		"\n\n",
		content,
		"\n\n",
		Text.yellow(global.lcminigames.centeredMessage(`§m${" ".repeat(81)}`))
	);
}

export function findVal(obj: NonNullable<unknown>, prop: string, defaultValue: unknown): unknown {
	prop = prop.toLowerCase();
	const p = Object.keys(obj).find((k) => Object.prototype.hasOwnProperty.call(obj, k) && prop === k.toLowerCase());
	return p ? obj[p] : defaultValue;
}

/**
 * @param {any[]} array
 * @param {number} [depth]
 * @returns {any[]}
 */
export function flatArray<T>(array: T[], depth = 1): T[] {
	if (!Array.isArray(array)) return array;
	for (let i = 0; i < depth; i++) {
		if (!array.find((e) => Array.isArray(e))) break;
		array = ([] as T[]).concat(...array);
	}
	return array;
}

export const SECOND_TICKS = 20;
export const MINUTE_TICKS = SECOND_TICKS * 60;
export const HOUR_TICKS = MINUTE_TICKS * 60;
