// JavaScript code for the Arduino Beacon example app.

// Application object.
var app = {}

// Regions that define which page to show for each beacon.
app.beaconRegions =
[
	{
		id: 'konst-katten',
		uuid:'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
		major: 22460,		//Konsthallen
		minor: 60720
	},
	{
		id: 'musik-katten',
		uuid:'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
		major: 56506,	//musiksalen
		minor: 14941
	},
	{
		id: 'spel-katten',
		uuid:'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
		major: 64748,	//spelhallen
		minor: 20535
	}
]

// Currently displayed page.
app.currentPage = 'page-default'

app.initialize = function()
{
	document.addEventListener(
		'deviceready',
		app.onDeviceReady,
		false)
	app.gotoPage(app.currentPage)
}

// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
app.onDeviceReady = function()
{
	// Specify a shortcut for the location manager that
	// has the iBeacon functions.
	window.locationManager = cordova.plugins.locationManager

	// Start tracking beacons!
	app.startScanForBeacons()
}

app.startScanForBeacons = function()
{
	//console.log('startScanForBeacons')

	// The delegate object contains iBeacon callback functions.
	var delegate = new cordova.plugins.locationManager.Delegate()

	delegate.didDetermineStateForRegion = function(pluginResult)
	{
		//console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult))
	}

	delegate.didStartMonitoringForRegion = function(pluginResult)
	{
		//console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult))
	}

	delegate.didRangeBeaconsInRegion = function(pluginResult)
	{
		//console.log('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult))
		app.didRangeBeaconsInRegion(pluginResult)
	}

	// Set the delegate object to use.
	locationManager.setDelegate(delegate)

	// Start monitoring and ranging our beacons.
	for (var r in app.beaconRegions)
	{
		var region = app.beaconRegions[r]

		var beaconRegion = new locationManager.BeaconRegion(
			region.id, region.uuid, region.major, region.minor)

		// Start monitoring.
		locationManager.startMonitoringForRegion(beaconRegion)
			.fail(console.error)
			.done()

		// Start ranging.
		locationManager.startRangingBeaconsInRegion(beaconRegion)
			.fail(console.error)
			.done()
	}
}

// Display pages depending of which beacon is close.
app.didRangeBeaconsInRegion = function(pluginResult)
{
	//console.log('numbeacons in region: ' + pluginResult.beacons.length)

	// There must be a beacon within range.
	if (0 == pluginResult.beacons.length)
	{
		return
	}

	// Our regions are defined so that there is one beacon per region.
	// Get the first (and only) beacon in range in the region.
	var beacon = pluginResult.beacons[0]

	// The region identifier is the page id.
	var pageId = pluginResult.region.identifier

	if((pageId == 'konst-katten' && konst == false) ||
		(pageId == 'musik-katten' && musik == false) ||
		(pageId == 'spel-katten' && spel == false)) {
		//if the beacon is near, play intermediate sound
		if(beacon.proximity == 'ProximityNear') {
			app.gotoPage(pageId)
		}
	}
	/*
	// If the beacon represents the current page but is far away,
	// then show the default page.
	if ((beacon.proximity == 'ProximityFar')
		&& app.currentPage == pageId)
	{
		app.gotoPage('page-default')
		return
	}
	*/
}

app.gotoPage = function(pageId)
{
	app.hidePage(app.currentPage)
	app.showPage(pageId)
	app.currentPage = pageId
}

app.showPage = function(pageId)
{
	document.getElementById(pageId).style.display = 'block'
}

app.hidePage = function(pageId)
{
	document.getElementById(pageId).style.display = 'none'
}

// Set up the application.
app.initialize()

var konst = false
var musik = false
var spel = false
var collectedCats = 0


function collectCat(catID) {

	const sound = new Audio()

	if(catID == 'konst') {
		konst = true
	} else if(catID == 'musik') {
		musik = true
	} else if(catID == 'spel') {
		spel = true
	}
	collectedCats++;
	document.getElementById('catcounter').innerHTML = collectedCats;
	sound.src = 'sounds/angrycat.mp3'
	sound.play()
	window.navigator.vibrate(200); // vibrate for 200ms
	const btnID = catID + '-katt-btn';
	document.getElementById(btnID).disabled = true;

	goToProgressPage()
}

function goToProgressPage() {

	if(collectedCats < 3) {
		document.getElementById('progress-title').innerHTML = "Good Job, you collected a cat!";
		document.getElementById('progress-p').innerHTML = "Please continue to other rooms to find the remaining cats";
		app.gotoPage('progress-page')

	} else {
		app.gotoPage('finish-page')
	}
};
