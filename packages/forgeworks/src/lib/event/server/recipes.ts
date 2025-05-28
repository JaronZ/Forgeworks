import {
	LOG_SUFFIX,
	STRIPPED_PREFIX,
	PLANKS_SUFFIX,
	WOOD_SUFFIX
} from "../../util/name";
import { sawmillRecipe } from "../../util/immersive_engineering";

ServerEvents.recipes((event) => {
	function registerLogSawmillRecipe(log, options): void {
		sawmillRecipe(
			event,
			Object.assign(
				{
					input: `${log}${LOG_SUFFIX}`,
					stripped: `${STRIPPED_PREFIX}${log}${LOG_SUFFIX}`,
					output: `${log}${PLANKS_SUFFIX}`
				},
				options
			)
		);
	}

	function registerStrippedLogSawmillRecipe(log, options): void {
		sawmillRecipe(
			event,
			Object.assign(
				{
					input: `${STRIPPED_PREFIX}${log}${LOG_SUFFIX}`,
					output: `${log}${PLANKS_SUFFIX}`
				},
				options
			)
		);
	}

	function registerWoodSawmillRecipe(log, options): void {
		sawmillRecipe(
			event,
			Object.assign(
				{
					input: `${log}${WOOD_SUFFIX}`,
					stripped: `${STRIPPED_PREFIX}${log}${WOOD_SUFFIX}`,
					output: `${log}${PLANKS_SUFFIX}`
				},
				options
			)
		);
	}

	function registerStrippedWoodSawmillRecipe(log, options): void {
		sawmillRecipe(
			event,
			Object.assign(
				{
					input: `${STRIPPED_PREFIX}${log}${WOOD_SUFFIX}`,
					output: `${log}${PLANKS_SUFFIX}`
				},
				options
			)
		);
	}

	function registerSawmillRecipes(logList, options): void {
		if (!options) options = {};

		logList.forEach((log) => {
			registerLogSawmillRecipe(log, options);
			registerStrippedLogSawmillRecipe(log, options);
			registerWoodSawmillRecipe(log, options);
			registerStrippedWoodSawmillRecipe(log, options);
		});
	}

	registerSawmillRecipes(
		[
			"fir",
			"magic",
			"pine",
			"maple",
			"redwood",
			"mahogany",
			"jacaranda",
			"palm",
			"willow",
			"dead",
			"umbran",
			"hellbark",
			"empyreal"
		],
		{
			namespace: "biomesoplenty"
		}
	);
	registerSawmillRecipes(["fruit", "cinnamon"], {
		namespace: "extradelight"
	});
});
