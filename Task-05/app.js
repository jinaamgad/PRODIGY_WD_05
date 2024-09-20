const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weatherInfo');

fetchWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeatherData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('An error occurred while fetching weather data');
    }
}

function displayWeatherData(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const conditions = document.getElementById('conditions');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    
    cityName.textContent = `City: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    conditions.textContent = `Conditions: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}