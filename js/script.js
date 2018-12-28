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

var map;
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

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.326116, lng: -7.946834},
        zoom: 6,
        styles: styles,
        disableDefaultUI: true,
        mapTypeControl: false
    });

      //add the listener to the map within the initMap
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
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
                '<div id="infoWindow">' + marker.title +  '</div>' +
                '<div>' + '<button class="btn btn-default mapButton" type="submit">TODAY</button>' + '</div>' +
                '<div>' + '<button class="btn btn-default mapButton" type="submit">NEXT 3 DAY</button>' + '</div>'
                );
            infowindow.open(map, marker);
            infowindow.addListener('closeclick', function() {
                    infowindow.setMarker = null;
                }
            );
        }
    }
};

// Set surf spots HTML

var directions = document.getElementById('directions');
var surfingSpots = document.getElementById('surfingSpots');
var forecast = document.getElementById('forecast');

var btnN = document.getElementById('btn-n');
var btnE = document.getElementById('btn-e');
var btnW = document.getElementById('btn-w');
var btnS = document.getElementById('btn-s');

var btnNStepOne = btnN.addEventListener('click', stepOne);
var btnEStepOne = btnE.addEventListener('click', stepOne);
var btnWStepOne = btnW.addEventListener('click', stepOne);
var btnSStepOne = btnS.addEventListener('click', stepOne);

var surfingSpotsNorth = [surfSpots[0].title, surfSpots[1].title, surfSpots[2].title];
var surfingSpotsWest = [surfSpots[3].title, surfSpots[4].title, surfSpots[5].title, surfSpots[6].title, surfSpots[7].title, surfSpots[8].title, surfSpots[9].title, surfSpots[10].title, surfSpots[11].title, surfSpots[12].title];
var surfingSpotsSouth = [surfSpots[13].title, surfSpots[14].title, surfSpots[15].title, surfSpots[16].title, surfSpots[17].title];
var surfingSpotsEast = [surfSpots[18].title, surfSpots[19].title];

function surfTitle(spot) {
    var result = '';
    for (var i = 0; i < spot.length; i++) {
        result += '<div class="col-xs-12 padding">' + '<button class="btn btn-default spot" type="submit">'+spot[i]+'</button>' + '</div>';
    }
    return result;
};

// List of Surf Spots based on Direction

function stepOne(e) {
    if (surfingSpots.classList.contains('hidden')) {
        directions.classList.add('hidden');

        if (e.target.id === 'btn-n') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsNorth) + '</div>' + '</div>';
            map.setCenter({ lat : 55.307211, lng : -7.373801 });
            map.setZoom(8);
        } else if (e.target.id === 'btn-w') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsWest) + '</div>' + '</div>';
            map.setCenter({ lat : 53.365468, lng : -9.814509 });
            map.setZoom(6.8);
        } else if (e.target.id === 'btn-s') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsSouth) + '</div>' + '</div>';
            map.setCenter({ lat : 51.789279, lng : -8.285663 });
            map.setZoom(7);
        } else if (e.target.id === 'btn-e') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsEast) + '</div>' + '</div>';
            map.setCenter({ lat : 53.148223, lng : -6.077892 });
            map.setZoom(9);
        };

        surfingSpots.classList.remove('hidden');
    }
};

// Surf Forecast per Surf Spot


function selectSpot(e) {
    
}

var spotForecast = document.getElementById('surfingSpots').addEventListener('click', function(e) {
    console.log(e.target.childNodes[0].data);
    if (e.target && e.target.matches('button.spot')) {
        // console.log('Button element clicked');
        if (forecast.classList.contains('hidden')) {
            surfingSpots.classList.add('hidden');

            // console.log(e.target);
            // console.log(e.target.matches('button.spot'));

            if (e.target.childNodes[0].data) XxXXXX

            forecast.classList.remove('hidden');  
        } 
        }
    }
);

// var spotForecastSelection = spotForecast.addEventListener('click', stepTwo);

// function stepTwo(e) {

// }
