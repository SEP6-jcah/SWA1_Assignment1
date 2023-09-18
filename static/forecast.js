const hourlyForecastDiv = document.getElementById('hourlyForecast');
const weatherDataButton = document.getElementById('weatherDataButton');
const hourSelector = document.getElementById('hourSelector');
const citySelector = document.getElementById('city');
let selectedHour = null;

function fetchWeatherData() {
    const xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', `http://localhost:8080/forecast/${citySelector.value}`, true);

    xmlRequest.onreadystatechange = function () {
        if (xmlRequest.readyState === 4) {
            if (xmlRequest.status === 200) {
                const data = JSON.parse(xmlRequest.responseText);
                displayHourlyForecast(data, selectedHour ? selectedHour : new Date().getHours());
            } else {
                console.error('Error fetching forecast data:', xmlRequest.statusText);
            }
        }
    };
    
    xmlRequest.onerror = function () {
        console.error('Network error occurred');
    };

    xmlRequest.send();
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

fetchWeatherData();