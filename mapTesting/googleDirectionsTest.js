// // this will only run if it's outside initMap, which is outside the scope of the functions I need to pass as parameters here.
// function getDirections() {
//     console.log("directions button is connected");
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
// };

function initMap() {
    const directionsService= new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    map= new google.maps.Map(document.getElementById("map"), {
        // general map settings, centered to Common Space
        center: {lat: 43.0474744, lng: -76.1510856},
        zoom: 17
    });
    directionsRenderer.setMap(map);

    // don't think I need 2 functions here. work on simplifying.
    const directionsButton = () => {
        //console.log("directions button is connected");
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById("getDirections").addEventListener('click', directionsButton);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        // make into array or object of site locations
        let youAreHere = '43.0472300, -76.1508000'; // temporarily fixed at Common Space
        let fayettePark = '43.048400, -76.146724';
        // // doesn't work formatted this way:
        // let youAreHere = new google.map.LatLng(43.0472300, -76.1508000);
        // let fayettePark = new google.map.LatLng(43.048400, -76.146724);
        directionsService.route({
            origin: youAreHere,
            destination: fayettePark,
            travelMode: google.maps.TravelMode.WALKING
        }).then((response) => {
            directionsRenderer.setDirections(response);
        }).catch((error) => window.alert("Directions failed due to " + status));
    };

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

For React, create addMarker function to pass objects into with props for coordinates and pop-up info windows

Example code:
https://developers.google.com/maps/documentation/javascript/examples/directions-simple#maps_directions_simple-html

Example code for text directions:
https://developers.google.com/maps/documentation/javascript/examples/directions-panel

*/