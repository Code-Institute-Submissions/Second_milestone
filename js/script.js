window.addEventListener('load', function(event) {
    console.log('All resources finished loading!');

  });

// Surfing locations definition

var surfSpots = [
    {title: 'Portrush', county: 'Antrim', location: {lat: 55.170241, lng: -6.731873}, point: 0, map: 'north', station: '%22Malin%20Head%20-%20Portmore%20Pier%22'},
    {title: 'Magheroarty', county: 'Donegal', location: {lat: 55.162985, lng: -8.143272}, point: 0, map: 'north', station: '%22Aranmore%20Island%20-%20Leabgarrow%22'},
    {title: 'Falcarragh', county: 'Donegal', location: {lat: 55.16073, lng: -8.085937}, point: 0, map: 'north', station: '%22Aranmore%20Island%20-%20Leabgarrow%22'},
    {title: 'Rossnowlagh', county: 'Donegal', location: {lat: 54.555689, lng: -8.210135}, point: 270, map: 'west', station: '%22Killybegs%20Port%22'},
    {title: 'Bundoran', county: 'Donegal', location: {lat: 54.492515, lng: -8.268799}, point: 315, map: 'west', station: '%22Killybegs%20Port%22'},
    {title: 'Easky', county: 'Sligo', location: {lat: 54.291575, lng: -8.955840}, point: 0, map: 'west', station: '%22Sligo%22'},
    {title: 'Inishcrone', county: 'Sligo', location: {lat: 54.211954, lng: -9.102001}, point: 0, map: 'west', station: '%22Sligo%22'},
    {title: 'Keel', county: 'Mayo', location: {lat: 53.973033, lng: -10.07223}, point: 225, map: 'west', station: '%22Ballyglass%20Harbour%22'},
    {title: 'Dun Loughan', county: 'Galway', location: {lat: 53.419440, lng: -10.148626}, point: 225, map: 'west', station: '%22OPW%20Rossaveel%20Pier%22'},
    {title: 'Lahinch', county: 'Clare', location: {lat: 52.933675, lng: -9.350100}, point: 225, map: 'west', station: '%22OPW%20Rossaveel%20Pier%22'},
    {title: 'Doonbeg', county: 'Clare', location: {lat: 52.76445, lng: -9.493389}, point: 270, map: 'west', station: '%22OPW%20Rossaveel%20Pier%22'},
    {title: 'Castlegregory', county: 'Kerry', location: {lat: 52.276666, lng: -10.037212}, point: 315, map: 'west', station: '%22Dingle%20Harbour%22'},
    {title: 'Inch Strand', county: 'Kerry', location: {lat: 52.137499, lng: -9.979695}, point: 225, map: 'west', station: '%22Dingle%20Harbour%22'},
    {title: 'Barley Cove', county: 'Cork', location: {lat: 51.468823, lng: -9.775531}, point: 180, map: 'south', station: '%22Castletownbere%20Port%22'},
    {title: 'Inchydoney', county: 'Cork', location: {lat: 51.595535, lng: -8.861236}, point: 135, map: 'south', station: '%22OPW%20Ringaskiddy%22'},
    {title: 'Castlefreake', county: 'Cork', location: {lat: 51.557116, lng: -8.966045}, point: 225, map: 'south', station: '%22OPW%20Ringaskiddy%22'},
    {title: 'Garretstown', county: 'Cork', location: {lat: 51.640028, lng: -8.564953}, point: 225, map: 'south', station: '%22OPW%20Ringaskiddy%22'},
    {title: 'Tramore', county: 'Waterford', location: {lat: 52.156210, lng: -7.127300}, point: 180, map: 'south', station: '%22Dunmore%20East%20Harbour%22'},
    {title: 'Magheramore', county: 'Wicklow', location: {lat: 52.930841, lng: -6.023053}, point: 135, map: 'east', station: '%22OPW%20Arklow%20Harbour%22'},
    {title: 'Whiterock', county: 'Dublin', location: {lat: 53.265934, lng: -6.106232}, point: 135, map: 'east', station: '%22Dublin%20Port%22'}
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

var goBack = document.getElementById('goback');
var go2Back = document.getElementById('go2back');

var btnN = document.getElementById('btn-n').addEventListener('click', stepOne);
var btnE = document.getElementById('btn-e').addEventListener('click', stepOne);
var btnW = document.getElementById('btn-w').addEventListener('click', stepOne);
var btnS = document.getElementById('btn-s').addEventListener('click', stepOne);

var mapLocation = {
    'surfingSpotsNorth': {
        'listOfSpots': [surfSpots[0].title, surfSpots[1].title, surfSpots[2].title],
        'setCenter': { lat : 55.307211, lng : -7.373801 },
        'setZoom': 8
    },
    'surfingSpotsWest': {
        'listOfSpots': [surfSpots[3].title, surfSpots[4].title, surfSpots[5].title, surfSpots[6].title, surfSpots[7].title, surfSpots[8].title, surfSpots[9].title, surfSpots[10].title, surfSpots[11].title, surfSpots[12].title],
        'setCenter': { lat : 53.365468, lng : -9.814509 },
        'setZoom': 6.8
    },
    'surfingSpotsSouth': {
        'listOfSpots': [surfSpots[13].title, surfSpots[14].title, surfSpots[15].title, surfSpots[16].title, surfSpots[17].title],
        'setCenter': { lat : 51.789279, lng : -8.285663 },
        'setZoom': 7
    },
    'surfingSpotsEast': {
        'listOfSpots': [surfSpots[18].title, surfSpots[19].title],
        'setCenter': { lat : 53.148223, lng : -6.077892 },
        'setZoom': 9
    },
};

function surfTitle(spot) {
    var result = '';
    for (var i = 0; i < spot.length; i++) {
        result += '<div class="col-xs-12 padding">' + '<button class="btn btn-default spot" type="submit">'+spot[i]+'</button>' + '</div>';
    }
    return result;
};

function listSpots(direction) {
    surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(direction) + '</div>' + '</div>';
}

// nav bar class = north etc.. array to include direction: north etc..
// e.target.id === 'btn-n' 1st button
// e.target.classList.contains('north')) 2nd button
function searchLocation(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].location;
        }
    }
};

map.setCenter(searchLocation(e.target.childNodes[0].data, surfSpots));

// List of Surf Spots based on Direction

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

        if (e.target.id === 'btn-n') {
            listSpots(mapLocation.surfingSpotsNorth.listOfSpots);
            map.setCenter(mapLocation.surfingSpotsNorth.setCenter);
            map.setZoom(mapLocation.surfingSpotsNorth.setZoom);
            go2Back.classList.add('north');
            go2Back.classList.remove('west', 'east', 'south');
        } else if (e.target.id === 'btn-w') {
            listSpots(mapLocation.surfingSpotsWest.listOfSpots);
            map.setCenter(mapLocation.surfingSpotsWest.setCenter);
            map.setZoom(mapLocation.surfingSpotsWest.setZoom);
            go2Back.classList.add('west');
            go2Back.classList.remove('north', 'east', 'south');
        } else if (e.target.id === 'btn-s') {
            listSpots(mapLocation.surfingSpotsSouth.listOfSpots);
            map.setCenter(mapLocation.surfingSpotsSouth.setCenter);
            map.setZoom(mapLocation.surfingSpotsSouth.setZoom);
            go2Back.classList.add('south');
            go2Back.classList.remove('west', 'east', 'north');
        } else if (e.target.id === 'btn-e') {
            listSpots(mapLocation.surfingSpotsEast.listOfSpots);
            map.setCenter(mapLocation.surfingSpotsEast.setCenter);
            map.setZoom(mapLocation.surfingSpotsEast.setZoom);
            go2Back.classList.add('east');
            go2Back.classList.remove('west', 'north', 'south');
        };
    }
};

// Surf Forecast per Surf Spot

// Function to match the surf spot name with selection in order to get the lat and lng values

function searchLocation(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].location;
        }
    }
};

// Function to match surf spots direction with forecast wind direction in order to determine the type of the wind

function searchPoint(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].point;
        }
    }
};

function searchStation(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].title === nameKey) {
            return myArray[i].station;
        }
    }
};

var spotForecast = document.getElementById('surfingSpots').addEventListener('click', function(e) {
    console.log(e.target.childNodes[0].data);
    if (e.target && e.target.matches('button.spot')) {
        // console.log('Button element clicked');
        if (forecast.classList.contains('hidden')) {
            surfingSpots.classList.add('hidden');
            forecast.classList.remove('hidden');
            goBack.classList.add('hidden');
            go2Back.classList.remove('hidden');  

            map.setCenter(searchLocation(e.target.childNodes[0].data, surfSpots));
            map.setZoom(12);

            function backToHome(e) {
                if (e.target.id = 'go2back') {
                    forecast.classList.add('hidden');
                    surfingSpots.classList.remove('hidden');
                    go2Back.classList.add('hidden');
                    goBack.classList.remove('hidden');
                    
                    if (e.target.classList.contains('north')) {
                        map.setCenter(mapLocation.surfingSpotsNorth.setCenter);
                        map.setZoom(mapLocation.surfingSpotsNorth.setZoom);
                    } else if (e.target.classList.contains('west')) {
                        map.setCenter(mapLocation.surfingSpotsWest.setCenter);
                        map.setZoom(mapLocation.surfingSpotsWest.setZoom);
                    } else if (e.target.classList.contains('south')) {
                        map.setCenter(mapLocation.surfingSpotsSouth.setCenter);
                        map.setZoom(mapLocation.surfingSpotsSouth.setZoom);
                    } else if (e.target.classList.contains('east')) {
                        map.setCenter(mapLocation.surfingSpotsEast.setCenter);
                        map.setZoom(mapLocation.surfingSpotsEast.setZoom);
                    }
                }
            };

            var go2BackTo = go2Back.addEventListener('click', backToHome);

            // console.log(searchLocation(e.target.childNodes[0].data, surfSpots));
            // console.log(searchPoint(e.target.childNodes[0].data, surfSpots));

            // API

            // To be used with OpenWeatherMap API and Stormglass API

            var lat = searchLocation(e.target.childNodes[0].data, surfSpots).lat;
            var lng = searchLocation(e.target.childNodes[0].data, surfSpots).lng;

            // ****************************************************************** OpenWeatherMap API CURRENT FORECAST

            var apiOpenWeather = '74ecf887ea2ee80ab6586f67dfe5ee24';

            var xhr = new XMLHttpRequest();

            xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&APPID=${apiOpenWeather}`, true);

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var openWeatherApi = JSON.parse(this.responseText);

            // Storing data locally

                    var openWeatherApiData;

                    sessionStorage.setItem('openWeatherApi', JSON.stringify(openWeatherApi));

                } else if (this.readyState == 4 && this.status == 402) {
                    document.getElementById('forecast').innerHTML = 'Data request exceeded! Please come back tomorrow';
                }  
            };

            xhr.onerror = function() {
                console.log('Request error');
            };

            xhr.send();

            // Session Storage and API JSON Data Manipulation

                openWeatherApiData = JSON.parse(sessionStorage.getItem('openWeatherApi'));

                // console.log(openWeatherApiData);

                // Unix time to local time conversion

                function unixToLocal(t) {
                    var dt = new Date(t*1000);
                    var hr = dt.getHours();
                    var m = '0' + dt.getMinutes();
                    return hr+ ':' +m.substr(-2); 
                }

                // console.log(new Date());

                // console.log(unixToLocal(openWeatherApiData.dt)); // current weather forecast NOW

                var sunrise = openWeatherApiData.sys.sunrise;
                var sunset = openWeatherApiData.sys.sunset;

            // ****************************************************************** OpenWeatherMap API EXTENDED FORECAST

            var xhr = new XMLHttpRequest();

            xhr.open('GET', `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&APPID=${apiOpenWeather}`, true);

            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var openWeatherExApi = JSON.parse(this.responseText);
                    // console.log(openWeatherEx);

            // Storing data locally

                    var openWeatherExApiData;

                    sessionStorage.setItem('openWeatherExApi', JSON.stringify(openWeatherExApi));

                } else if (this.readyState == 4 && this.status == 402) {
                    document.getElementById('forecast').innerHTML = 'Data request exceeded! Please come back tomorrow';
                }  
            };

            xhr.onerror = function() {
                console.log('Request error');
            };

            xhr.send();

            // Session Storage and API JSON Data Manipulation

                openWeatherExApiData = JSON.parse(sessionStorage.getItem('openWeatherExApi'));

                // console.log(openWeatherExApiData);
                
                // console.log(openWeatherExApiData.list);
                // console.log(unixToLocal(openWeatherExApiData.list[0].dt) + ' on ' + openWeatherExApiData.list[0].dt_txt); 
                
                // console.log(openWeatherExApiData.list[5].dt_txt + ':' + openWeatherExApiData.list[5].weather[0].description + ' ' +
                // openWeatherExApiData.list[13].dt_txt + ':' + openWeatherExApiData.list[13].weather[0].description + ' ' +
                // openWeatherExApiData.list[21].dt_txt + ':' + openWeatherExApiData.list[21].weather[0].description);
                
                function weatherDesc(time) {
                    return openWeatherExApiData.list[time].weather[0].description;
                };

            // ****************************************************************** Stormglass API

            const params = 'airTemperature,waterTemperature,waveHeight,wavePeriod,windDirection,windSpeed';

            var xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.stormglass.io/point?lat=${lat}&lng=${lng}&params=${params}`, true);

            xhr.setRequestHeader('Authorization', 'b891271c-e610-11e8-83ef-0242ac130004-b891282a-e610-11e8-83ef-0242ac130004');

            xhr.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                    var stormglassAPI = JSON.parse(this.responseText);
                    // console.log('Stormglass API JSON data:');

            // Storing data locally

                    var stormglassAPIData;

                    sessionStorage.setItem('stormglassAPI', JSON.stringify(stormglassAPI));

                } else if (this.readyState == 4 && this.status == 402) {
                    // document.getElementById('forecast').innerHTML = 'Data request exceeded! Please come back tomorrow';
                    forecast.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12">' + '<h1>We went sur... ehm Data request exceeded! Please come back tomorrow</h1>' + '</div>' + '<div class="col-xs-12">';
                }
            };

            xhr.onerror = function() {
                console.log('Request error: ');
            };

            xhr.send();

                stormglassAPIData = JSON.parse(sessionStorage.getItem('stormglassAPI'));

                var weather = stormglassAPIData;
                
                // DATA MANIPULATION
                    // DAY FORECAST
                
                // console.log(weather); // unspliced
                var weatherSpliced = (weather.hours).splice(24); 
                // console.log(weather); // day data
                
                var afternoon = (weather.hours).splice(-9, 6);
                var midday = (weather.hours).splice(-7, 4);
                var morning = (weather.hours).splice(-9, 6);
                

                // console.log(morning[0].time); // 2018-12-18T05:00:00+00:00
                
                    // THREE DAYS FORECAST
                
                var weatherSplicedThree = weatherSpliced.splice(72);
                
                var dayThree = weatherSpliced.splice(-24, 24);
                var dayTwo =  weatherSpliced.splice(-24, 24);
                var dayOne = weatherSpliced;
                
                // console.log(dayOne);
                // console.log(dayTwo);
                // console.log(dayThree);
                
                // Function that pass time arrays and spits out the average values for all of the weather parameters in form of a object:
                
                function timeOfDay(time) {
                    var totalWaveHeight = 0;
                    var totalWavePeriod = 0;
                    var totalWindDirection = 0;
                    var totalWindSpeed = 0;
                    var totalAirTemperature = 0;
                    var totalWaterTemperature = 0;
                
                    time.forEach(function(hour) {
                        totalWaveHeight += hour.waveHeight[0].value;
                        totalWavePeriod += hour.wavePeriod[0].value;
                        totalWindDirection += hour.windDirection[0].value;
                        totalWindSpeed += hour.windSpeed[0].value;
                        totalAirTemperature += hour.airTemperature[0].value;
                        totalWaterTemperature += hour.waterTemperature[0].value;
                        });
                
                    var average = new Object();
                    average['waveHeight'] = Math.round(totalWaveHeight / time.length);
                    average['wavePeriod'] = Math.round(totalWavePeriod / time.length);
                    average['windDirection'] = Math.round(totalWindDirection / time.length);
                    average['windSpeed'] = Math.round(totalWindSpeed / time.length);
                    average['airTemperature'] = Math.round(totalAirTemperature / time.length);
                    average['waterTemperature'] = Math.round(totalWaterTemperature / time.length);
                    return average;
                }
                
                var morningAverage = timeOfDay(morning);
                var middayAverage = timeOfDay(midday);
                var afternoonAverage = timeOfDay(afternoon);
                
                var dayOneAverage = timeOfDay(dayOne);
                var dayTwoAverage = timeOfDay(dayTwo);
                var dayThreeAverage = timeOfDay(dayThree);
                
                // console.log(morningAverage.windDirection);
                
                // DATA
                    // Data break down into types and values:
                
                    var timeNow = new Date();
            
                    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
            
                    var monthAsString = monthNames[timeNow.getMonth()];
                
                    // console.log('Todays date: ' + timeNow.getFullYear() + '.' + monthAsString + '.' + timeNow.getDate());
                
                    // Display time for tidal & temperature information
                
                    var timeHour = ('0' + timeNow.getHours()).slice(-2);
                    var timeMinutes = timeNow.getMinutes();
                
                    // Function that return degrees that fall withing range of word directions:
                
                    function direction(value) {
                        if (value >= 0 && value < 22.5 || value >=337.5) {
                            return 0;
                        } else if (value >= 22.5 && value < 67.5) {
                            return 45;
                        } else if (value >= 67.5 && value < 112.5) {
                            return 90;
                        } else if (value >= 112.5 && value < 157.5) {
                            return 135;
                        } else if (value >= 157.5 && value < 202.5) {
                            return 180;
                        } else if (value >= 202.5 && value < 247.5) {
                                return 225;
                        } else if (value >= 247.5 && value <292.5) {
                                return 270;
                        } else if (value >= 292.5 && value <337.5) {
                                return 315;
                        }
                    };
            
                // Wind types that usues the wind direction and surf spots pointing direction to determin tyoe of wind for location
                
                    function windType(data) {
                
                        var wind = direction(data);
                        var point = surfSpots.point;
                
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


        // ****************************************************************** Marine Institute of Ireland data

        var timeToday = new Date();
        // Adding second digit for day and month < 10
        
        function addZero(n) {
            return n < 10 ? '0' + n : '' + n;
        };
        
        var timeTodayFormat = timeToday.getFullYear() + '-' + addZero(timeToday.getMonth()) + '-' + addZero(timeToday.getDate());

        var timeTomorrow = timeToday.setDate(timeToday.getDate() +1);

        // Unix time to local time conversion

        function timeConverter(t) {
            var tmr = new Date(t);
            var year = tmr.getFullYear();
            var month = addZero(tmr.getMonth());
            var day = addZero(tmr.getDate());
            var time = year + '-' + month + '-' + day;
            return time; 
        }

        function timeConvDayMonth(t) {
            var tmr = new Date(t);
            var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var month = monthNames[tmr.getMonth()];
            var day = tmr.getDate();
            var time = day + ' ' + month;
            return time; 
        }

        var timeFrom = timeTodayFormat + 'T00%3A00%3A00Z';
        var timeTo = timeConverter(timeTomorrow) + 'T00%3A00%3A00Z';
        var stationId = searchStation(e.target.childNodes[0].data, surfSpots);

        var xhr = new XMLHttpRequest();

        xhr.open('GET', `https://erddap.marine.ie/erddap/tabledap/IMI-TidePrediction.json?time%2CstationID%2CWater_Level_ODM&time%3E=${timeFrom}&time%3C=${timeTo}&stationID%3E=${stationId}`, true);

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                // console.log(data);
                // console.log(data.table.rows[0][2] + ' + ' + data.table.rows[10][2]);

                // D3.js DATA

                var tidePrediction = data.table.rows[0][2];
                // console.log(tidePrediction);

                var tidesTime = [];
                var tidesValue = [];
                var tidesTimeValue = {};

                var delta = 10;
                // console.log(data.table.rows.length);
                // console.log(delta);

                // for (i = 0; i < data.table.rows.length; i = i + delta) {
                //     tidesTime.push(data.table.rows[i][0]);
                // }

                for (i = 0; i < 240; i = i + delta) {
                    tidesTime.push(data.table.rows[i][0]);
                }

                // for (i = 0; i < data.table.rows.length; i = i + delta) {
                //     tidesValue.push(data.table.rows[i][2]);
                // }

                for (i = 0; i < 240; i = i + delta) {
                    tidesValue.push(data.table.rows[i][2]);
                }

                tidesTime.forEach(function (time, i) {
                    return tidesTimeValue[time] = tidesValue[i];
                });

                // console.log(tidesTime[10]);

                // UTC time to Hour and Minutes

                var time = new Date(tidesTime[10]);
                var timeHM = time.getUTCHours() + ':' + time.getUTCMinutes();

                // console.log(timeHM);
            
                // console.log(typeof(tidesValue));
                // console.log(Math.max(tidesValue));

                // the tidesValue index reflect the time as well since the first element (i.e index 0) equal the midnight 00:00

                // console.log(tidesTimeValue);

                var dataApi = [];

                for (i = 0; i < 240; i = i + delta) {
                    dataApi.push (
                        {
                            // date: data.table.rows[i][0],
                            date: (new Date(data.table.rows[i][0])).getUTCHours(),
                            value: data.table.rows[i][2]
                        });
                };

                // console.log(dataApi);

        // LINE CHART

                /* implementation heavily influenced by http://bl.ocks.org/1166403 */
                
                // define dimensions of graph
                var m = [10, 10, 10, 10]; // margins
                var w = 350 - m[1] - m[3]; // width
                var h = 150 - m[0] - m[2]; // height
                
                // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
                // var data = [-3, -6, -2, 0, 5, 2, 0, -3, -8, -9, -2, 5, 9, 13];
                var data = tidesValue;

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
                    var xAxis = d3.axisBottom().scale(x).ticks(4).tickSize(-h);
                    // Add the x-axis.
                    graph.append("svg:g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + h + ")")
                        .call(xAxis);


                    // // create left yAxis
                    // var yAxisLeft = d3.axisLeft().scale(y);
                    // // Add the y-axis to the left
                    // graph.append("svg:g")
                    //       .attr("class", "y axis")
                    //       .attr("transform", "translate(-10,0)")
                    //       .call(yAxisLeft);
                    
                    // Add the line by appending an svg:path element with the data line we created above
                    // do this AFTER the axes above so that the line is above the tick-lines
                    graph.append("svg:path").attr("d", line(data));

                    graph.append("line")
                    //   .attr("x1",-6)
                        .attr("y1",y(0))//so that the line passes through the y 0
                        .attr("x2",w)
                        .attr("y2",y(0))//so that the line passes through the y 0
                        .style("stroke", "black")
                        .style("opacity", ".5");

            } else if (this.readyState == 4 && this.status == 402) {
                document.getElementById('tides').innerHTML = 'Data request exceeded! Please come back tomorrow';
            }  
        };

        xhr.onerror = function() {
            console.log('Request error');
        };

        xhr.send(); 

                console.log('Button clicked: ' + e.target.childNodes[0].data + ' ' + lat + ' ' + lng);
                console.log('OpenWeather API forecast spot, location and date: ' + openWeatherApiData.name + ' ' + openWeatherApiData.coord.lat + ' ' + openWeatherApiData.coord.lon + ' ' + unixToLocal(openWeatherApiData.dt));
                console.log('OpenWeatherAPI 3days forecast times:' +openWeatherExApiData.list[5].dt_txt + ' ' + openWeatherExApiData.list[13].dt_txt + ' ' + openWeatherExApiData.list[21].dt_txt);
                console.log('StormGlassAPI spot: ' + weather.meta.lat + ' ' + weather.meta.lng);
                console.log('Tides Chart from: ' + timeFrom);
                console.log('Tides Chart to: ' + timeTo);
                console.log('Tides Station ID: ' + searchStation(e.target.childNodes[0].data, surfSpots));

                forecast.innerHTML = 
                '<div class="row text-center">' +
                    '<div class="col-xs-12">' + '<h1>' + e.target.childNodes[0].data + '</h1>' + '</div>' +
                    
                    '<div class="col-xs-12">' +
                        '<div class="col-xs-12">' + '<h2>' + 'MORNING' + '</h2>' + '</div>' +
                        '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + morningAverage.waveHeight + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WAVE' + '</h3>' + '<h3>' + 'm | s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + morningAverage.wavePeriod + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + windType(morningAverage.windDirection) + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WIND' + '</h3>' + '<h3>' + 'shore | m/s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + morningAverage.windSpeed + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' +
                            '<div class="col-xs-4">' + '<h2>' + morningAverage.airTemperature + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + '&#8451' + '</h3>' + '<h3>' + 'air | water' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + morningAverage.waterTemperature + '</h2>' + '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="col-xs-12">' +
                        '<div class="col-xs-12">' + '<h2>' + 'MIDDAY' + '</h2>' + '</div>' +
                        '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + middayAverage.waveHeight + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WAVE' + '</h3>' + '<h3>' + 'm | s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + middayAverage.wavePeriod + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + windType(middayAverage.windDirection) + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WIND' + '</h3>' + '<h3>' + 'shore | m/s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + middayAverage.windSpeed + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' +
                            '<div class="col-xs-4">' + '<h2>' + middayAverage.airTemperature + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + '&#8451' + '</h3>' + '<h3>' + 'air | water' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + middayAverage.waterTemperature + '</h2>' + '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="col-xs-12">' +
                        '<div class="col-xs-12">' + '<h2>' + 'AFTERNOON' + '</h2>' + '</div>' +
                        '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + afternoonAverage.waveHeight + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WAVE' + '</h3>' + '<h3>' + 'm | s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + afternoonAverage.wavePeriod + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' + 
                            '<div class="col-xs-4">' + '<h2>' + windType(afternoonAverage.windDirection) + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + 'WIND' + '</h3>' + '<h3>' + 'shore | m/s' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + afternoonAverage.windSpeed + '</h2>' + '</div>' +
                        '</div>' + '<div class="col-xs-12">' +
                            '<div class="col-xs-4">' + '<h2>' + afternoonAverage.airTemperature + '</h2>' + '</div>' +
                            '<div class="col-xs-4">' + '<h3>' + '&#8451' + '</h3>' + '<h3>' + 'air | water' + '</h3>' + '</div>' +
                            '<div class="col-xs-4">' + '<h2>' + afternoonAverage.waterTemperature + '</h2>' + '</div>' +
                        '</div>' +
                    '</div>' +

                    '<div class="col-xs-12" id="tides">' +
                    '</div>' +

                    '</div>' +
                '</div>';

                // OUTPUT 1 - As per API requested time
                /*
                outputDay += '<div>' +
                    '<h1>Day Forecast</h1>' +
                    '<h2>Surf Spot: '+surfSpots.title+' on '+timeNow.getDate()+' '+monthAsString+'</h2>' +
                    '<br>' +
                    '<h3>Sunrise: '+unixToLocal(sunrise)+'</h3>'+
                    '<h3>Sunset: '+unixToLocal(sunset)+'</h3>' +
                    '<br>' +
                    '<h3>Weather: '+unixToLocal(openWeatherApiData.dt)+' '+openWeatherApiData.weather[0].description+'</h3>' +
                    '<br>' +
                    '<h2>Morning</h2>' +
                    '<p>Wave Height: '+morningAverage.waveHeight+' m | Wave Period: '+morningAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(morningAverage.windDirection)+' | Wind Speed: '+morningAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+morningAverage.airTemperature+' &#8451 | Water Temperature: '+morningAverage.waterTemperature+' &#8451</p>' +
                    '<h2>Midday</h2>' +
                    '<p>Wave Height: '+middayAverage.waveHeight+' m | Wave Period: '+middayAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(middayAverage.windDirection)+' | Wind Speed: '+middayAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+middayAverage.airTemperature+' &#8451 | Water Temperature: '+middayAverage.waterTemperature+' &#8451</p>' +
                    '<h2>Afternoon</h2>' +
                    '<p>Wave Height: '+afternoonAverage.waveHeight+' m | Wave Period: '+afternoonAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(afternoonAverage.windDirection)+' | Wind Speed: '+afternoonAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+afternoonAverage.airTemperature+' &#8451 | Water Temperature: '+afternoonAverage.waterTemperature+' &#8451</p>'
                
                
                outputThreeDays += '<div>' +
                    '<h1>3 Days Forecast</h1>' +
                    '<h2>Surf Spot: '+surfSpots.title+' from '+timeConvDayMonth(timeTomorrow)+'</h2>' +
                    '<br>' +
                    // '<h3>Sunrise: '+unixToLocal(sunrise)+'</h3>'+
                    // '<h3>Sunset: '+unixToLocal(sunset)+'</h3>' +
                    // '<br>' +
                    '<h2>Tomorrow</h2>' +
                    '<p>Wave Height: '+dayOneAverage.waveHeight+' m | Wave Period: '+dayOneAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(dayOneAverage.windDirection)+' | Wind Speed: '+dayOneAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+dayOneAverage.airTemperature+' &#8451 | Water Temperature: '+dayOneAverage.waterTemperature+' &#8451</p>' +
                    '<p>Weather: '+openWeatherExApiData.list[4].dt_txt+' '+weatherDesc(5)+'</p>' +
                    '<br>' + 
                    '<h2>Day after Tomorrow</h2>' +
                    '<p>Wave Height: '+dayTwoAverage.waveHeight+' m | Wave Period: '+dayTwoAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(dayTwoAverage.windDirection)+' | Wind Speed: '+dayTwoAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+dayTwoAverage.airTemperature+' &#8451 | Water Temperature: '+dayTwoAverage.waterTemperature+' &#8451</p>' +
                    '<p>Weather: '+openWeatherExApiData.list[12].dt_txt+' '+weatherDesc(13)+'</p>' +
                    '<br>' + 
                    '<h2>2 Days after Tomorrow</h2>' +
                    '<p>Wave Height: '+dayThreeAverage.waveHeight+' m | Wave Period: '+dayThreeAverage.wavePeriod+' s</p>' +
                    '<p>Wind Type: '+windType(dayThreeAverage.windDirection)+' | Wind Speed: '+dayThreeAverage.windSpeed+' m/s</p>' +
                    '<p>Air Temperature: '+dayThreeAverage.airTemperature+' &#8451 | Water Temperature: '+dayThreeAverage.waterTemperature+' &#8451</p>' +
                    '<p>Weather: '+openWeatherExApiData.list[20].dt_txt+' '+weatherDesc(21)+'</p>'
                
                    document.getElementById('data01').innerHTML = outputNow;
                    document.getElementById('data02').innerHTML = outputDay;
                    document.getElementById('data03').innerHTML = outputThreeDays;
                    */



            
        } 
        }
    }
);