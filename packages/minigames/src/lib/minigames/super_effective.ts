//requires: cobblemon

lcminigames.minigames.set("super_effective", {
	name: "super_effective",
	type: "chat",
	defending: null,
	events: ["chat"],
	timeLimit: global.lcminigames.MINUTE_TICKS * 0.75,
	getRewards() {
		return [
			// Armor Trim Templates
			{
				item: Item.of("minecraft:bolt_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:coast_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:dune_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:eye_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:flow_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:host_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:raiser_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:rib_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:sentry_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:shaper_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:silence_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:snout_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:spire_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:tide_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:vex_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:ward_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of(
					"minecraft:wayfinder_armor_trim_smithing_template"
				),
				chance: 100
			},
			{
				item: Item.of("minecraft:wild_armor_trim_smithing_template"),
				chance: 100
			},
			{
				item: Item.of("minecraft:netherite_upgrade_smithing_template"),
				chance: 50
			},
			{
				item: Item.of("ae2:fluix_upgrade_smithing_template"),
				chance: 50
			},
			{
				item: Item.of(
					"create_dragons_plus:blaze_upgrade_smithing_template"
				),
				chance: 50
			},
			{
				item: Item.of("deeperdarker:warden_upgrade_smithinge_template"),
				chance: 50
			},
			// Ingots and Ores
			{ item: Item.of("minecraft:amethyst_shard", 3), chance: 500 },
			{ item: Item.of("minecraft:copper_ingot", 5), chance: 500 },
			{ item: Item.of("minecraft:coal", 5), chance: 550 },
			{ item: Item.of("immersivengineering:coal_coke", 5), chance: 500 },
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
			{ item: Item.of("minecraft:trail_key"), chance: 50 },
			{ item: Item.of("minecraft:ominous_trail_key"), chance: 10 },
			{ item: Item.of("mekanism:ingot_steel", 5), chance: 500 },
			{
				item: Item.of("mekanism:ingot_refined_glowstone", 3),
				chance: 500
			},
			{
				item: Item.of("mekanism:ingot_refined_obsidian", 3),
				chance: 500
			},
			{ item: Item.of("mekanism:ingot_osmium", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_tin", 3), chance: 500 },
			{ item: Item.of("mekanism:ingot_lead", 3), chance: 500 },
			{ item: Item.of("alltheores:electrum_ingot", 3), chance: 500 },
			{ item: Item.of("gobber2:gobber2_ingot"), chance: 10 },
			{ item: Item.of("gobber2:gobber2_nether_ingot"), chance: 5 },
			{ item: Item.of("gobber2:gobber2_ender_ingot"), chance: 1 },
			{ item: Item.of("gobber2:gobber2_foo"), chance: 100 },
			{ item: Item.of("gobber2:gobber2_foo_nether"), chance: 50 },
			{ item: Item.of("gobber2:gobber2_foo_end"), chance: 10 },
			{ item: Item.of("create:zinc_ingot", 3), chance: 500 },
			{ item: Item.of("create:andesite_alloy", 3), chance: 500 },
			// Food
			{ item: Item.of("minecraft:apple"), chance: 400 },
			{ item: Item.of("minecraft:carrot"), chance: 350 },
			{ item: Item.of("minecraft:potato"), chance: 350 },
			{ item: Item.of("minecraft:bread"), chance: 300 },
			{
				item: Item.of("createfood:grilled_cheese_sandwich"),
				chance: 100
			},
			{ item: Item.of("createfood:cheeseburger"), chance: 100 },
			{ item: Item.of("createfood:hotdog"), chance: 100 },
			{ item: Item.of("createfood:pizza"), chance: 100 },
			{ item: Item.of("createfood:chocolate_bar"), chance: 150 },
			{ item: Item.of("pamhc2foodcore:saladitem"), chance: 150 },
			{ item: Item.of("pamhc2foodcore:fruitpunchitem"), chance: 150 },
			{ item: Item.of("pamhc2foodcore:berrysmoothieitem"), chance: 150 },
			{ item: Item.of("pamhc2foodcore:milkshakeitem"), chance: 150 },
			{ item: Item.of("pamhc2foodcore:smoothieberryitem"), chance: 150 },
			{ item: Item.of("minecraft:cooked_cod"), chance: 200 },
			{ item: Item.of("minecraft:cooked_beef"), chance: 250 },
			{ item: Item.of("minecraft:cooked_porkchop"), chance: 250 },
			{ item: Item.of("minecraft:cooked_chicken"), chance: 250 },
			{ item: Item.of("minecraft:cooked_mutton"), chance: 200 },
			{ item: Item.of("minecraft:cooked_rabbit"), chance: 200 },
			{ item: Item.of("minecraft:cooked_salmon"), chance: 200 },
			// Storage Cells
			{ item: Item.of("item_storage_cell_1k"), chance: 300 },
			{ item: Item.of("item_storage_cell_4k"), chance: 200 },
			{ item: Item.of("item_storage_cell_16k"), chance: 100 },
			{ item: Item.of("item_storage_cell_64k"), chance: 50 },
			{ item: Item.of("item_storage_cell_256k"), chance: 15 },

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
		return lcminigames.Pokemon.Type.isEffective(
			message.toLowerCase(),
			this.defending
		);
	},
	execute({ server }: $ServerKubeEvent_) {
		this.defending = lcminigames.Pokemon.Type.getRandom();
		const defendingString = this.defending.join(" / ");
		server.tell(
			global.lcminigames.createChatFrame("Server Minigame", [
				`${global.lcminigames.centeredMessage("What type is super effective against the following pokémon")}\n`,
				Text.aqua(global.lcminigames.centeredMessage(defendingString))
			])
		);
	},
	end({ server, winner }) {
		const message = winner
			? `§2${winner.displayName.string}§r Bested the pokémon!`
			: "No one managed to beat the pokémon";
		server.tell(
			global.lcminigames.createChatFrame(
				"Server Minigame",
				`${global.lcminigames.centeredMessage(message)}`
			)
		);
	}
});
