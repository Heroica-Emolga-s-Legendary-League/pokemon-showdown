import { Moves } from './moves';
import { FormatsData } from './formats-data';
import { Items } from './items';
import { Abilities } from './abilities';

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen8',
	init() {
		const keys = Object.keys(FormatsData).filter(k => FormatsData[k as keyof typeof FormatsData].isNonstandard === undefined || FormatsData[k as keyof typeof FormatsData].isNonstandard === 'Future');
		for (const k of keys) {
			this.modData('FormatsData', k).isNonstandard = 'Past';
			this.modData('Pokedex', k).gen = 8;
		}

		const items = Object.keys(Items).filter(i => Items[i as keyof typeof Items].isNonstandard === undefined || Items[i as keyof typeof Items].isNonstandard === 'Future');
		for (const i of items) {
			this.modData('Items', i).isNonstandard = undefined;
			this.modData('Items', i).gen = 9;
		}

		const moves = Object.keys(Moves);
		for (const m of moves) {
			this.modData('Moves', m).gen = 9;
		}

		const abilities = Object.keys(Abilities).filter(a => Abilities[a as keyof typeof Abilities].isNonstandard === undefined || Abilities[a as keyof typeof Abilities].isNonstandard === 'Future');
		for (const a of abilities) {
			this.modData('Abilities', a).gen = 8;
		}
	}
};
