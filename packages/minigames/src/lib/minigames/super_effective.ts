import { PokemonType } from "../pokemon/PokemonTypes";
import { MINUTE_TICKS, createChatFrame, centeredMessage } from "../util";

export const superEffectiveMinigame = {
	name: "super_effective",
	type: "chat",
	defending: null as string[] | null,
	events: ["chat"],
	timeLimit: MINUTE_TICKS * 0.75,
	getRewards() {
		return [
			// Armor Trim Templates
			{ item: Item.of("minecraft:bolt_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:coast_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:dune_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:eye_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:flow_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:host_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:raiser_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:rib_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:sentry_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:shaper_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:silence_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:snout_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:spire_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:tide_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:vex_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:ward_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:wayfinder_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:wild_armor_trim_smithing_template"), chance: 100 },
			{ item: Item.of("minecraft:netherite_upgrade_smithing_template"), chance: 50 },
			{ item: Item.of("ae2:fluix_upgrade_smithing_template"), chance: 50 },
			{ item: Item.of("create_dragons_plus:blaze_upgrade_smithing_template"), chance: 50 },
			{ item: Item.of("deeperdarker:warden_upgrade_smithing_template"), chance: 50 },
			// Ingots and Ores
			{ item: Item.of("minecraft:amethyst_shard", 3), chance: 500 },
			{ item: Item.of("minecraft:copper_ingot", 5), chance: 500 },
			{ item: Item.of("minecraft:coal", 5), chance: 550 },
			{ item: Item.of("immersiveengineering:coal_coke", 5), chance: 500 },
			{ item: Item.of("minecraft:iron_ingot", 3), chance: 500 },
			{ item: Item.of("minecraft:gold_ingot", 3), chance: 500 },
			{ item: Item.of("minecraft:emerald"), chance: 450 },
			{ item: Item.of("minecraft:lapis_lazuli", 3), chance: 500 },
			{ item: Item.of("minecraft:redstone", 5), chance: 500 },
			{ item: Item.of("minecraft:quartz", 5), chance: 500 },
			{ item: Item.of("minecraft:diamond"), chance: 450 },
			{ item: Item.of("minecraft:netherite_scrap"), chance: 75 },
			{ item: Item.of("minecraft:slime_ball", 5), chance: 300 },
			{ item: Item.of("minecraft:bone_meal", 16), chance: 400 },
			{ item: Item.of("minecraft:trial_key"), chance: 50 },
			{ item: Item.of("minecraft:ominous_trial_key"), chance: 10 },
			{ item: Item.of("mekanism:ingot_steel", 5), chance: 500 },
			{ item: Item.of("mekanism:ingot_refined_glowstone", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_refined_obsidian", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_osmium", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_tin", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_lead", 3), chance: 500 },
			{ item: Item.of("alltheores:electrum_ingot", 3), chance: 500 },
			{ item: Item.of("gobber2:gobber2_ingot"), chance: 10 },
			{ item: Item.of("gobber2:gobber2_ingot_nether"), chance: 5 },
			{ item: Item.of("gobber2:gobber2_ingot_end"), chance: 1 },
			{ item: Item.of("gobber2:gobber2_foo"), chance: 100 },
			{ item: Item.of("gobber2:gobber2_foo_nether"), chance: 50 },
			{ item: Item.of("gobber2:gobber2_foo_end"), chance: 10 },
			{ item: Item.of("create:zinc_ingot", 3), chance: 500 },
			{ item: Item.of("create:andesite_alloy", 3), chance: 500 },

			// Food
			{ item: Item.of("minecraft:apple", 5), chance: 400 },
			{ item: Item.of("minecraft:carrot", 5), chance: 350 },
			{ item: Item.of("minecraft:potato", 5), chance: 350 },
			{ item: Item.of("minecraft:bread", 5), chance: 300 },
			{ item: Item.of("createfood:grilled_cheese_sandwich", 5), chance: 100 },
			{ item: Item.of("createfood:cheeseburger", 5), chance: 100 },
			{ item: Item.of("createfood:cheese_pizza", 5), chance: 100 },
			{ item: Item.of("createfood:chocolate_cookie", 5), chance: 150 },
			{ item: Item.of("pamhc2foodcore:fruitsaladitem", 5), chance: 150 },
			{ item: Item.of("pamhc2foodcore:fruitpunchitem", 5), chance: 150 },
			{ item: Item.of("pamhc2foodcore:sweetberrysmoothieitem", 5), chance: 150 },
			{ item: Item.of("pamhc2foodcore:glowberrysmoothieitem", 5), chance: 150 },
			{ item: Item.of("minecraft:cooked_cod", 5), chance: 200 },
			{ item: Item.of("minecraft:cooked_beef", 5), chance: 250 },
			{ item: Item.of("minecraft:cooked_porkchop", 5), chance: 250 },
			{ item: Item.of("minecraft:cooked_chicken", 5), chance: 250 },
			{ item: Item.of("minecraft:cooked_mutton", 5), chance: 200 },
			{ item: Item.of("minecraft:cooked_rabbit", 5), chance: 200 },
			{ item: Item.of("minecraft:cooked_salmon", 5), chance: 200 },
			// Storage Cells
			{ item: Item.of("ae2:item_storage_cell_1k"), chance: 300 },
			{ item: Item.of("ae2:item_storage_cell_4k"), chance: 200 },
			{ item: Item.of("ae2:item_storage_cell_16k"), chance: 100 },
			{ item: Item.of("ae2:item_storage_cell_64k"), chance: 50 },
			{ item: Item.of("ae2:item_storage_cell_256k"), chance: 15 },
			// Other Items
			{ item: Item.of("minecraft:ender_pearl"), chance: 100 },
			{ item: Item.of("minecraft:ghast_tear"), chance: 50 },
			{ item: Item.of("minecraft:nether_star"), chance: 10 },
			{ item: Item.of("minecraft:totem_of_undying"), chance: 5 },
			{ item: Item.of("minecraft:shulker_shell"), chance: 20 },
			{ item: Item.of("minecraft:elytra"), chance: 1 },
			{ item: Item.of("minecraft:blaze_rod"), chance: 100 },
			{ item: Item.of("minecraft:breeze_rod"), chance: 25 },
			{ item: Item.of("waystones:waystone"), chance: 200 }
		];
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
