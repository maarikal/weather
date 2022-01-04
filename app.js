document.addEventListener("DOMContentLoaded", cityWeather);

function weatherDataFetch(city) {
    const key = "d43b9bc94518afe99cb9ba423d828c5b"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function (resp) {
        return resp.json()
    }) // convert data to json
        .then(function (data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function cityWeather() {
    weatherDataFetch("Tallinn");
}

function drawWeather(data) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML= celsius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}