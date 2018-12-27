window.addEventListener('load', function(event) {
    console.log('All resources finished loading!');

  });

// Surf Spots definition

var surfSpots = [
    {title: 'Portrush', county: 'Antrim', location: {lat: 55.170241, lng: -6.731873}, point: 0},
    {title: 'Magheroarty', county: 'Donegal', location: {lat: 55.162985, lng: -8.143272}, point: 0},
    {title: 'Falcarragh', county: 'Donegal', location: {lat: 55.16073, lng: -8.085937}, point: 0},
    {title: 'Rossnowlagh', county: 'Donegal', location: {lat: 54.555689, lng: -8.210135}, point: 270},
    {title: 'Bundoran', county: 'Donegal', location: {lat: 54.492515, lng: -8.268799}, point: 315},
    {title: 'Easky', county: 'Sligo', location: {lat: 54.291575, lng: -8.955840}, point: 0},
    {title: 'Inishcrone', county: 'Sligo', location: {lat: 54.211954, lng: -9.102001}, point: 0},
    {title: 'Keel', county: 'Mayo', location: {lat: 53.973033, lng: -10.07223}, point: 225},
    {title: 'Dun Loughan', county: 'Galway', location: {lat: 53.419440, lng: -10.148626}, point: 225},
    {title: 'Lahinch', county: 'Clare', location: {lat: 52.933675, lng: -9.350100}, point: 225},
    {title: 'Doonbeg', county: 'Clare', location: {lat: 52.76445, lng: -9.493389}, point: 270},
    {title: 'Castlegregory', county: 'Kerry', location: {lat: 52.276666, lng: -10.037212}, point: 315},
    {title: 'Inch Strand', county: 'Kerry', location: {lat: 52.137499, lng: -9.979695}, point: 225},
    {title: 'Barley Cove', county: 'Cork', location: {lat: 51.468823, lng: -9.775531}, point: 180},
    {title: 'Inchydoney', county: 'Cork', location: {lat: 51.595535, lng: -8.861236}, point: 135},
    {title: 'Castlefreake', county: 'Cork', location: {lat: 51.557116, lng: -8.966045}, point: 225},
    {title: 'Garretstown', county: 'Cork', location: {lat: 51.640028, lng: -8.564953}, point: 225},
    {title: 'Tramore', county: 'Waterford', location: {lat: 52.156210, lng: -7.127300}, point: 180},
    {title: 'Magheramore', county: 'Wicklow', location: {lat: 52.930841, lng: -6.023053}, point: 135},
    {title: 'Whiterock', county: 'Dublin', location: {lat: 53.265934, lng: -6.106232}, point: 135}
] 

// Google Maps API

function initMap() {

    var styles = [
        {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
                { color: '#3E4EA4' }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'all',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
                { color: '#ffffff' }
            ]
        },
        {
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'water',
            elementType: 'all',
            stylers: [
                { color: '#FD6591' }
            ]
        }
    ]

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.326116, lng: -7.946834},
        zoom: 6,
        styles: styles,
        disableDefaultUI: true,
        mapTypeControl: false
    });

    var markers = [];
    
    var infoWindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < surfSpots.length; i++) {
        var position = surfSpots[i].location;
        var title = surfSpots[i].title;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: {
                url: 'assets/Marker_custom.png'
              }
        });
        // Push marker to our array of markers
        markers.push(marker);
        // Create an onclick event to open an infoWindow at each marker
        marker.addListener('click', function() {
            populateInfoWindow(this, infoWindow);
        });
        bounds.extend(marker.position);
    }

    // Extend the boundaries of the map for each marker
    // map.fitBounds(bounds);

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent(
                '<div id=infoWindow>' + marker.title +  '</div>' +
                '<div>' + '<button class="btn btn-default" type="submit">TODAY</button>' + '</div>' +
                '<div>' + '<button class="btn btn-default" type="submit">NEXT 3 DAY</button>' + '</div>'
                );
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker = null;
            });
        }
    }
}

var directions = document.getElementById('directions');
var surfingSpots = document.getElementById('surfingSpots');
var forecastToday = document.getElementById('forecastToday');
var forecastNext = document.getElementById('forecastNext');

var btnN = document.getElementById('btn-n');
var btnE = document.getElementById('btn-e');
var btnW = document.getElementById('btn-w');
var btnS = document.getElementById('btn-s');

var btnNStepOne = btnN.addEventListener('click', stepOne);
var btnEStepOne = btnE.addEventListener('click', stepOne);
var btnWStepOne = btnW.addEventListener('click', stepOne);
var btnSStepOne = btnS.addEventListener('click', stepOne);

var surfingSpotsNorth = [surfSpots[0], surfSpots[1], surfSpots[2]];
var surfingSpotsWest = [surfSpots[3], surfSpots[4], surfSpots[5], surfSpots[6], surfSpots[7], surfSpots[8], surfSpots[9], surfSpots[10], surfSpots[11], surfSpots[12]];
var surfingSpotsSouth = [surfSpots[13], surfSpots[14], surfSpots[15], surfSpots[16], surfSpots[17]];
var surfingSpotsEast = [surfSpots[18], surfSpots[19]];

var surfingSpotsDivOne = document.createElement('div');
    surfingSpotsDivOne.className = 'row text-center';
    surfingSpotsDivOne.innerHTML = ('<div class="col-xs-12 button">' +
                                    '<ul>Surfing Spots</ul>');
// var surfingSpotsDivTwo = document.createElement('div');
//     surfingSpotsDivTwo.className = 'col-xs-12 button';
// var surfingSpotsUl = document.createElement('ul');
//     surfingSpotsUl.innerHTML = 'bla bla';

function stepOne(e) {
    if (surfingSpots.classList.contains('diss')) {
        directions.classList.add('diss');
        // console.log(e.target.id);
        // console.log(surfingSpots);
        // console.log(surfingSpotsNorth);
        if (e.target.id === 'btn-n') {
            document.body.insertBefore(surfingSpotsDivOne, forecastToday);
            // document.body.insertBefore(surfingSpotsDivTwo, surfingSpotsUl);
            // document.body.insertBefore(surfingSpotsDivOne, surfingSpotsDivTwo);
        }
        surfingSpots.classList.remove('diss');
    }
};




// surfingSpots.addEventListener('click', stepOne);

// function stepTwo(e) {
//     if (e)
  
  
//     if (surfingSpots.classList.contains('diss')) {
//         directions.classList.add('diss');
//         surfingSpots.classList.remove('diss');
//     }
// };