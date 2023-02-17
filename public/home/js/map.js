const mapFolder = '/home/images/maps/';

var serversList = [
	['main', 'NY-1', 'S1', '2epova'],
	['beta', 'NY-2 (Beta)', 'S2', 'njyvop'],
	['event', 'Event Server', 'S3', 'w8j4eb'],
];

const isMobileDevice =
	typeof window.orientation !== 'undefined' ||
	navigator.userAgent.indexOf('IEMobile') !== -1;

var hdMap = !isMobileDevice;
var imglink =
	hdMap === true
		? mapFolder + 'updatedmap.png'
		: mapFolder + 'updatedmobilemap.png';

let map;
let managerIDs = [];
let members = [];
let memberDetails = {};
let followedMember = false;

function initMap(memb, mang, apps) {
	if (!L)
		return setTimeout(() => {
			initMap(memb, mang, apps);
		}, 500);
	const mapdiv = document.getElementById('map');

	window.onresize = function (event) {
		mapdiv.style.height =
			window.innerHeight -
			document.getElementById('navbar').offsetHeight +
			'px';
	};

	mapdiv.style.height =
		window.innerHeight - document.getElementById('navbar').offsetHeight + 'px';

	for (let i = 0; i < memb.length; i++) {
		members.push(memb[i].in_game_id);
		memberDetails[memb[i].in_game_id] = {
			Company: memb[i].company,
			Rank: memb[i].rank,
		};
	}

	for (let i = 0; i < apps.length; i++) {
		members.push(apps[i].in_game_id);
		memberDetails[apps[i].in_game_id] = { Company: 'Applicant' };
	}

	for (let i = 0; i < mang.length; i++) {
		managerIDs.push(mang[i].in_game_id);
	}

	map = L.map('map', {
		maxZoom: 2,
		minZoom: -4.5,
		zoomSnap: 0.25,
		crs: L.CRS.Simple,
	});

	var bounds = [
		[-4642, -6296],
		[8958, 7318],
	];
	L.imageOverlay(imglink, bounds).addTo(map);
	map.fitBounds(bounds);
	map.setView([-500, 0], -3.5);

	initGUI();

	initMarkers();

	initPlayers();

	initCanvas();

	map.on('popupopen', function (ev) {
		const match = ev.popup.getContent().match(/data-ingameid="(\d*)"/);
		if (!match) return;
		followedMember = match[1];
		if (!followedMember) return;
		map.setView(ev.popup.getLatLng());
	});

	map.on('popupclose', function (ev) {
		followedMember = false;
	});
}
