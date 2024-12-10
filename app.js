const apiKey = 'c0555171f33845f8889193525240212';
const city = 'Logan';

function getWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found or API issue');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            displayError(error.message);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    const errorMessage = document.getElementById('error-message');

    errorMessage.classList.add('hidden');

    const city = data.location.name;
    const temperature = data.current.temp_f;
    const description = data.current.condition.text;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_mph;

    weatherInfo.innerHTML = `
        <p class="text-2xl font-semibold">${city}</p>
        <p class="text-xl mt-2">${temperature}°F</p>
        <p class="mt-2 text-lg text-gray-600 capitalize">${description}</p>
        <p class="mt-2 text-md">Humidity: ${humidity}%</p>
        <p class="mt-2 text-md">Wind Speed: ${windSpeed} mph</p>
    `;
}

function displayError(message) {
    const weatherInfo = document.getElementById('weather-info');
    const errorMessage = document.getElementById('error-message');

    weatherInfo.innerHTML = '';

    errorMessage.innerHTML = `<p>${message}</p>`;
    errorMessage.classList.remove('hidden');
}

window.onload = getWeather;
