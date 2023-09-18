const citySelector = document.getElementById('city');
const minTemperatureDiv = document.getElementById('minTemperature');
const maxTemperatureDiv = document.getElementById('maxTemperature');
const totalPrecipitationDiv = document.getElementById('totalPrecipitation');
const averageWindSpeedDiv = document.getElementById('averageWindSpeed');
const hourlyForecastDiv = document.getElementById('hourlyForecast');

function updateWeatherData() {
    const xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', `http://localhost:8080/data/${citySelector.value}`, true);

    xmlRequest.onreadystatechange = function () {
        if (xmlRequest.readyState === 4) {
            const data = JSON.parse(xmlRequest.responseText);
            
            const today = new Date();
            const yesterday = data.filter(entry => {
                const entryData = new Date(entry.time);
                return (
                    entry.place === citySelector.value 
                    && (today - entryData) < 24 * 60 * 60 * 1000
                );
            });

            let minTemperatureValue = Infinity;
            let maxTemperatureValue = -Infinity;
            let totalPrecipitationValue = 0;
            let windSpeedSum = 0;
            let windSpeedCount = 0;
            let temperatureUnit = ''; 
            let precipitationUnit = '';
            let windSpeedUnit = '';

            yesterday.forEach(entry => {
                switch (entry.type) {
                    case 'temperature':
                        minTemperatureValue = entry.value < minTemperatureValue ? entry.value : minTemperatureValue;
                        maxTemperatureValue = entry.value > maxTemperatureValue ? entry.value : maxTemperatureValue;
                        temperatureUnit = entry.unit;
                        break;
                    case 'precipitation':
                        totalPrecipitationValue += entry.value;
                        precipitationUnit = entry.unit;
                        break;
                    case 'wind speed':
                        windSpeedSum += entry.value;
                        windSpeedCount += 1;
                        windSpeedUnit = entry.unit;
                        break;
                }
            });

            const averageWindSpeed = (windSpeedSum / windSpeedCount).toFixed(2);
            const totalPrecipitation = totalPrecipitationValue.toFixed(2);

            minTemperatureDiv.textContent = `Min Temperature: ${minTemperatureValue} ${temperatureUnit}`;
            maxTemperatureDiv.textContent = `Max Temperature: ${maxTemperatureValue} ${temperatureUnit}`;
            totalPrecipitationDiv.textContent = `Total Precipitation: ${totalPrecipitation} ${precipitationUnit}`;
            averageWindSpeedDiv.textContent = `Average Wind Speed: ${averageWindSpeed} ${windSpeedUnit}`;
        } else {
            console.error('Error fetching data:', xmlRequest.statusText);
        }
    
    };

    xmlRequest.onerror = function () {
        console.error('Network error occurred');
    };

    xmlRequest.send();
};

citySelector.addEventListener('change', () => {
    citySelector.value;
    updateWeatherData();
});

weatherDataButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

updateWeatherData();
