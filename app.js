function weatherDataFetch(city) {
    const key = "d43b9bc94518afe99cb9ba423d828c5b"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(function (resp) {
        return resp.json()
    }) // convert data to json
        .then(function (data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function cityWeather(event) {
    weatherDataFetch("Tallinn");
}