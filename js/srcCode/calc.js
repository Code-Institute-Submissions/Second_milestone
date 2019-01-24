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

// var input = [1,2,3];
// var output = [10, 20, 30];

