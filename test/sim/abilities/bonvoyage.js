'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Bon Voyage', () => {
	afterEach(() => {
		battle.destroy();
	});

	it('should extend Perish Song by three turns', () => {
		battle = common.createBattle([[
			{ species: 'Magikarp', ability: 'bonvoyage', moves: ['perishsong'] },
		], [
			{ species: 'Magikarp', moves: ['splash'] },
		]]);

		battle.makeChoices('move perishsong', 'move splash');

		assert.equal(battle.p1.active[0].volatiles['perishsong'].duration, 6);
		assert.equal(battle.p2.active[0].volatiles['perishsong'].duration, 6);
	});

	it('should damage foes by 1/8 while Perish Song is active', () => {
		battle = common.createBattle([[
			{ species: 'Magikarp', ability: 'bonvoyage', moves: ['perishsong'] },
		], [
			{ species: 'Magikarp', moves: ['splash'] },
		]]);
		const foe = battle.p2.active[0];
		const expectedDamage = Math.floor(foe.baseMaxhp / 8);

		battle.makeChoices('move perishsong', 'move splash');

		assert.equal(foe.maxhp - foe.hp, expectedDamage);
	});
});
