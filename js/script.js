window.addEventListener('load', function(event) {
    console.log('All resources finished loading!');

  });

// Surfing locations definition

var surfSpots = [
    {title: 'Portrush', county: 'Antrim', location: {lat: 55.170241, lng: -6.731873}, point: 0, map: 'north'},
    {title: 'Magheroarty', county: 'Donegal', location: {lat: 55.162985, lng: -8.143272}, point: 0, map: 'north'},
    {title: 'Falcarragh', county: 'Donegal', location: {lat: 55.16073, lng: -8.085937}, point: 0, map: 'north'},
    {title: 'Rossnowlagh', county: 'Donegal', location: {lat: 54.555689, lng: -8.210135}, point: 270, map: 'west'},
    {title: 'Bundoran', county: 'Donegal', location: {lat: 54.492515, lng: -8.268799}, point: 315, map: 'west'},
    {title: 'Easky', county: 'Sligo', location: {lat: 54.291575, lng: -8.955840}, point: 0, map: 'west'},
    {title: 'Inishcrone', county: 'Sligo', location: {lat: 54.211954, lng: -9.102001}, point: 0, map: 'west'},
    {title: 'Keel', county: 'Mayo', location: {lat: 53.973033, lng: -10.07223}, point: 225, map: 'west'},
    {title: 'Dun Loughan', county: 'Galway', location: {lat: 53.419440, lng: -10.148626}, point: 225, map: 'west'},
    {title: 'Lahinch', county: 'Clare', location: {lat: 52.933675, lng: -9.350100}, point: 225, map: 'west'},
    {title: 'Doonbeg', county: 'Clare', location: {lat: 52.76445, lng: -9.493389}, point: 270, map: 'west'},
    {title: 'Castlegregory', county: 'Kerry', location: {lat: 52.276666, lng: -10.037212}, point: 315, map: 'west'},
    {title: 'Inch Strand', county: 'Kerry', location: {lat: 52.137499, lng: -9.979695}, point: 225, map: 'west'},
    {title: 'Barley Cove', county: 'Cork', location: {lat: 51.468823, lng: -9.775531}, point: 180, map: 'south'},
    {title: 'Inchydoney', county: 'Cork', location: {lat: 51.595535, lng: -8.861236}, point: 135, map: 'south'},
    {title: 'Castlefreake', county: 'Cork', location: {lat: 51.557116, lng: -8.966045}, point: 225, map: 'south'},
    {title: 'Garretstown', county: 'Cork', location: {lat: 51.640028, lng: -8.564953}, point: 225, map: 'south'},
    {title: 'Tramore', county: 'Waterford', location: {lat: 52.156210, lng: -7.127300}, point: 180, map: 'south'},
    {title: 'Magheramore', county: 'Wicklow', location: {lat: 52.930841, lng: -6.023053}, point: 135, map: 'east'},
    {title: 'Whiterock', county: 'Dublin', location: {lat: 53.265934, lng: -6.106232}, point: 135, map: 'east'}
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
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsNorth) + '</div>' + '</div>';
            map.setCenter({ lat : 55.307211, lng : -7.373801 });
            map.setZoom(8);
            go2Back.classList.add('north');
            go2Back.classList.remove('west', 'east', 'south');
        } else if (e.target.id === 'btn-w') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsWest) + '</div>' + '</div>';
            map.setCenter({ lat : 53.365468, lng : -9.814509 });
            map.setZoom(6.8);
            go2Back.classList.add('west');
            go2Back.classList.remove('north', 'east', 'south');
        } else if (e.target.id === 'btn-s') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsSouth) + '</div>' + '</div>';
            map.setCenter({ lat : 51.789279, lng : -8.285663 });
            map.setZoom(7);
            go2Back.classList.add('south');
            go2Back.classList.remove('west', 'east', 'north');
        } else if (e.target.id === 'btn-e') {
            surfingSpots.innerHTML = '<div class="row text-center">' + '<div class="col-xs-12 button">' + surfTitle(surfingSpotsEast) + '</div>' + '</div>';
            map.setCenter({ lat : 53.148223, lng : -6.077892 });
            map.setZoom(9);
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

// function searchDirection(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].map === nameKey) {
//             return myArray[i].map;
//         }
//     }
// };

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
                    
                    // console.log(searchDirection(e.target.classList.contains('north'), surfSpots))
                    if (e.target.classList.contains('north')) {
                        map.setCenter({ lat : 55.307211, lng : -7.373801 });
                        map.setZoom(8);
                    } else if (e.target.classList.contains('west')) {
                        map.setCenter({ lat : 53.365468, lng : -9.814509 });
                        map.setZoom(6.8);
                    } else if (e.target.classList.contains('south')) {
                        map.setCenter({ lat : 51.789279, lng : -8.285663 });
                        map.setZoom(7);
                    } else if (e.target.classList.contains('east')) {
                        map.setCenter({ lat : 53.148223, lng : -6.077892 });
                        map.setZoom(9);
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

                console.log('Button clicked: ' + e.target.childNodes[0].data + ' ' + lat + ' ' + lng);
                console.log('OpenWeather API forecast spot, location and date: ' + openWeatherApiData.name + ' ' + openWeatherApiData.coord.lat + ' ' + openWeatherApiData.coord.lon + ' ' + unixToLocal(openWeatherApiData.dt));
                console.log('OpenWeatherAPI 3days forecast times:' +openWeatherExApiData.list[5].dt_txt + ' ' + openWeatherExApiData.list[13].dt_txt + ' ' + openWeatherExApiData.list[21].dt_txt);
                console.log('StormGlassAPI spot: ' + weather.meta.lat + ' ' + weather.meta.lng);

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