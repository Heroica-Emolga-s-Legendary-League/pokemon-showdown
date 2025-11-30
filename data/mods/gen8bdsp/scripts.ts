import { Moves } from './moves';
import { Pokedex } from './pokedex';
import { Learnsets } from './learnsets';
import { FormatsData } from './formats-data';

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		const keys = Object.keys(FormatsData).filter(k => FormatsData[k as keyof typeof FormatsData].isNonstandard === undefined || FormatsData[k as keyof typeof FormatsData].isNonstandard === 'Future');
		for (const k of keys) {
			this.modData('FormatsData', k).isNonstandard = 'Past';
		}
	}
};
