export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	adamantcrystal: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Steel' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && !pokemon.species.isPrimal && !pokemon.transformed) {
				// @ts-expect-error modded
				const species: Species = this.actions.getMixedSpecies(pokemon.m.originalSpecies, 'Kyogre-Primal', pokemon);
				if (pokemon.m.originalSpecies === 'Kyogre') {
					pokemon.formeChange(species, this.effect, true);
				} else {
					pokemon.formeChange(species, this.effect, true);
					pokemon.baseSpecies = species;
					this.add('-start', pokemon, 'Blue Orb', '[silent]');
				}
				pokemon.canTerastallize = null;
			}
		},
		onTakeItem: false,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	cornerstonemask: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			return this.chainModify([4915, 4096]);
		},
		onTakeItem: false,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	griseouscore: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Ghost' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	hearthflamemask: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			return this.chainModify([4915, 4096]);
		},
		onTakeItem: false,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	lustrousglobe: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (move.type === 'Water' || move.type === 'Dragon') {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
		inherit: true,
		onSwitchIn(pokemon) {
			if (pokemon.isActive && !pokemon.species.isPrimal && !pokemon.transformed) {
				// @ts-expect-error modded
				const species: Species = this.actions.getMixedSpecies(pokemon.m.originalSpecies, 'Groudon-Primal', pokemon);
				if (pokemon.m.originalSpecies === 'Groudon') {
					pokemon.formeChange(species, this.effect, true);
				} else {
					pokemon.formeChange(species, this.effect, true);
					pokemon.baseSpecies = species;
					this.add('-start', pokemon, 'Red Orb', '[silent]');
					const apparentSpecies = pokemon.illusion ? pokemon.illusion.species.name : pokemon.m.originalSpecies;
					const oSpecies = this.dex.species.get(apparentSpecies);
					if (pokemon.illusion) {
						const types = oSpecies.types;
						if (types.length > 1 || types[types.length - 1] !== 'Fire') {
							this.add('-start', pokemon, 'typechange', (types[0] !== 'Fire' ? types[0] + '/' : '') + 'Fire', '[silent]');
						}
					} else if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
						this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
					}
				}
				pokemon.canTerastallize = null;
			}
		},
		onTakeItem: false,
		isNonstandard: null,
	},
	rustedshield: {
		inherit: true,
		onTakeItem: false,
	},
	rustedsword: {
		inherit: true,
		onTakeItem: false,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	vilevial: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			if (['Poison', 'Flying'].includes(move.type)) {
				return this.chainModify([4915, 4096]);
			}
		},
		onTakeItem: false,
	},
	wellspringmask: {
		inherit: true,
		onBasePower(basePower, user, target, move) {
			return this.chainModify([4915, 4096]);
		},
		onTakeItem: false,
	},
	arbolivite: {
		inherit: true,
		isNonstandard: null,
	},

	altaritehell: {
		inherit: true,
		isNonstandard: null,
	},

	arcanite: {
		inherit: true,
		isNonstandard: null,
	},

	arcaniteh: {
		inherit: true,
		isNonstandard: null,
	},

	vent: {
		inherit: true,
		isNonstandard: null,
	},

	armarougite: {
		inherit: true,
		isNonstandard: null,
	},

	articunite: {
		inherit: true,
		isNonstandard: null,
	},

	aurorusite: {
		inherit: true,
		isNonstandard: null,
	},

	azumarillite: {
		inherit: true,
		isNonstandard: null,
	},

	beheeyemite: {
		inherit: true,
		isNonstandard: null,
	},

	bellossomite: {
		inherit: true,
		isNonstandard: null,
	},

	bellibolite: {
		inherit: true,
		isNonstandard: null,
	},

	bronzongite: {
		inherit: true,
		isNonstandard: null,
	},

	butterfrite: {
		inherit: true,
		isNonstandard: null,
	},

	ceruledgite: {
		inherit: true,
		isNonstandard: null,
	},

	chandelurite: {
		inherit: true,
		isNonstandard: null,
	},

	charizarditea: {
		inherit: true,
		isNonstandard: null,
	},

	charizarditez: {
		inherit: true,
		isNonstandard: null,
	},

	chesnaughtite: {
		inherit: true,
		isNonstandard: null,
	},

	claydolite: {
		inherit: true,
		isNonstandard: null,
	},

	clodsirite: {
		inherit: true,
		isNonstandard: null,
	},

	comfeyite: {
		inherit: true,
		isNonstandard: null,
	},

	corviknightite: {
		inherit: true,
		isNonstandard: null,
	},

	crustlite: {
		inherit: true,
		isNonstandard: null,
	},

	cryogonite: {
		inherit: true,
		isNonstandard: null,
	},

	darkraite: {
		inherit: true,
		isNonstandard: null,
	},

	darkritez: {
		inherit: true,
		isNonstandard: null,
	},

	delphoxite: {
		inherit: true,
		isNonstandard: null,
	},

	diamoneyite: {
		inherit: true,
		isNonstandard: null,
	},

	dianciteangel: {
		inherit: true,
		isNonstandard: null,
	},

	dianciteinnerdemon: {
		inherit: true,
		isNonstandard: null,
	},

	diancitessea: {
		inherit: true,
		isNonstandard: null,
	},

	dragapultite: {
		inherit: true,
		isNonstandard: null,
	},

	dragoniteitea: {
		inherit: true,
		isNonstandard: null,
	},

	dragontieitez: {
		inherit: true,
		isNonstandard: null,
	},

	drapionite: {
		inherit: true,
		isNonstandard: null,
	},

	drifblimitehell: {
		inherit: true,
		isNonstandard: null,
	},

	dusknoirite: {
		inherit: true,
		isNonstandard: null,
	},

	eelektrossitehell: {
		inherit: true,
		isNonstandard: null,
	},

	eldegossite: {
		inherit: true,
		isNonstandard: null,
	},

	emboarite: {
		inherit: true,
		isNonstandard: null,
	},

	emboaritey: {
		inherit: true,
		isNonstandard: null,
	},

	emolgite: {
		inherit: true,
		isNonstandard: null,
	},

	emolgitey: {
		inherit: true,
		isNonstandard: null,
	},

	empoleonite: {
		inherit: true,
		isNonstandard: null,
	},

	enteite: {
		inherit: true,
		isNonstandard: null,
	},

	espeonite: {
		inherit: true,
		isNonstandard: null,
	},

	feraligatrite: {
		inherit: true,
		isNonstandard: null,
	},

	flareonite: {
		inherit: true,
		isNonstandard: null,
	},

	florgesitelove: {
		inherit: true,
		isNonstandard: null,
	},

	flygonitea: {
		inherit: true,
		isNonstandard: null,
	},

	flygonitez: {
		inherit: true,
		isNonstandard: null,
	},

	froslassite: {
		inherit: true,
		isNonstandard: null,
	},

	frosmothite: {
		inherit: true,
		isNonstandard: null,
	},

	galvantulite: {
		inherit: true,
		isNonstandard: null,
	},

	gardevoiritesuper: {
		inherit: true,
		isNonstandard: null,
	},

	glaceonite: {
		inherit: true,
		isNonstandard: null,
	},

	greninjite: {
		inherit: true,
		isNonstandard: null,
	},

	gyaradositey: {
		inherit: true,
		isNonstandard: null,
	},

	helioliskite: {
		inherit: true,
		isNonstandard: null,
	},

	hydrapplite: {
		inherit: true,
		isNonstandard: null,
	},

	infernapite: {
		inherit: true,
		isNonstandard: null,
	},

	jirachite: {
		inherit: true,
		isNonstandard: null,
	},

	jolteonite: {
		inherit: true,
		isNonstandard: null,
	},

	jynxite: {
		inherit: true,
		isNonstandard: null,
	},

	kricketunite: {
		inherit: true,
		isNonstandard: null,
	},

	kleavorite: {
		inherit: true,
		isNonstandard: null,
	},

	laprasite: {
		inherit: true,
		isNonstandard: null,
	},

	leafeonite: {
		inherit: true,
		isNonstandard: null,
	},

	ludicolite: {
		inherit: true,
		isNonstandard: null,
	},

	lumineonite: {
		inherit: true,
		isNonstandard: null,
	},

	mausholdite: {
		inherit: true,
		isNonstandard: null,
	},

	meganiumite: {
		inherit: true,
		isNonstandard: null,
	},

	mewtwonitea: {
		inherit: true,
		isNonstandard: null,
	},

	mewtwonitez: {
		inherit: true,
		isNonstandard: null,
	},

	miloticite: {
		inherit: true,
		isNonstandard: null,
	},

	miloticitehell: {
		inherit: true,
		isNonstandard: null,
	},

	miltankite: {
		inherit: true,
		isNonstandard: null,
	},

	moltresite: {
		inherit: true,
		isNonstandard: null,
	},

	noctowlite: {
		inherit: true,
		isNonstandard: null,
	},

	noivernite: {
		inherit: true,
		isNonstandard: null,
	},

	orbeetlite: {
		inherit: true,
		isNonstandard: null,
	},

	queendritedark: {
		inherit: true,
		isNonstandard: null,
	},

	queendrite: {
		inherit: true,
		isNonstandard: null,
	},

	raikite: {
		inherit: true,
		isNonstandard: null,
	},

	roseraditehell: {
		inherit: true,
		isNonstandard: null,
	},

	runerigusite: {
		inherit: true,
		isNonstandard: null,
	},

	samurottite: {
		inherit: true,
		isNonstandard: null,
	},

	samurottitey: {
		inherit: true,
		isNonstandard: null,
	},

	serperiorite: {
		inherit: true,
		isNonstandard: null,
	},

	serperioriteivy: {
		inherit: true,
		isNonstandard: null,
	},

	shiftrite: {
		inherit: true,
		isNonstandard: null,
	},

	sirfetchdite: {
		inherit: true,
		isNonstandard: null,
	},

	slowbroniteg: {
		inherit: true,
		isNonstandard: null,
	},

	snorlaxitehell: {
		inherit: true,
		isNonstandard: null,
	},

	starmite: {
		inherit: true,
		isNonstandard: null,
	},

	sudowoodite: {
		inherit: true,
		isNonstandard: null,
	},

	suicunite: {
		inherit: true,
		isNonstandard: null,
	},

	swellowite: {
		inherit: true,
		isNonstandard: null,
	},

	sylveonite: {
		inherit: true,
		isNonstandard: null,
	},

	talonflamite: {
		inherit: true,
		isNonstandard: null,
	},

	tinkatonite: {
		inherit: true,
		isNonstandard: null,
	},

	tinkatonitez: {
		inherit: true,
		isNonstandard: null,
	},

	togekissite: {
		inherit: true,
		isNonstandard: null,
	},

	torterrite: {
		inherit: true,
		isNonstandard: null,
	},

	toxtricite: {
		inherit: true,
		isNonstandard: null,
	},

	tropiusite: {
		inherit: true,
		isNonstandard: null,
	},

	turtonatorite: {
		inherit: true,
		isNonstandard: null,
	},

	typhlosionite: {
		inherit: true,
		isNonstandard: null,
	},

	typhlosioniteh: {
		inherit: true,
		isNonstandard: null,
	},

	tyrantrumite: {
		inherit: true,
		isNonstandard: null,
	},

	umbreonite: {
		inherit: true,
		isNonstandard: null,
	},

	unownite: {
		inherit: true,
		isNonstandard: null,
	},

	vaporeonite: {
		inherit: true,
		isNonstandard: null,
	},

	victreebelite: {
		inherit: true,
		isNonstandard: null,
	},

	vivillonite: {
		inherit: true,
		isNonstandard: null,
	},

	volcaronite: {
		inherit: true,
		isNonstandard: null,
	},

	wailordite: {
		inherit: true,
		isNonstandard: null,
	},

	yanmegite: {
		inherit: true,
		isNonstandard: null,
	},

	zapdosite: {
		inherit: true,
		isNonstandard: null,
	},

	zebstrikite: {
		inherit: true,
		isNonstandard: null,
	},
	greninjiteza: {
		inherit: true,
		isNonstandard: null,
	},

	chesnaughtiteza: {
		inherit: true,
		isNonstandard: null,
	},

	delphoxiteza: {
		inherit: true,
		isNonstandard: null,
	},

	meganiumiteza: {
		inherit: true,
		isNonstandard: null,
	},

	emboariteza: {
		inherit: true,
		isNonstandard: null,
	},

	feraligiteza: {
		inherit: true,
		isNonstandard: null,
	},

	barbaraciteza: {
		inherit: true,
		isNonstandard: null,
	},

	starminiteza: {
		inherit: true,
		isNonstandard: null,
	},

	floettiteza: {
		inherit: true,
		isNonstandard: null,
	},

	pyroariteza: {
		inherit: true,
		isNonstandard: null,
	},

	clefabliteza: {
		inherit: true,
		isNonstandard: null,
	},

	scolipiteza: {
		inherit: true,
		isNonstandard: null,
	},

	victreebeliteza: {
		inherit: true,
		isNonstandard: null,
	},

	excadriteza: {
		inherit: true,
		isNonstandard: null,
	},

	eelektrossiteza: {
		inherit: true,
		isNonstandard: null,
	},

	dragoniniteza: {
		inherit: true,
		isNonstandard: null,
	},

	malamariteza: {
		inherit: true,
		isNonstandard: null,
	},

	dragalgiteza: {
		inherit: true,
		isNonstandard: null,
	},

	froslassiteza: {
		inherit: true,
		isNonstandard: null,
	},

	hawluchaniteza: {
		inherit: true,
		isNonstandard: null,
	},

	scraftiniteza: {
		inherit: true,
		isNonstandard: null,
	},

	chandeluriteza: {
		inherit: true,
		isNonstandard: null,
	},

	falinksiteza: {
		inherit: true,
		isNonstandard: null,
	},

	skarmoriteza: {
		inherit: true,
		isNonstandard: null,
	},

	drampaniteza: {
		inherit: true,
		isNonstandard: null,
	},

	raichitexza: {
		inherit: true,
		isNonstandard: null,
	},

	raichiteyza: {
		inherit: true,
		isNonstandard: null,
	},

	chimechiteza: {
		inherit: true,
		isNonstandard: null,
	},

	absolitezza: {
		inherit: true,
		isNonstandard: null,
	},

	staraptoriteza: {
		inherit: true,
		isNonstandard: null,
	},

	garchompitezza: {
		inherit: true,
		isNonstandard: null,
	},

	lucarionitezza: {
		inherit: true,
		isNonstandard: null,
	},

	heatraniteza: {
		inherit: true,
		isNonstandard: null,
	},

	darkriteza: {
		inherit: true,
		isNonstandard: null,
	},

	golurkiteza: {
		inherit: true,
		isNonstandard: null,
	},

	meowsticiteza: {
		inherit: true,
		isNonstandard: null,
	},

	crabominabiteza: {
		inherit: true,
		isNonstandard: null,
	},

	golisopoditeza: {
		inherit: true,
		isNonstandard: null,
	},

	magearniteza: {
		inherit: true,
		isNonstandard: null,
	},

	zeraoriteza: {
		inherit: true,
		isNonstandard: null,
	},

	scovillainiteza: {
		inherit: true,
		isNonstandard: null,
	},

	glimmoriteza: {
		inherit: true,
		isNonstandard: null,
	},

	tatsugiriteza: {
		inherit: true,
		isNonstandard: null,
	},

	baxcaliburiteza: {
		inherit: true,
		isNonstandard: null,
	},

	cofagrigite: {
		inherit: true,
		isNonstandard: null,
	},

	emolgitez: {
		inherit: true,
		isNonstandard: null,
	},
};
