const API_KEY = "fcedf70b69ecb9a333bfde01e55cea95";

function GeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = `  @${data.name}`;
            weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}°`;
        });
    }
function GeoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(GeoSuccess,GeoError);