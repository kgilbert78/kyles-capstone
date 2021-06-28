function initMap() {
    map= new google.maps.Map(document.getElementById("map"), {
        // general map settings, centered to Common Space
        center: {lat: 43.0474744, lng: -76.1510856},
        zoom: 16
    });

    let youAreHere = new google.maps.Marker({
        // temporarily fixed at Common Space
        position: {lat: 43.0472300, lng: -76.1508000},
        map: map,
        label: "You are here"
    });

    const fayetteParkMarker = new google.maps.Marker({
        position: {lat: 43.048400, lng:-76.146724},
        map: map,
        label: "Fayette Park"
    });

    const fayetteParkPopUp = new google.maps.InfoWindow({
        content: `<h1>Fayette Park</h1><p>Brief description</p>`
    });

    fayetteParkMarker.addListener('click', () => {
        fayetteParkPopUp.open(map, fayetteParkMarker);
    });

    const cityHallMarker = new google.maps.Marker({
        position: {lat: 43.050000, lng: -76.1490000},
        // {lat: 43.047198, lng: -76.1512037}
        map: map,
        label: "City Hall"
    });

    const cityHallPopUp = new google.maps.InfoWindow({
        content: `<h1>City Hall</h1><p>Brief description</p>`
    });

    cityHallMarker.addListener('click', () => {
        cityHallPopUp.open(map, cityHallMarker);
    });
    
};

/*
NOTES:

For React, create addMarker function to pass objects into with props for coordinates and info windows

Figure out where the latitude & longitude are coming from here:
https://developers.google.com/maps/documentation/javascript/examples/directions-simple#maps_directions_simple-html
https://developers.google.com/maps/documentation/javascript/examples/directions-panel

*/