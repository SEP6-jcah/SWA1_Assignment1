const hourlyForecastDiv = document.getElementById('hourlyForecast');
const weatherDataButton = document.getElementById('weatherDataButton');
const hourSelector = document.getElementById('hourSelector');
const citySelector = document.getElementById('city');
let selectedHour = null;

function fetchWeatherData() {
    fetch(`http://localhost:8080/forecast/${citySelector.value}`)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data, selectedHour? selectedHour : new Date().getHours());  
    })
    .catch(error => console.error('Error fetching forecast data:', error));
}

function displayHourlyForecast(data, selectedHour) {
    const selectedHourData = data.filter(entry => {
        const entryTime = new Date(entry.time);
        return entryTime.getHours() - 2 === selectedHour;
    });

    const jsonString = JSON.stringify(selectedHourData, undefined, 4); 
    hourlyForecastDiv.textContent = jsonString;
}

hourSelector.addEventListener('change', () => {
    selectedHour = parseInt(hourSelector.value);
    fetchWeatherData();
});

citySelector.addEventListener('change', () => {
    citySelector.value;
    fetchWeatherData();
});

weatherDataButton.addEventListener('click', () => {
    window.location.href = 'weather_data.html';
});

weatherFormButton.addEventListener('click', () => {
    window.location.href = 'weather_form.html';
    });
    
fetchWeatherData();