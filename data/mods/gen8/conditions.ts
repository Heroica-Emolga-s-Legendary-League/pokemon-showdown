export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	hail: {
		inherit: true,
		durationCallback(source, target, effect) {
			if (source.hasItem('icyrock')) {
				return 8;
			} else if (source.hasAbility('blizzardveil')) {
				return 10;
			}

			return 5;
		},
	},
};
