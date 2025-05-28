export const IE_PREFIX = "immersiveengineering";
export const IE_SAWDUST = `${IE_PREFIX}:dust_wood`;

function transformSawmillOptions(options): unknown {
	if (options.namespace) {
		options = Object.assign(options, {
			input: `${options.namespace}:${options.input}`,
			output: `${options.namespace}:${options.output}`,
			stripped: options.stripped
				? `${options.namespace}:${options.stripped}`
				: undefined
		});
	}

	return options;
}

export function sawmillRecipe(event, options): void {
	const finalOptions = transformSawmillOptions(options);

	const recipe = {
		type: `${IE_PREFIX}:sawmill`,
		energy: 1600,
		input: {
			item: finalOptions.input
		},
		result: {
			basePredicate: {
				item: finalOptions.output
			},
			count: 6
		},
		secondaryOutputs: [
			{
				item: IE_SAWDUST
			}
		]
	};

	if (finalOptions.stripped) {
		recipe.stripped = {
			item: finalOptions.stripped
		};
		recipe.strippingSecondaries = [
			{
				item: IE_SAWDUST
			}
		];
	}

	event.custom(recipe);
}
