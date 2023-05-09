import React from 'react';

const VehicleCard = props => {
	function getCount(vehicle) {
		if (vehicle) {
			return vehicle.amount;
		}
		return 0;
	}

	return (
		<div className="card" key={props.vehicle}>
			<div className="card-body">
				<img
					src={`https://cdn.tycoon.community/dealership/vehicles/${props.vehicle}.png`}
					onError={e => {
						e.target.src = `https://cdn.tycoon.community/dealership/vehicles/${props.vehicle.slice(
							0,
							props.vehicle.length - 1
						)}.png`;
					}}
					alt=""
				/>
				<p className="card-title">
					{vehicleNames[props.vehicle]
						? vehicleNames[props.vehicle]
						: `Invalid name - "${props.vehicle}"`}
				</p>
				<p className="card-text">
					Owned: {getCount(props.ownedVehicles[props.vehicle])}
				</p>
			</div>
		</div>
	);
};

export default VehicleCard;

const vehicleNames = {
	f350plow: 'Vapid Ford F350',
	adder: 'Truffade Adder',
	admiral: 'Dundrearn Admiral',
	ae86: 'Toyota Sprinter Trueno AE86',
	airportferoci: 'FlyUS Feroci',
	airportperennial: 'FlyUS Perennial (FlyUS)',
	akuma: 'Dinka Akuma',
	angel: 'Western Angel',
	ardent: 'Ocelot Ardent',
	asbo: 'Maxwell Asbo',
	asea: 'Declasse Asea',
	asterope: 'Karin Asterope',
	asteropers: 'Karin Asterope RS ',
	astron: 'Pfister Astron',
	autarch: 'Overflod Autarch',
	avarus: 'LCC Avarus',
	bagger: 'Western Bagger',
	baller2: 'Gallivanter Baller',
	baller3: 'Gallivanter Baller LE',
	baller4: 'Gallivanter Baller LE LWB',
	baller5: 'Gallivanter Baller LE (Armored)',
	baller6: 'Gallivanter Baller LE LWB (Armored)',
	baller7: 'Gallivanter Baller ST',
	banshee: 'Bravado Banshee',
	banshee2: 'Bravado Banshee 900R',
	barrage: 'HVY Barrage',
	bati: 'Pegassi Bati 801',
	bati2: 'Pegassi Bati 801RR',
	bestiagts: 'Grotti Bestia GTS',
	bf400: 'Nagasaki BF400',
	bfinjection: 'BF Injection',
	bifta: 'BF Bifta',
	bjxl: 'Karin BeeJay XL',
	blade: 'Vapid Blade',
	blazer: 'Nagasaki Blazer',
	blazer2: 'Nagasaki Blazer Lifeguard',
	blazer3: 'Nagasaki Hot Rod Blazer',
	blazer4: 'Nagasaki Street Blazer',
	blazer5: 'Nagasaki Blazer Aqua',
	blista: 'Dinka Blista',
	blista2: 'Dinka Blista Compact',
	blista3: 'Dinka Go Go Monkey Blista',
	blistata: 'Dinka Blista Compact T/A',
	bobcat: 'Vapid Bobcat',
	bobcatxl: 'Vapid Bobcat XL',
	bodhi: 'Canis Bodhi (GTAIV)',
	bodhi2: 'Canis Bodhi',
	brawler: 'Coil Brawler',
	brioso: 'Grotti Brioso R/A',
	brioso2: 'Grotti Brioso 300',
	bruiser: 'Benefactor Bruiser Apocalypse',
	bruiser2: 'Benefactor Bruiser Future Shock',
	bruiser3: 'Benefactor Bruiser Nightmare',
	brutus: 'Declasse Brutus Apocalypse',
	brutus2: 'Declasse Brutus Future Shock',
	brutus3: 'Declasse Brutus Nightmare',
	btype: 'Albany Roosevelt',
	btype2: 'Albany Fränken Stange',
	btype3: 'Albany Roosevelt Valor',
	buccaneer: 'Albany Buccaneer',
	buccaneer2: 'Albany Buccaneer Custom',
	buccaneer3: 'Albany Buccaneer ',
	buffalo: 'Bravado Buffalo',
	buffalo2: 'Bravado Buffalo S',
	buffalo3: 'Bravado Sprunk Buffalo',
	buffalo4: 'Bravado Buffalo STX',
	bullet: 'Vapid Bullet',
	calico: 'Karin Calico',
	caracara: 'Vapid  Caracara',
	caracara2: 'Vapid Caracara 4x4',
	carbonizzare: 'Grotti Carbonizzare',
	carbonrs: 'Nagasaki Carbon RS',
	casco: 'Lampadati Casco',
	cavalcade: 'Albany Cavalcade',
	champion: 'Dewbauchee Champion',
	chavos: 'Dinka Chavos',
	chavos2: 'Dinka Chavos S',
	cheburek: 'RUNE Cheburek',
	cheetah: 'Grotti Cheetah',
	cheetah2: 'Grotti Cheetah Classic',
	cheetah3: 'Grotti Cheetah Classic Custom',
	chimera: 'Nagasaki Chimera',
	chino: 'Vapid Chino',
	chino2: 'Vapid Chino Custom',
	cinquemila: 'Lampadati Cinquemila',
	cliffhanger: 'Western Cliffhanger',
	clique: 'Vapid Clique',
	club: 'BF Club',
	cog55: 'Enus Cognoscenti 55',
	cog552: 'Enus Cognoscenti 55 (Armored)',
	cogcabrio: 'Enus Cognoscenti Cabrio',
	cognoscenti1: 'Enus Cognoscenti',
	cognoscenti2: 'Enus Cognoscenti (Armored)',
	comet2: 'Pfister Comet',
	comet3: 'Pfister Comet Retro Custom',
	comet4: 'Pfister Comet Safari',
	comet5: 'Pfister Comet SR',
	comet6: 'Pfister Comet S2',
	comet7: 'Pfister Comet S2 Cabrio',
	contender: 'Vapid Contender',
	contender2: 'Vapid Contender E109',
	coquette: 'Invetero Coquette',
	coquette2: 'Invetero Coquette Classic',
	coquette3: 'Invetero Coquette BlackFin',
	coquette4: 'Inverto Coquette D10',
	crusader: 'Canis Crusader',
	cyclone: 'Coil Cyclone',
	cypher: 'Übermacht Cyper',
	daemon: 'Western Daemon',
	dan3: 'Red Bull Racing RB13 (No. 3)',
	deathbike: 'Western Deathbike Apocalypse',
	deathbike2: 'Western Deathbike Future Shock',
	deathbike3: 'Western Deathbike Nightmare',
	defiler: 'Shitzu Defiler',
	deity: 'Enus Deity',
	deluxo: 'Imponte Deluxo',
	deluxogt: 'Imponte Deluxo GT',
	deveste: 'Principe Deveste Eight',
	deviant: 'Schyster Deviant',
	df8: 'Imponte DF8',
	diablous: 'Principe Diabolus',
	diablous2: 'Principe Diabolus Custom',
	diabolus: 'Western Motorcycle Company Diabolus',
	dilettante: 'Karin Dilettante',
	dilettantedx: 'Karin Dilettante DX',
	dloader: 'Bravado Duneloader',
	dominator: 'Vapid Dominator',
	dominator2: 'Vapid Pisswasser Dominator',
	dominator3: 'Vapid Dominator GTX',
	dominator4: 'Vapid Dominator Apocalypse',
	dominator5: 'Vapid Dominator Future Shock',
	dominator6: 'Vapid Dominator Nightmare',
	dominator7: 'Vapid Dominator ASP',
	dominator8: 'Vapid Dominator GTT',
	double: 'Dinka Double-T',
	double2: 'Dinka Double-T Custom',
	drafter: 'Obey 8F Drafter',
	draftgpr: 'Obey Draft GPR',
	dragking: 'Vapid Dragking',
	dubsta: 'Benefactor Dubsta',
	dubsta3: 'Benefactor Dubsta 6x6',
	dukes: 'Imponte Dukes',
	dukes2: "Imponte Duke O'Death",
	dukes3: 'Imponte  Beater Dukes',
	dune: 'BF Dune Buggy',
	dune3: 'BF Dune FAV',
	dune4: 'Ramp Buggy',
	dynasty: 'Weeny Dynasty',
	elegy: 'Annis Elegy Retro Custom',
	elegy2: 'Annis Elegy RH8',
	ellie: 'Vapid Ellie',
	emerus: 'Progen Emerus',
	emperor: 'Albany Emperor',
	emperor4: 'Albany Emperor Stretch ',
	enduro: 'Dinka Enduro',
	entity2: 'Overflod Entity XXR',
	entityxf: 'Overflod Entity XF',
	esperanto: 'Albany Esperanto (GTA IV)',
	esskey: 'Pegassi Esskey',
	euros: 'Annis Euros',
	everon: 'Karin Everon',
	exemplar: 'Dewbauchee Exemplar',
	exoskeleton: 'Pegassi Exoskeleton',
	f1: 'Red Bull Racing RB14',
	f620: 'Ocelot F620',
	faction: 'Willard Faction',
	faction2: 'Willard Faction Custom',
	faction3: 'Willard Faction Custom Donk',
	fagaloa: 'Vulcar Fagaloa',
	faggio: 'Pegassi Faggio Sport',
	faggio2: 'Pegassi Faggio',
	faggio3: 'Pegassi Faggio Mod',
	fcr: 'Pegassi FCR 1000',
	fcr2: 'Pegassi FCR 1000 Custom',
	felon: 'Lampadati Felon',
	felon2: 'Lampadati Felon GT',
	feltzer: 'Benefactor  Feltzer Coupe (GTA IV)',
	feltzer2: 'Benefactor Feltzer',
	feltzer3: 'Benefactor Stirling GT',
	feroci: 'Bravado Feroci (GTA IV)',
	feroci2: 'Bravado Feroci FlyUS',
	flashgt: 'Vapid Flash GT',
	fmj: 'Vapid FMJ',
	formula: 'Progen PR4',
	formula2: 'Ocelot R88',
	fortune: 'Vapid Fortune (GTA IV)',
	fq2: 'Fathom FQ 2',
	freecrawler: 'Canis Freecrawler',
	freeway: 'Western Freeway',
	fugitive: 'Cheval Fugitive',
	furia: 'Grotti Furia',
	furoregt: 'Lampadati Furore GT',
	fusilade: 'Schyster Fusilade',
	futo: 'Karin Futo',
	futo2: 'Karin Futo GT Hatch',
	futota: 'Karin Futo T/A',
	fxt: 'Cavalcade FXT',
	gargoyle: 'Western Gargoyle',
	gauntlet: 'Bravado Gauntlet',
	gauntlet2: 'Bravado Redwood Gauntlet',
	gauntlet3: 'Bravado Gauntlet Classic',
	gauntlet4: 'Bravado Gauntlet Hellfire',
	gauntlet5: 'Bravado Gauntlet Classic Custom',
	gb200: 'Vapid GB200',
	gburrito2: 'Declasse Gang Burrito',
	glandale2: 'Benefactor Glendale Custom',
	glendale: 'Benefactor Glendale',
	gp1: 'Progen GP1',
	granger: 'Declasse Granger',
	granger2: 'Declasse Granger 3600LX',
	gresley: 'Bravado Gresley',
	growler: 'Pfister Growler',
	gt500: 'Grotti GT500',
	gtr: 'Nissan GTR',
	guardian: 'Vapid Guardian',
	habanero: 'Emperor Habanero',
	hakuchou: 'Shitzu Hakuchou',
	hakuchou2: 'Shitzu Hakuchou Drag',
	hakuchou3: 'Shitzu Hakuchou Custom',
	hakumai: 'Dinka Hakumai',
	hellfury: 'Western Hellfury',
	hellion: 'Annis Hellion',
	hermes: 'Albany Hermes',
	hexer: 'LCC Hexer',
	hotknife: 'Vapid Hotknife',
	hotring: 'Declasse Hotring Sabre',
	hpr1: 'Entara HPR-1 "Hyperion"',
	huesca: 'BF Huesca',
	huntley: 'Enus Huntley S',
	huntley2: 'Vapid Huntley Sport',
	hustler: 'Vapid Hustler',
	ignus: 'Pegassi Ignus',
	imorgon: 'Overflod Imorgon',
	impaler: 'Declasse Impaler',
	impaler2: 'Declasse Impaler Apocalypse',
	impaler3: 'Declasse Impaler Future Shock',
	impaler4: 'Declasse Impaler Nightmare',
	imperator: 'Vapid Imperator Apocalypse',
	imperator2: 'Vapid Imperator Future Shock',
	imperator3: 'Vapid Imperator Nightmare',
	infernus: 'Pegassi Infernus',
	infernus2: 'Pegassi Infernus Classic',
	ingot: 'Vulcar Ingot',
	innovation: 'LCC Innovation',
	insurgent: 'HVY Insurgent Pick-Up',
	insurgent2: 'HVY Insurgent',
	insurgent3: 'HVY Insurgent Pick-Up Custom',
	interceptor: 'Vapid Interceptor',
	intruder: 'Karin Intruder',
	issi2: 'Weeny Issi',
	issi3: 'Weeny Issi Classic',
	issi4: 'Weeny Issi Apocalypse',
	issi5: 'Weeny Issi Future Shock',
	issi6: 'Weeny Issi Nightmare',
	issi7: 'Weeny Issi Sport',
	italigtb: 'Progen Itali GTB',
	italigtb2: 'Progen Itali GTB Custom',
	italigto: 'Grotti Itali GTO',
	italirsx: 'Grotti Itali RSX',
	iwagen: 'Obey I-Wagen',
	jackal: 'Ocelot Jackal',
	jb700: 'Dewbauchee JB 700',
	jb7002: 'Dewbauchee JB 700W',
	jester: 'Dinka Jester',
	jester2: 'Dinka Jester (Racecar)',
	jester3: 'Dinka Jester Classic',
	jester4: 'Dinka Jester Sport',
	jesterv12: 'Dinka Jester Super Secret',
	journeys: 'Zirconium Journey Tourer',
	jubilee: 'Enus Jubilee',
	jugular: 'Ocelot Jugular',
	kalahari: 'Canis Kalahari',
	kamacho: 'Canis Kamacho',
	kanjo: 'Dinka Blista Kanjo',
	kentish: 'Vapid Kentish',
	khamelion: 'Hijak Khamelion',
	komoda: 'Lampadati Komoda',
	krieger: 'Benefactor Krieger',
	kuruma: 'Karin Kuruma',
	kuruma2: 'Karin Kuruma (Armored)',
	kurumata: 'Karin Kuruma T/A Mk.I',
	kurumata2: 'Karin Kuruma T/A Mk.II',
	lancea: 'Annis Lancea',
	landstalker: 'Dundreary Landstalker',
	landstalker2: 'Dundreary Landstalker XL',
	le7b: 'Annis RE-7B',
	lectro: 'Principe Lectro',
	limo2: 'Benefactor Turreted Limo',
	locust: 'Ocelot Locust',
	lokus: 'Emperor Lokus',
	loretta: 'Ocelot Loretta',
	lp700r: 'Lamborghini Aventador LP700-4 Roadster',
	lurcher: 'Albany Lurcher',
	lycan: 'Liberty Chop Shop Lycan',
	lycan2: 'Liberty Chop Shop Lycan Custom',
	lynx: 'Ocelot Lynx',
	mamba: 'Declasse Mamba',
	manana: 'Albany Manana',
	manana2: 'Albany  Manana Custom',
	manchez: 'Maibatsu Manchez',
	manchez2: 'Maibatsu Manches Scout',
	marauder: 'Paramount Marauder',
	marbelle: 'Willard Marbelle',
	massacro: 'Dewbauchee Massacro',
	massacro2: 'Dewbauchee Massacro (Racecar)',
	max33: 'Red Bull Racing RB13 (No. 33)',
	menacer: 'HVY Menacer',
	merit: 'Declasse Merit',
	mesa: 'Canis Mesa',
	mesa3: 'Canis Mesa (Merryweather)',
	michelli: 'Lampadati Michelli GT',
	minivan: 'Vapid Minivan',
	minivan2: 'Vapid Minivan Custom',
	models: 'Tesla Model S',
	monroe: 'Pegassi Monroe',
	monster: 'Vapid Liberator',
	moonbeam: 'Declasse Moonbeam',
	moonbeam2: 'Declasse Moonbeam Custom',
	nebula: 'Vulcar Nebula Turbo',
	neo: 'Vysser Neo',
	neon: 'Pfister Neon',
	nero: 'Truffade Nero',
	nero2: 'Truffade Nero Custom',
	nightblade: 'Western Nightblade',
	nightblade2: 'Liberty Chop Shop Nightblade (GTAIV)',
	nightshade: 'Imponte Nightshade',
	nightshark: 'HVY Nightshark',
	ninef: 'Obey 9F',
	ninef2: 'Obey 9F Cabrio',
	novak: 'Lampadati Novak',
	nrg900: 'Shitzu NRG900',
	odessa: 'Odessa',
	omnis: 'Obey Omnis',
	openwheel: 'Benefactor BR8',
	openwheel2: 'Declasse DR1',
	oracle: 'Ubermacht Oracle XS',
	oracle2: 'Ubermacht Oracle',
	osiris: 'Pegassi Osiris',
	outlaw: 'Nagasaki Outlaw',
	panto: 'Benefactor Panto',
	paragon: 'Enus Paragon R',
	paragon2: 'Enus Paragon R (Armored)',
	pariah: 'Ocelot Pariah',
	patriot: 'Mammoth Patriot',
	patriot2: 'Mammoth Patriot Stretch',
	patriot3: 'Mammoth Patriot Mil-Spec',
	pcj: 'Shitzu PCJ 600',
	penetrator: 'Ocelot Penetrator',
	penne: 'Lampadati 169 Penne',
	penumbra: 'Maibatsu Penumbra',
	penumbra2: 'Maibatsu Penubra FF',
	perennial: 'Dinka Perennial',
	perennial2: 'Dinka Perennial FlyUS',
	peyote2: 'Vapid Peyote Gasser',
	peyote3: 'Vapid Peyote Custom',
	pfister811: 'Pfister 811',
	phoenix: 'Imponte Phoenix',
	phoenix2: 'Imponte Phoenix T-Top',
	picador: 'Cheval Picador',
	pigalle: 'Lampadati Pigalle',
	pigth: 'Lampadati Pigalle Camper',
	pinnacle: 'Annis Pinnacle',
	pique: 'Cheval Pique',
	pmp600: 'Schyster PMP 600',
	prairie: 'Bollokan Prairie',
	premier: 'Declasse Premier',
	premier2: 'Declasse Premier Classic',
	pres: 'Albany Presidente',
	pres2: 'Albany Presidente VIOS',
	previon: 'Karin Previon',
	primo: 'Albany Primo',
	primo2: 'Albany Primo Custom',
	primov12: 'Albany Primo Club Racer',
	prototipo: 'Grotti X80 Proto',
	radi: 'Vapid Radius',
	raiden: 'Coil Raiden',
	rallytruck: 'MTL Dune',
	rancher: 'Declasse Rancher SWB',
	rancherxl: 'Declasse Rancher XL',
	rapidgt: 'Dewbauchee Rapid GT',
	rapidgt3: 'Dewbauchee Rapid GT Classic',
	raptor: 'BF Raptor',
	ratbike: 'Western Rat Bike',
	ratloader: 'Bravado Rat-Loader',
	ratloader2: 'Bravado Rat-Truck',
	rc350: 'Lexus RC 350',
	rcbandito: 'RC Bandito',
	reaper: 'Pegassi Reaper',
	rebel: 'Karin Rusty Rebel',
	rebel2: 'Karin Rebel',
	rebla: 'Ubermacht Rebla GTS',
	reblac: 'Ubermacht Rebla',
	reever: 'Western Reever',
	regina: 'Dundreary Regina',
	regina3: 'Dundreary Regina Sedan',
	remidor: 'BF Remidor',
	remower: 'Jacksheepe Lawn Mower RS',
	remus: 'Annis Remus',
	retinue: 'Vapid Retinue',
	retinue2: 'Vapid Retinue Mk II',
	revenant: 'Western Revenant',
	revolter: 'Ubermacht Revolter',
	rhapsody: 'Declasse Rhapsody',
	riata: 'Vapid Riata',
	riva: 'Declasse Riva',
	rocoto: 'Obey Rocoto',
	rom: "Albany Roman's Cab",
	romero: 'Chariot Romero Hearse',
	rrocket: 'Western Rampant Rocket',
	rrphantom: 'Rolls-Royce Phantom',
	rt3000: 'Dinka RT3000',
	ruffian: 'Pegassi Ruffian',
	ruiner: 'Imponte Ruiner',
	ruiner2: 'Imponte Ruiner 2000',
	rumpo: 'Bravado Rumpo',
	ruston: 'Hijak Ruston',
	s80: 'Annis S80RR',
	sabre: 'Declasse Sabre',
	sabre2: 'Declasse Sabre Beater (GTA IV)',
	sabregt: 'Declasse Sabre Turbo',
	sabregt2: 'Declasse Sabre Turbo Custom',
	sanchez: 'Maibatsu Sanchez (livery)',
	sanchez2: 'Maibatsu Sanchez',
	sanctus: 'LCC Sanctus',
	sandking: 'Vapid Sandking XL',
	sandking2: 'Vapid Sandking SWB',
	savanna: 'Coil Savanna',
	savestra: 'Annis Savestra',
	sc1: 'Ubermacht SC1',
	scarab: 'HVY Scarab Apocalypse',
	scarab2: 'HVY Scarab Future Shock',
	scarab3: 'HVY Scarab Nightmare',
	schafter: 'Benefactor Schafter LE',
	schafter2: 'Benefactor Schafter',
	schafter3: 'Benefactor Schafter V12',
	schafter4: 'Benefactor Schafter LWB',
	schafter5: 'Benefactor Schafter V12 (Armored)',
	schafter6: 'Benefactor Schafter LWB (Armored)',
	schaftergtr: 'Benefactor Schafter GTR',
	schlagen: 'Benefactor Schlagen GT',
	schwarzer: 'Benefactor Schwartzer',
	scramjet: 'Declasse Scramjet',
	seminole: 'Canis Seminole',
	seminole2: 'Canis Seminole Frontier',
	sentinel: 'Ubermacht Sentinel XS',
	sentinel2: 'Ubermacht Sentinel',
	sentinel3: 'Ubermacht Sentinel Classic',
	sentinel4: 'Ubermacht Sentinel Race',
	serrano: 'Benefactor Serrano',
	seven70: 'Dewbauchee Seven-70',
	shamus: 'Maxwell Shamus',
	sheava: 'Emperor ETR1',
	shinobi: 'Nagasaki Shinobi',
	shotaro: 'Nagasaki Shotaro',
	slamvan: 'Vapid Slamvan',
	slamvan2: 'Vapid Lost Slamvan',
	slamvan3: 'Vapid Slamvan Custom',
	slamvan4: 'Vapid Slamvan Apocalypse',
	slamvan5: 'Vapid Slamvan Future Shock',
	slamvan6: 'Vapid Slamvan Nightmare',
	snowmobile: 'Nagasaki Snowmobile',
	solair: 'Willard Solair',
	sovereign: 'Western Sovereign',
	sovereign2: 'Western Motorcycle Company Sovereign (GTAIV)',
	specter: 'Dewbauchee Specter',
	specter2: 'Dewbauchee Specter Custom',
	speedo: 'Vapid Speedo',
	spritzer: 'Benefactor Spritzer STR',
	spritzerdtm: 'Benefactor Spritzer DTM',
	squaddie: 'Mammoth Squaddie',
	stafford: 'Enus Stafford',
	stalion: 'Declasse Stallion',
	stalion2: 'Declasse Burger Shot Stallion',
	stanier: 'Vapid Stanier',
	stanier2: 'Vapid Stanier S',
	stinger: 'Grotti Stinger',
	stingergt: 'Grotti Stinger GT',
	stiwrc: 'Subaru Impreza Rally',
	stratum: 'Zirconium Stratum',
	stratum2: 'Zirconium Stratum Sedan',
	streiter: 'Benefactor Streiter',
	stretch: 'Dundreary Stretch',
	stretch2: 'Dundreary Stretch (GTAIV)',
	stretch3: 'Benefactor Stretch E',
	stromberg: 'Ocelot Stromberg',
	strombergsu: 'Ocelot Stromberg Specials Unit',
	stryder: 'Stryder',
	sugoi: 'Dinka Sugoi',
	sultan: 'Karin Sultan',
	sultan2: 'Karin Sultan Classic',
	sultanr: 'Karin Sultan Rally',
	sultanrs: 'Karin Sultan RS',
	sultans: 'Karin Sultan-S',
	superd: 'Enus Super Diamond',
	superd2: 'Enus Super Drop Diamond',
	supergt: 'Dewbauchee SuperGT',
	superkart: 'Superkart',
	surano: 'Benefactor Surano',
	surfer: 'BF Surfer',
	surge: 'Cheval Surge',
	swinger: 'Ocelot Swinger',
	t20: 'Progen T20',
	tailgater: 'Obey Tailgater',
	tailgater2: 'Obey Tailgater S',
	taipan: 'Cheval Taipan',
	tampa: 'Declasse Tampa',
	tampa2: 'Declasse Drift Tampa',
	tampa3: 'Declasse Weaponized Tampa',
	tanajura: 'Lemanjá Tanajura',
	taxi: 'Vapid Taxi (Stanier)',
	taxi2: 'Declasse Merit Taxi',
	taxi3: 'Vapid Stanier Taxi',
	technical: 'Karin Technical Aqua',
	technical2: 'Karin Technical',
	tempesta: 'Pegassi Tempesta',
	tezeract: 'Pegassi Tezeract',
	thrax: 'Truffade Thrax',
	thruster: 'Mammoth Thruster Jetpack',
	tigon: 'Lampadati Tigon',
	tmodel: 'Tesla Model 3',
	toreador: 'Pegassi Toreador',
	torero: 'Pegassi Torero',
	tornado2: 'Declasse Tornado',
	tornado5: 'Declasse Tornado Custom',
	tornado6: 'Declasse Tornado Rat Rod',
	toros: 'Pegassi Toros',
	trophytruck: 'Vapid Trophy Truck',
	trophytruck2: 'Vapid Desert Raid',
	tropos: 'Lampadati Tropos Rallye',
	tulip: 'Declasse Tulip',
	turismo: 'Grotti Turismo',
	turismo2: 'Grotti Turismo Classic',
	turismor: 'Grotti Turismo R',
	typhoon: 'Modena Typhoon',
	tyrant: 'Overflod Tyrant',
	tyrus: 'Progen Tyrus',
	uranus: 'Vapid Uranus',
	vacca: 'Pegassi Vacca',
	vader: 'Shitzu Vader',
	vagner: 'Dewbauchee Vagner',
	vagrant: 'Maxwell Vagrant',
	vamos: 'Declasse Vamos',
	vectre: 'Emperor Vectre',
	verlierer2: 'Bravado Verlierer',
	vertice: 'Hijak Vertice',
	veto: 'Dinka Veto Classic',
	veto2: 'Dinka Veto Modern',
	vigero: 'Declasse Vigero',
	vigero2: 'Declasse Vigero (beater variant)',
	vigilante: 'Grotti Vigilante',
	vincent: 'Maibatsu Vincent',
	vindicator: 'Dinka Vindicator',
	virgo: 'Albany Virgo',
	virgo2: 'Dundreary Virgo Classic Custom',
	virgo3: 'Dundreary Virgo Classic',
	viseris: 'Lampadati Viseris',
	visione: 'Grotti Visione',
	voltic: 'Coil Voltic',
	voltic2: 'Coil Rocket Voltic',
	voodoo: 'Declasse Voodoo',
	voodoo3: 'Declasse Voodoo Custom',
	vortex: 'Nagasaki Vortex',
	vstr: 'Albany V-STR',
	warrener: 'Vulcar Warrener',
	warrener2: 'Vulcar Warrener Pickup',
	washington: 'Albany Washington',
	wayfarer: 'Western Wayfarer',
	weevil: 'BF Weevil',
	willard: 'Willard Willard',
	windsor: 'Enus Windsor',
	windsor2: 'Enus Windsor Drop',
	winky: 'Vapid Winky',
	wolfsbane: 'Western Wolfsbane',
	wombat: 'Cheval Wombat',
	xa21: 'Ocelot XA-21',
	xls: 'Benefactor XLS',
	xls2: 'Benefactor XLS (Armored)',
	yosemite: 'Declasse Yosemite',
	yosemite2: 'Declasse Drift Yosemite',
	yosemite3: 'Declasse Yosemite Rancher',
	youga: 'Bravado Youga',
	youga2: 'Bravado Youga Classic',
	youga3: 'Bravado Youga Classic 4x4',
	youga4: 'Bravado Youga Custom',
	z190: 'Karin 190z',
	zeno: 'Overflod Zeno',
	zentorno: 'Pegassi Zentorno',
	zhaba: 'RUNE Zhaba',
	zion: 'Ubermacht Zion',
	zion2: 'Ubermacht Zion Cabrio',
	zion3: 'Ubermacht Zion Classic',
	zorrusso: 'Pegassi Zorrusso',
	zr350: 'Annis ZR350',
	zr350ta: 'Annis ZR-350 T/A',
	zr380: 'Annis ZR380 Apocalypse',
	zr3802: 'Annis ZR380 Future Shock',
	zr3803: 'Annis ZR380 Nightmare',
	ztype: 'Truffade Z-Type',
};
