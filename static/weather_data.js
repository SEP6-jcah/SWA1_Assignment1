const citySelector = document.getElementById('city');
const minTemperatureDiv = document.getElementById('minTemperature');
const maxTemperatureDiv = document.getElementById('maxTemperature');
const totalPrecipitationDiv = document.getElementById('totalPrecipitation');
const averageWindSpeedDiv = document.getElementById('averageWindSpeed');
const hourlyForecastDiv = document.getElementById('hourlyForecast');

function updateWeatherData() {
    fetch(`http://localhost:8080/data/${citySelector.value}`)
        .then(response => response.json())
        .then(data => {

            const currentDate = new Date();
            const lastDayData = data.filter(item => {
                const itemDate = new Date(item.time);
                return (
                    item.place === citySelector.value &&
                    (currentDate - itemDate) < 24 * 60 * 60 * 1000
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

            lastDayData.forEach(item => {
                switch (item.type) {
                    case 'temperature':
                        minTemperatureValue = item.value < minTemperatureValue ? item.value : minTemperatureValue;
                        maxTemperatureValue = item.value > maxTemperatureValue ? item.value : maxTemperatureValue;
                        temperatureUnit = item.unit;
                        break;
                    case 'precipitation':
                        totalPrecipitationValue += item.value;
                        precipitationUnit = item.unit;
                        break;
                    case 'wind speed':
                        windSpeedSum += item.value;
                        windSpeedCount += 1;
                        windSpeedUnit = item.unit;
                        break;
                }
            });

            const averageWindSpeed = (windSpeedSum / windSpeedCount).toFixed(2);
            const totalPrecipitation = totalPrecipitationValue.toFixed(2);

            minTemperatureDiv.textContent = `Min Temperature: ${minTemperatureValue} ${temperatureUnit}`;
            maxTemperatureDiv.textContent = `Max Temperature: ${maxTemperatureValue} ${temperatureUnit}`;
            totalPrecipitationDiv.textContent = `Total Precipitation: ${totalPrecipitation} ${precipitationUnit}`;
            averageWindSpeedDiv.textContent = `Average Wind Speed: ${averageWindSpeed} ${windSpeedUnit}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

citySelector.addEventListener('change', () => {
    citySelector.value;
    updateWeatherData();
});

weatherDataButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

updateWeatherData();
