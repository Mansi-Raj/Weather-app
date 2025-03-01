document.querySelector(".search button").addEventListener("click", function() {
    searchWeather();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        searchWeather();
    }
});

function searchWeather() {
    const city = document.querySelector(".searchbar").value;
    fetch(`/weather?city=${city}`)
        .then(response => response.json())
        .then(data => displayWeather(data));
}

function displayWeather(data) {
    if (data.error) {
        alert("Error: " + data.error);
        return;
    }

    const { name, sys, weather, main, wind } = data;
    document.querySelector(".city").innerText = `Weather in ${name}`;
    document.querySelector(".state-country").innerText = `${sys.state || "Unknown"}, ${sys.country}`;
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
    document.querySelector(".description").innerText = weather[0].description;
    document.querySelector(".temp").innerText = main.temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + main.humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + wind.speed + " km/h";

    updateBackground(weather[0].main);
}
