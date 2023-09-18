const hourlyForecastDiv = document.getElementById('hourlyForecast');
let selectedHour = null;

function fetchWeatherData() {
    fetch(`http://localhost:8080/forecast/${citySelector.value? citySelector.value : 'Aarhus'}`)
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

const hourSelector = document.getElementById('hourSelector');

hourSelector.addEventListener('change', () => {
    selectedHour = parseInt(hourSelector.value);
    fetchWeatherData();
});

const citySelector = document.getElementById('city');

citySelector.addEventListener('change', () => {
    citySelector.value;
});

fetchWeatherData();