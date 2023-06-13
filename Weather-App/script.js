const apiKey = "25ac34144803c0f04a84d063a4ab3160";

const weatherData = document.getElementById('weather-data');

const cityInput = document.getElementById('city-input');

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const cityValue = cityInput.value;
    // console.log(cityValue);
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        
        if(!response.ok){
            throw new Error("Network response was not ok")
        }

        const data = await response.json()

        // console.log(data);
        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind speed: ${data.main.speed}` ,
        ]

        weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">`
        
        weatherData.querySelector('.temperature').textContent = `${temperature}°C`;

        weatherData.querySelector(".description").textContent = description;
    
        weatherData.querySelector(".details").innerHTML = details.map((detail)=> `<div>${detail}</div>` ).join("");
    } catch (error) {
        
    }
}