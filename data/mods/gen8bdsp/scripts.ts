import { Moves } from './moves';
import { Pokedex } from './pokedex';
import { Learnsets } from './learnsets';

export const Scripts: ModdedBattleScriptsData = {
	gen: 9,
	inherit: 'gen9',
	init() {
		const bdspPokedex = Object.keys(Pokedex).filter(mon => Pokedex[mon as keyof typeof Pokedex].isNonstandard === undefined);

		for (const id of bdspPokedex) {
			this.modData('Pokedex', id).isNonstandard = 'Past';
		}

		const bdspLearnsets = Object.keys(Learnsets);
		for (const id of bdspLearnsets) {
			const learnset = Learnsets[id as keyof typeof Learnsets].learnset;
			for (const moveid in learnset) {
				const move = learnset[moveid as keyof typeof learnset];

				if (!move.includes('8M')) {
					this.modData('Learnsets', id).learnset[moveid]!.push('8M');
				}
			}
		}
	}
};
