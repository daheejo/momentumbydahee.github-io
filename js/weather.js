function GeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng)
}

function GeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(GeoSuccess,GeoError);