// Surfing locations definition

var surfSpots = [
    {
        title: 'Portrush', 
        county: 'Antrim', 
        location: {lat: 55.170241, lng: -6.731873}, 
        point: 0, 
        map: 'north', 
        station: '%22Malin_Head%22', 
        stationGfs: '%22Malin_Head%22', 
        buoy: '%22M4%22'
    },
    {
        title: 'Magheroarty', 
        county: 'Donegal', 
        location: {lat: 55.162985, lng: -8.143272}, 
        point: 0, 
        map: 'north', 
        station: '%22Aranmore%22', 
        stationGfs: '%22Malin_Head%22', 
        buoy: '%22M4%22'
    },
    {title: 'Falcarragh', county: 'Donegal', location: {lat: 55.16073, lng: -8.085937}, point: 0, map: 'north', station: '%22Aranmore%22', stationGfs: '%22Malin_Head%22', buoy: '%22M4%22'},
    {title: 'Rossnowlagh', county: 'Donegal', location: {lat: 54.555689, lng: -8.210135}, point: 270, map: 'west', station: '%22Killybegs%22', stationGfs: '%22Achill%22', buoy: '%22M4%22'},
    {title: 'Bundoran', county: 'Donegal', location: {lat: 54.492515, lng: -8.268799}, point: 315, map: 'west', station: '%22Killybegs%22', stationGfs: '%22Achill%22', buoy: '%22M4%22'},
    {title: 'Easky', county: 'Sligo', location: {lat: 54.291575, lng: -8.955840}, point: 0, map: 'west', station: '%22Sligo%22', stationGfs: '%22Achill%22', buoy: '%22M4%22'},
    {title: 'Inishcrone', county: 'Sligo', location: {lat: 54.211954, lng: -9.102001}, point: 0, map: 'west', station: '%22Sligo%22', stationGfs: '%22Achill%22', buoy: '%22M4%22'},
    {title: 'Keel', county: 'Mayo', location: {lat: 53.973033, lng: -10.07223}, point: 225, map: 'west', station: '%22Ballyglass%22', stationGfs: '%22Achill%22', buoy: '%22Belmullet_Inner%22'},
    {title: 'Dun Loughan', county: 'Galway', location: {lat: 53.419440, lng: -10.148626}, point: 225, map: 'west', station: '%22Rossaveel%22', stationGfs: '%22Achill%22', buoy: '%22Belmullet_Inner%22'},
    {title: 'Lahinch', county: 'Clare', location: {lat: 52.933675, lng: -9.350100}, point: 225, map: 'west', station: '%22Rossaveel%22', stationGfs: '%22Achill%22', buoy: '%22Spiddal%22'},
    {title: 'Doonbeg', county: 'Clare', location: {lat: 52.76445, lng: -9.493389}, point: 270, map: 'west', station: '%22Rossaveel%22', stationGfs: '%22Achill%22', buoy: '%22Spiddal%22'},
    {title: 'Castlegregory', county: 'Kerry', location: {lat: 52.276666, lng: -10.037212}, point: 315, map: 'west', station: '%22Dingle%22', stationGfs: '%22Mizen_Head%22', buoy: '%22Spiddal%22'},
    {title: 'Inch Strand', county: 'Kerry', location: {lat: 52.137499, lng: -9.979695}, point: 225, map: 'west', station: '%22Dingle%22', stationGfs: '%22Mizen_Head%22', buoy: '%22Spiddal%22'},
    {title: 'Barley Cove', county: 'Cork', location: {lat: 51.468823, lng: -9.775531}, point: 180, map: 'south', station: '%22Castletownbere%22', stationGfs: '%22Mizen_Head%22', buoy: '%22M3%22'},
    {title: 'Inchydoney', county: 'Cork', location: {lat: 51.595535, lng: -8.861236}, point: 135, map: 'south', station: '%22Ringaskiddy%22', stationGfs: '%22Cork%22', buoy: '%22Cork%22'},
    {title: 'Castlefreake', county: 'Cork', location: {lat: 51.557116, lng: -8.966045}, point: 225, map: 'south', station: '%22Ringaskiddy%22', stationGfs: '%22Cork%22', buoy: '%22Cork%22'},
    {title: 'Garretstown', county: 'Cork', location: {lat: 51.640028, lng: -8.564953}, point: 225, map: 'south', station: '%22Ringaskiddy%22', stationGfs: '%22Cork%22', buoy: '%22Cork%22'},
    {title: 'Tramore', county: 'Waterford', location: {lat: 52.156210, lng: -7.127300}, point: 180, map: 'south', station: '%22Dunmore_East%22', stationGfs: '%22Wexford%22', buoy: '%22M5%22'},
    {title: 'Magheramore', county: 'Wicklow', location: {lat: 52.930841, lng: -6.023053}, point: 135, map: 'east', station: '%22Arklow%22', stationGfs: '%22Dublin%22', buoy: '%22M2%22'},
    {title: 'Whiterock', county: 'Dublin', location: {lat: 53.265934, lng: -6.106232}, point: 135, map: 'east', station: '%22Dublin_Port%22', stationGfs: '%22Dublin%22', buoy: '%22M2%22'}
]; 

// Surfing direction definition

var mapLocation = [
    {
        'id': 'north',
        'listOfSpots': [surfSpots[0].title, surfSpots[1].title, surfSpots[2].title],
        'setCenter': { lat : 55.307211, lng : -7.373801 },
        'setZoom': 8
    },
    {
        'id': 'west',
        'listOfSpots': [surfSpots[3].title, surfSpots[4].title, surfSpots[5].title, surfSpots[6].title, surfSpots[7].title, surfSpots[8].title, surfSpots[9].title, surfSpots[10].title, surfSpots[11].title, surfSpots[12].title],
        'setCenter': { lat : 53.365468, lng : -9.814509 },
        'setZoom': 6.8
    },
    {
        'id': 'south',
        'listOfSpots': [surfSpots[13].title, surfSpots[14].title, surfSpots[15].title, surfSpots[16].title, surfSpots[17].title],
        'setCenter': { lat : 51.789279, lng : -8.285663 },
        'setZoom': 7
    },
    {
        'id': 'east',
        'listOfSpots': [surfSpots[18].title, surfSpots[19].title],
        'setCenter': { lat : 53.148223, lng : -6.077892 },
        'setZoom': 9
    },
];

// Google Maps API

var map;
var styles = [
    {featureType: 'landscape', elementType: 'all', stylers: [{ color: '#3E4EA4' }]},
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
];

// Map initializing and markers definition

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.326116, lng: -7.946834},
        zoom: 6,
        styles: styles,
        disableDefaultUI: true,
        mapTypeControl: false
    });

    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
    });

    var markers = [];
    
    var infoWindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < surfSpots.length; i++) {
        var position = surfSpots[i].location;
        var title = surfSpots[i].title;
        var county = surfSpots[i].county;
        var mapDir = surfSpots[i].map;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            county: county,
            mapDir: mapDir,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: {
                url: 'assets/icon.svg'
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

    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent(`
            <p>${marker.title}</p>
            <p>Co. ${marker.county}</p>
            <p>${marker.mapDir} SPOT</p>`)
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
var menuList = document.getElementById('menuList');
var menuNav = document.getElementById('menu');
var menuClose = document.getElementById('close');

var goBack = document.getElementById('goback');
var go2Back = document.getElementById('go2back');

var menu = document.getElementById('menu').addEventListener('click', menuReveal);
var close = document.getElementById('close').addEventListener('click', menuHide);
var about = document.getElementById('about');
var aboutIn = document.getElementById('about-li').addEventListener('click', aboutReveal);

var btnN = document.getElementById('btn-n').addEventListener('click', stepOne);
var btnE = document.getElementById('btn-e').addEventListener('click', stepOne);
var btnW = document.getElementById('btn-w').addEventListener('click', stepOne);
var btnS = document.getElementById('btn-s').addEventListener('click', stepOne);

var menuN = document.getElementById('menu-n').addEventListener('click', menuLink);
var menuE = document.getElementById('menu-e').addEventListener('click', menuLink);
var menuW = document.getElementById('menu-w').addEventListener('click', menuLink);
var menuS = document.getElementById('menu-s').addEventListener('click', menuLink);

function surfTitle(spot) {
    var result = '';
    for (var i = 0; i < spot.length; i++) {
        result += `<div class="col-xs-12 padding"><button class="btn btn-default spot" type="submit">${spot[i]}</button></div>`;
    }
    return result;
};

function listSpots(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            surfingSpots.innerHTML = `<div class="row text-center"><div class="col-xs-12 button">${surfTitle(myArray[i].listOfSpots)}</div></div>`;
        }
    }
}

function mapCenter(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i].setCenter;
        }
    }
};

function mapZoom(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i].setZoom;
        }
    }
};

// Step One: Selection of Surf Spots directions

function backToHome(e) {
    if (e.target.id = 'goback') {
        directions.classList.remove('hidden');
        surfingSpots.classList.add('hidden');
        goBack.classList.add('hidden');
        map.setCenter({ lat: 53.326116, lng: -7.946834 });
        map.setZoom(6);
    }
};

function stepOne(e) {
    if (surfingSpots.classList.contains('hidden')) {
        directions.classList.add('hidden');
        surfingSpots.classList.remove('hidden');
        goBack.classList.remove('hidden');
        
        function backToHome(e) {
            if (e.target.id = 'goback') {
                directions.classList.remove('hidden');
                surfingSpots.classList.add('hidden');
                goBack.classList.add('hidden');
                map.setCenter({ lat: 53.326116, lng: -7.946834 });
                map.setZoom(6);
            }
        };

        var goBackTo = goBack.addEventListener('click', backToHome);

        listSpots(e.target.classList[4], mapLocation);
        map.setCenter(mapCenter(e.target.classList[4], mapLocation));
        map.setZoom(mapZoom(e.target.classList[4], mapLocation));
        
        if (e.target.id === 'btn-n') {
            go2Back.classList.add('north');
            go2Back.classList.remove('west', 'east', 'south');
        } else if (e.target.id === 'btn-w') {
            go2Back.classList.add('west');
            go2Back.classList.remove('north', 'east', 'south');
        } else if (e.target.id === 'btn-s') {
            go2Back.classList.add('south');
            go2Back.classList.remove('west', 'east', 'north');
        } else if (e.target.id === 'btn-e') {
            go2Back.classList.add('east');
            go2Back.classList.remove('west', 'north', 'south');
        };
    }
};

// Surf Forecast per Surf Spot
// Function to match the surf spot name with selection in order to get the lat and lng values

function searchLocation(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].location;
        }
    }
};

// Function to match surf spots direction with forecast wind direction in order to determine the type of the wind

function searchPoint(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].point;
        }
    }
};

function searchStation(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].station;
        }
    }
};

function searchStationGfs(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].stationGfs;
        }
    }
};

function searchBuoy(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].buoy;
        }
    }
};

function storageKey(nameKey, myArray) {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].title;
        }
    }
};

var spotForecast = document.getElementById('surfingSpots').addEventListener('click', stepTwo);

function stepTwo(e) {
    console.log(e.target.childNodes[0].data);
    console.log(e);
    var selection = e.target.childNodes[0].data;
    if (e.target && e.target.matches('button.spot')) {
        // console.log('Button element clicked');
        if (forecast.classList.contains('hidden')) {
            surfingSpots.classList.add('hidden');
            forecast.classList.remove('hidden');
            goBack.classList.add('hidden');
            go2Back.classList.remove('hidden');  

            map.setCenter(searchLocation(selection, surfSpots));
            map.setZoom(12);

            // Fetch API from Marine Institute of Ireland

            var timeToday = new Date();

            // Adding second digit for day and month < 10
            function addZero(n) {
                return n < 10 ? '0' + n : '' + n;
            };
            
            var timeTodayFormat = timeToday.getFullYear() + '-' + addZero(timeToday.getMonth() + 1) + '-' + addZero(timeToday.getDate());

            var timeTomorrow = timeToday.setDate(timeToday.getDate() + 4);

            // Unix time to local time conversion
            function timeConverter(t) {
                var tmr = new Date(t);
                var year = tmr.getFullYear();
                var month = addZero(tmr.getMonth() + 1);
                var day = addZero(tmr.getDate());
                var time = year + '-' + month + '-' + day;
                return time; 
            }

            var timeFrom = timeTodayFormat + 'T00%3A00%3A00Z';
            var timeTo = timeConverter(timeTomorrow) + 'T00%3A00%3A00Z';
            var station = searchStation(selection, surfSpots);
            var stationGfs = searchStationGfs(selection, surfSpots);
            var buoy = searchBuoy(selection, surfSpots);
            console.log(timeFrom);
            console.log(timeTo);

            async function forecastData() {
                // var buoyApi = await fetch(`https://erddap.marine.ie/erddap/tabledap/IMI-WaveBuoyForecast.json?time%2CstationID%2Csignificant_wave_height%2Cmean_wave_period&time%3E=${timeFrom}&time%3C=${timeTo}&stationID=${buoy}`);
                var buoyApi = await fetch(`https://erddap.marine.ie/erddap/tabledap/IMI-WaveBuoyForecast.json?time%2CstationID%2Csignificant_wave_height%2Cmean_wave_period&stationID=${buoy}`);
                var buoyData = await buoyApi.json();
                console.log(buoyData.table);

                var gfsApi = await fetch(`https://erddap.marine.ie/erddap/tabledap/GFS-WeatherTimeSeries.json?time%2CstationID%2CWindSpeed%2CWindDirection&time%3E=${timeFrom}&time%3C=${timeTo}&stationID=${stationGfs}`);
                var gfsData = await gfsApi.json();
                console.log(gfsData.table);

                var tidesApi = await fetch(`https://erddap.marine.ie/erddap/tabledap/IMI-TidePrediction.json?time%2CstationID%2CWater_Level_ODM&time%3E=${timeFrom}&time%3C=${timeTo}&stationID=${station}`);
                var tidesData = await tidesApi.json();
                console.log(tidesData.table);

                // Buoy Data: Wave Height and Period
                    // workaround issue with dataset at source - unable to select date restrains
                var waveData = buoyData.table.rows.splice(-289, 193);

                var waveAfternoon = waveData.splice(-163, 11);      // hours 15:00 - 20:00
                var waveMidday = waveData.splice(-161, 9);          // hours 10:30 - 14:30
                var waveMorning = waveData.splice(-163, 11);        // hours 05:00 - 10:00
                var waveDFour = waveData.splice(-39, 31);           // hours 05:00 - 20:00
                var waveDThree = waveData.splice(-56, 31);          // hours 05:00 - 20:00
                var waveDTwo = waveData.splice(-73, 31);            // hours 05:00 - 20:00

                console.log(waveData);
                console.log(waveAfternoon);
                console.log(waveMidday);
                console.log(waveMorning);
                console.log(waveDFour);
                console.log(waveDThree);
                console.log(waveDTwo);

                // GFS Data: Wind Speed and Direction

                var windData = gfsData.table.rows;
                var windAfternoon = windData.splice(-28, 3);    // hours 15:00, 18:00, 21:00
                var windMidday = windData.splice(-26, 1);       // hours 12:00
                var windMorning = windData.splice(-27, 2);      // hours 06:00, 09:00
                var windDFour = windData.splice(-7, 6);         // hours 06:00 - 21:00
                var windDThree = windData.splice(-9, 6);        // hours 06:00 - 21:00
                var windDTwo = windData.splice(-11, 6);         // hours 06:00 - 21:00                                

                // console.log(windData);
                // console.log(windAfternoon);
                // console.log(windMidday);
                // console.log(windMorning);
                // console.log(windDFour);
                // console.log(windDThree);
                // console.log(windDTwo);

                // Calculating Average values for wave and wind values 
                
                function wave(time) {
                    var totalWaveHeight = 0;
                    var totalWavePeriod = 0;
                
                    time.forEach(function(hour) {
                        totalWaveHeight += hour[2];
                        totalWavePeriod += hour[3];
                        });
                    
                    var average = new Object();
                    average['waveHeight'] = Math.round(totalWaveHeight / time.length);
                    average['wavePeriod'] = Math.round(totalWavePeriod / time.length);
                    return average;
                }

                function wind(time) {
                    var totalWindDirection = 0;
                    var totalWindSpeed = 0;
                
                    time.forEach(function(hour) {
                        totalWindDirection += hour[3];
                        totalWindSpeed += hour[2];
                        });
                
                    var average = new Object();
                    average['windDirection'] = Math.round(totalWindDirection / time.length);
                    average['windSpeed'] = Math.round((totalWindSpeed * 0.5144444) / time.length);
                    return average;
                }
                
                // console.log(waveMorning);
                // console.log(waveMidday);
                // console.log(waveAfternoon);
                // console.log(windMorning);
                // console.log(windMidday);
                // console.log(windAfternoon);

                var waveMorningAverage = wave(waveMorning);
                var waveMiddayAverage = wave(waveMidday);
                var waveAfternoonAverage = wave(waveAfternoon);
                var waveDTwoAverage = wave(waveDTwo);
                var waveDThreeAverage = wave(waveDThree);
                var waveDFourAverage = wave(waveDFour);

                var windMorningAverage = wind(windMorning);
                var windMiddayAverage = wind(windMidday);
                var windAfternoonAverage = wind(windAfternoon);
                var windDTwoAverage = wind(windDTwo);
                var windDThreeAverage = wind(windDThree);
                var windDFourAverage = wind(windDFour);

                // console.log(waveMorningAverage);
                // console.log(waveMiddayAverage);
                // console.log(waveAfternoonAverage);
                // console.log(waveDTwoAverage);
                // console.log(waveDThreeAverage);
                // console.log(waveDFourAverage);
                // console.log(windMorningAverage);
                // console.log(windMiddayAverage);
                // console.log(windAfternoonAverage);
                console.log(windDTwoAverage);
                console.log(windDThreeAverage);
                console.log(windDFourAverage);

                // var dayOneAverage = timeOfDay(dayOne);
                // var dayTwoAverage = timeOfDay(dayTwo);
                // var dayThreeAverage = timeOfDay(dayThree);

                // Function that return degrees that fall withing range of word directions:
        
            function direction(value) {
                return ((value >= 0 && value < 22.5) || value >=337.5) ? 0
                    : (value >= 22.5 && value < 67.5) ? 45
                    : (value >= 67.5 && value < 112.5) ? 90
                    : (value >= 112.5 && value < 157.5) ? 135
                    : (value >= 157.5 && value < 202.5) ? 180
                    : (value >= 202.5 && value < 247.5) ? 225
                    : (value >= 247.5 && value <292.5) ? 270
                    : (value >= 292.5 && value <337.5) ? 315
                    : null;
            }
            console.log(windMorningAverage);
            // console.log(direction(windMorningAverage.windDirection)); 
            // console.log(surfSpots.point);
 
            // Wind types that usues the wind direction and surf spots pointing direction to determin tyoe of wind for location
                    
            function windType(data) {

                var wind = direction(data);
                var point = searchPoint(selection, surfSpots);
        
                // console.log('Wind & Surf Spot wind directions: ' + wind + ' ' + point);
        
                var range = [wind, point];
        
                // console.log('An Array of wind & point direction values: ' + range);
                
                function check() {
                    if ((wind - point) === 0) {
                      return 'OFF';
                    } else if (
                      (range[0] === 0) && (range[1] === 180) ||
                      (range[0] === 180) && (range[1] === 0) ||
                      (range[0] === 90) && (range[1] === 270) ||
                      (range[0] === 270) && (range[1] === 90) ||
                      (range[0] === 45) && (range[1] === 225) ||
                      (range[0] === 225) && (range[1] === 45) ||
                      (range[0] === 135) && (range[1] === 315) ||
                      (range[0] === 315) && (range[1] === 135)) {
                      return 'ON';
                    } else {
                      return 'CROSS';
                    }
                  }
        
                return check();
            };

            console.log(windType(windMorningAverage.windDirection));   
                    
            // Tide Data: D3.js DATA definition

            var tidePrediction = tidesData.table.rows;
            var delta = 10;
            
                // One day forecast
            var tidesTime = [];
            var tidesValue = [];
            var tidesTimeValue = {};

            for (i = 0; i < 240; i = i + delta) {
                tidesTime.push(tidePrediction[i][0]);
            }
            

            for (i = 0; i < 240; i = i + delta) {
                tidesValue.push(tidePrediction[i][2]);
            }
            
            // UTC time to Hour and Minutes

            var time = new Date(tidesTime[10]);
            // var timeHM = time.getUTCHours() + ':' + time.getUTCMinutes();

            tidesTime.forEach(function (time, i) {
                return tidesTimeValue[time] = tidesValue[i];
            });

            // console.log(tidesTime);
            // console.log(tidesValue);
            // console.log(tidesTimeValue);
            
            var dataApi = [];

            for (i = 0; i < 240; i = i + delta) {
                dataApi.push (
                    {
                        date: (new Date(tidePrediction[i][0])).getUTCHours(),
                        value: tidePrediction[i][2]
                    });
            };

            // console.log(dataApi);
            
                // Nest 3 days forecast
            var tidesTimeEx = [];
            var tidesValueEx = [];
            var tidesTimeValueEx = {};
            // console.log(tidePrediction);
            for (i = 240; i < 960; i = i + delta) {
                tidesTimeEx.push(tidePrediction[i][0]);
            }
            

            for (i = 240; i < 960; i = i + delta) {
                tidesValueEx.push(tidePrediction[i][2]);
            }
            
            tidesTimeEx.forEach(function (time, i) {
                return tidesTimeValueEx[time] = tidesValueEx[i];
            });

            // console.log(tidesTimeEx);
            // console.log(tidesValueEx);
            // console.log(tidesTimeValueEx);

            var dataApiEx = [];

            for (i = 240; i < 960; i = i + delta) {
                dataApiEx.push (
                    {
                        date: (new Date(tidePrediction[i][0])).getUTCHours(),
                        value: tidePrediction[i][2]
                    });
            };

            // console.log(dataApiEx);

            // Day format for data content display
            var day = new Date();
            var dayWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            var dayWeekShort = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            var dayDisplay = dayWeek[day.getDay() + 1];

            Date.prototype.addDays = function(days) {
            // function addDays(days) {
                var date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            }
            
            var date = new Date();

            // console.log(dayWeek[(date.addDays(3)).getDay()]);
            console.log(windType(selection));

            forecast.innerHTML =`
            <div class="container-fluid" id="todayFor">

                <div class="container-fluid">
                  <div class="row text-center">
                    <div class="col-xs-12 title">
                        <h1>${selection.toUpperCase()}</h1>
                        <h2>TODAY</h2>
                        <p class="nextDays">+ 3 DAYS</p>
                    </div>
                  </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">
                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                        <h2>MORNING</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveMorningAverage.waveHeight = waveMorningAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveMorningAverage.wavePeriod = waveMorningAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windMorningAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windMorningAverage.windSpeed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">

                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                        <h2>MIDDAY</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveMiddayAverage.waveHeight = waveMiddayAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveMiddayAverage.wavePeriod = waveMiddayAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windMiddayAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windMiddayAverage.windSpeed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">

                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                        <h2>AFTERNOON</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveAfternoonAverage.waveHeight = waveAfternoonAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveAfternoonAverage.wavePeriod = waveAfternoonAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windAfternoonAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windAfternoonAverage.windSpeed}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="container-fluid">  
                    <div class="row card text-center">
                        <div class="col-xs-12 day" id="tides">
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="container-fluid hidden" id="tmrwFor">

                <div class="container-fluid">
                  <div class="row text-center">
                    <div class="col-xs-12 title">
                        <h1>${selection.toUpperCase()}</h1>
                        <h2>+ 3 DAYS</h2>
                        <p class="today">TODAY</p>
                    </div>
                  </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">
                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                        <h2>${dayWeek[(date.addDays(1)).getDay()]}</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveDTwoAverage.waveHeight = waveDTwoAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveDTwoAverage.wavePeriod = waveDTwoAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windDTwoAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windDTwoAverage.windSpeed = windDTwoAverage.windSpeed || '-'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">

                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                    <h2>${dayWeek[(date.addDays(2)).getDay()]}</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveDThreeAverage.waveHeight = waveDThreeAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveDThreeAverage.wavePeriod = waveDThreeAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windDThreeAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windDThreeAverage.windSpeed = windDThreeAverage.windSpeed || '-'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">  
                    <div class="row card ">
                        <div class="col-xs-12 day">

                            <div class="container-fluid time-day"> 
                                <div class="row text-center">
                                    <div class="col-xs-12 text-center">
                                    <h2>${dayWeek[(date.addDays(3)).getDay()]}</h2>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 values">
                                        <p>${waveDFourAverage.waveHeight = waveDFourAverage.waveHeight || '-'}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WAVE</strong></p>
                                            <p><small>m | s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${waveDFourAverage.wavePeriod = waveDFourAverage.wavePeriod || '-'}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid details">
                                <div class="row text-center">
                                    <div class="col-xs-4 string"> 
                                        <p>${windType(windDFourAverage.windDirection)}</p>
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="desc">
                                            <p><strong>WIND</strong></p>
                                            <p><small>shore | m/s</small></p>
                                        </div>
                                    </div>
                                    <div class="col-xs-4 values">
                                        <p>${windDFourAverage.windSpeed = windDFourAverage.windSpeed || '-'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="container-fluid">  
                    <div class="row card text-center">
                        <div class="col-xs-12 day" id="tides-extended">
                        </div>
                    </div>
                </div>
                
            </div>`

            var todayFor = document.getElementById('todayFor');
            var tmrwFor = document.getElementById('tmrwFor');
            // console.log((document.getElementsByClassName('nextDays'))[0]);
            var nextDays = (document.getElementsByClassName('nextDays'))[0].addEventListener('click', forecastToggle);
            var today = (document.getElementsByClassName('today'))[0].addEventListener('click', forecastToggle);

            function forecastToggle(e) {
                if (e.target.classList.contains('nextDays')) {
                    todayFor.classList.add('hidden');
                    tmrwFor.classList.remove('hidden');
                } else if (e.target.classList.contains('today')) {
                    todayFor.classList.remove('hidden');
                    tmrwFor.classList.add('hidden');
                }
            }       

            // Day Tidal data - LINE CHART creation
            // implementation heavily influenced by http://bl.ocks.org/1166403        
            // Create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
            var data = tidesValue;
            // console.log(data);

            // Defining dimensions of graph
            function screenSize() {
                return xsmall.matches ? 200 :
                        small.matches ? 250 :
                        medium.matches ? 300 :
                        large.matches ? 500 :
                        xlarge.matches ? 600 :
                        xxlarge.matches ? 800 :
                        null;
            }

            var xsmall = window.matchMedia('(max-width: 350px)');   // 350-     200 
            var small = window.matchMedia('(max-width: 500px)');    // 350-500  250 OK
            var medium = window.matchMedia('(max-width: 650px)');   // 500-650  300 OK
            var large = window.matchMedia('(max-width: 800px)');    // 650-800  500 OK
            var xlarge = window.matchMedia('(max-width: 1200px)');  // 800-1200 600 OK
            var xxlarge = window.matchMedia('(min-width: 1201px)'); // 1200+    800    OK

            var m = [50, 25, 50, 25]; // margins
            var w = screenSize() - m[1] - m[3]; // width height: 250px; width: 75vw;
            var h = 250 - m[0] - m[2]; // height

            // X scale will fit all values from data[] within pixels 0-w
            var x = d3.scaleLinear().domain([0, tidesValue.length]).range([0, w]);
            // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
            var y = d3.scaleLinear().domain([d3.min(tidesValue), d3.max(tidesValue)]).range([h, 0]);
            // automatically determining max range can work something like this
            // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

            // create a line function that can convert data[] into x and y points
            var line = d3.line()
            // assign the X function to plot our line as we wish
                .x(function(d,i) { 
                // verbose logging to show what's actually being done
                // console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
                // return the X coordinate where we want to plot this datapoint
                return x(i); 
                })
                .y(function(d) { 
                // verbose logging to show what's actually being done
                // console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
                // return the Y coordinate where we want to plot this datapoint
                return y(d); 
                })
                .curve(d3.curveBasis)

            // Add an SVG element with the desired dimensions and margin.
            var graph = d3.select("#tides").append("svg:svg")
                .attr("width", w + m[1] + m[3])
                .attr("height", h + m[0] + m[2])
                .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

            // create yAxis
            var ticks = [0, 4, 8, 12, 16, 20, 24]
            var tickLabels = [0, 4, 8, 12, 16, 20, 0];
            var xAxis = d3.axisBottom().scale(x).tickValues(ticks).tickFormat(function(d, i){return tickLabels[i] }).tickSize(-h);
            // Add the x-axis.
            graph.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + h + ")")
                .call(xAxis);
            
            // Add the line by appending an svg:path element with the data line we created above
            // do this AFTER the axes above so that the line is above the tick-lines
            graph.append("svg:path").attr("d", line(data));

            graph.append("line")
            //   .attr("x1",-6)
                .attr("y1",y(0))//so that the line passes through the y 0
                .attr("x2",w)
                .attr("y2",y(0))//so that the line passes through the y 0
                .style("stroke", "#3E4EA4")
                .style("opacity", ".5");

            graph.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("y", -6)
                .attr("x", -(h / 2))
                .attr("transform", "rotate(-90)")
                .text("LOW - HIGH");

            graph.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("y", h + 25)
                .attr("x", (w / 2))
                // .attr("transform", "rotate(-90)")
                .text("TIME OF DAY (24H)");
            
            // Extended next 3 days forecast - LINE CHART creation
            // implementation heavily influenced by http://bl.ocks.org/1166403        
            // Create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
            var data = tidesValueEx;
            // console.log(data);

            var m = [50, 25, 50, 25]; // margins
            var w = screenSize() - m[1] - m[3]; // width height: 250px; width: 75vw;
            var h = 250 - m[0] - m[2]; // height

            // X scale will fit all values from data[] within pixels 0-w
            var x = d3.scaleLinear().domain([0, tidesValueEx.length]).range([0, w]);
            // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
            var y = d3.scaleLinear().domain([d3.min(tidesValueEx), d3.max(tidesValueEx)]).range([h, 0]);
            // automatically determining max range can work something like this
            // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

            // create a line function that can convert data[] into x and y points
            var line = d3.line()
            // assign the X function to plot our line as we wish
                .x(function(d,i) { 
                // verbose logging to show what's actually being done
                // console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
                // return the X coordinate where we want to plot this datapoint
                return x(i); 
                })
                .y(function(d) { 
                // verbose logging to show what's actually being done
                // console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
                // return the Y coordinate where we want to plot this datapoint
                return y(d); 
                })
                .curve(d3.curveBasis)

            // Add an SVG element with the desired dimensions and margin.
            var graph = d3.select("#tides-extended").append("svg:svg")
                .attr("width", w + m[1] + m[3])
                .attr("height", h + m[0] + m[2])
                .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

            // create yAxis
            var ticks = [0, 12, 24, 36, 48, 60, 72]
            var tickLabels = [(dayWeekShort[(date.addDays(1)).getDay()]), 12, (dayWeekShort[(date.addDays(2)).getDay()]), 12, (dayWeekShort[(date.addDays(3)).getDay()]), 12];
            var xAxis = d3.axisBottom().scale(x).tickValues(ticks).tickFormat(function(d, i){return tickLabels[i] }).tickSize(-h);
            // Add the x-axis.
            graph.append("svg:g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + h + ")")
                .call(xAxis);
            
            // Add the line by appending an svg:path element with the data line we created above
            // do this AFTER the axes above so that the line is above the tick-lines
            graph.append("svg:path").attr("d", line(data));

            graph.append("line")
            //   .attr("x1",-6)
                .attr("y1",y(0))//so that the line passes through the y 0
                .attr("x2",w)
                .attr("y2",y(0))//so that the line passes through the y 0
                .style("stroke", "#3E4EA4")
                .style("opacity", ".5");

            graph.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("y", -6)
                .attr("x", -(h / 2))
                .attr("transform", "rotate(-90)")
                .text("LOW - HIGH");

            graph.append("text")
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .attr("y", h + 25)
                .attr("x", (w / 2))
                // .attr("transform", "rotate(-90)")
                .text("TIME OF DAY (12H)");


            };

            forecastData();

            // Back button
            function backToHome(e) {
                if (e.target.id = 'go2back') {
                    forecast.classList.add('hidden');
                    surfingSpots.classList.remove('hidden');
                    go2Back.classList.add('hidden');
                    goBack.classList.remove('hidden');
                    
                    map.setCenter(mapCenter(e.target.classList[1], mapLocation));
                    map.setZoom(mapZoom(e.target.classList[1], mapLocation));
                }
            };

            var go2BackTo = go2Back.addEventListener('click', backToHome);
        };    
    };
};

function menuReveal(e) {
    (e.target.id = 'menu') ? menuList.classList.toggle('hidden') : null;
}

function menuHide(e) {
    (e.target.id = 'close') ? menuList.classList.toggle('hidden') : null;
    about.classList.contains('hidden') ? null : about.classList.add('hidden');
}

function aboutReveal(e){
    (e.target.innerHTML = 'ABOUT') ? about.classList.remove('hidden') : null;
}

function menuLink(e) {
    var selection = e.target.parentElement.classList[0];
    // console.log(selection);
    if (surfingSpots.classList.contains('hidden') && forecast.classList.contains('hidden')) {
        menuList.classList.add('hidden');
        menuNav.innerHTML = 'MENU'
        directions.classList.add('hidden');
        surfingSpots.classList.remove('hidden');
        goBack.classList.remove('hidden');
        
        function backToHome(e) {
            if (e.target.id = 'goback') {
                directions.classList.remove('hidden');
                surfingSpots.classList.add('hidden');
                goBack.classList.add('hidden');
                map.setCenter({ lat: 53.326116, lng: -7.946834 });
                map.setZoom(6);
            }
        };

        var goBackTo = goBack.addEventListener('click', backToHome);

        listSpots(selection, mapLocation);
        map.setCenter(mapCenter(selection, mapLocation));
        map.setZoom(mapZoom(selection, mapLocation));
    } else if (surfingSpots.classList.contains('hidden') && directions.classList.contains('hidden')) {
        menuList.classList.add('hidden');
        menuNav.innerHTML = 'MENU'
        forecast.classList.add('hidden');
        surfingSpots.classList.remove('hidden');
        goBack.classList.remove('hidden');
        go2Back.classList.add('hidden');
        
        function backToHome(e) {
            if (e.target.id = 'goback') {
                directions.classList.remove('hidden');
                surfingSpots.classList.add('hidden');
                goBack.classList.add('hidden');
                map.setCenter({ lat: 53.326116, lng: -7.946834 });
                map.setZoom(6);
            }
        };

        var goBackTo = goBack.addEventListener('click', backToHome);

        listSpots(selection, mapLocation);
        map.setCenter(mapCenter(selection, mapLocation));
        map.setZoom(mapZoom(selection, mapLocation));
    } else if (forecast.classList.contains('hidden') && directions.classList.contains('hidden')) {
        menuList.classList.add('hidden');
        menuNav.innerHTML = 'MENU'

        listSpots(selection, mapLocation);
        map.setCenter(mapCenter(selection, mapLocation));
        map.setZoom(mapZoom(selection, mapLocation));
    }
};