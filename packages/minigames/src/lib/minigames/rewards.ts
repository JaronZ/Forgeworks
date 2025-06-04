import type { $ItemStack } from "net.minecraft.world.item.ItemStack";

export interface MinigameReward {
	item: $ItemStack;
	chance: number;
}

export const DEFAULT_REWARDS: MinigameReward[] = [];
