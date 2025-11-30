import { Moves } from './moves';
import { Pokedex } from './pokedex';
export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		const bdspPokedex = Object.keys(Pokedex).filter(mon => Pokedex[mon as keyof typeof Pokedex].isNonstandard === undefined);

		for (const id of bdspPokedex) {
			this.modData('Pokedex', id).isNonstandard = 'Past';
		}
	}
};
