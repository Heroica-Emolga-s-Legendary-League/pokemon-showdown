import { Moves } from './moves';
export const Scripts: ModdedBattleScriptsData = {
	gen: 8,
	inherit: 'gen9',
	side: {
		inherit: true,
		canDynamaxNow() {
			// Dynamaxing is not in BDSP
			return false;
		},
	},
};
