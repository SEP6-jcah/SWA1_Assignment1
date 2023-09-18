const forecastButton = document.getElementById('forecastButton');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');
const precip = document.getElementById('precip');
const avgWind = document.getElementById('avgWind');
const citySelector = document.getElementById('city');



function fetchMinTemp() {
  fetch(`http://localhost:8080/data/${citySelector.value}`)
  .then(response => response.json())
  .then(data => { displayMinTemp(data); })
  .catch(error => console.error('Error fetching lowest temperature:', error));
}

function fetchMaxTemp() {
  fetch(`http://localhost:8080/data/${citySelector.value}`)
  .then(response => response.json())
  .then(data => { displayMaxTemp(data); })
  .catch(error => console.error('Error fetching highest temperature:', error));
}

function fetchTotalPrecip() {
  fetch(`http://localhost:8080/data/${citySelector.value}`)
  .then(response => response.json())
  .then(data => { displayTotalPrecipitation(data); })
  .catch(error => console.error('Error fetching total precipitation:', error));
}

function fetchAvgWind() {
  fetch(`http://localhost:8080/data/${citySelector.value}`)
  .then(response => response.json())
  .then(data => { displayAvgWind(data); })
  .catch(error => console.error('Error fetching average wind speed:', error));
}

function displayMinTemp(data) {
    const temperatureData = data.filter(entry => {
        entry.type === "temperature"
    });

    const lowestTemperature = temperatureData.reduce((min, current) => {
      const currentValue = current.value;
      return currentValue < min ? currentValue : min;
    }, Infinity);
    
    minTemp.textContent = lowestTemperature;
}

function displayMaxTemp(data) {
  const temperatureData = data.filter(entry => {
      entry.type === "temperature"
  });

  const highestTemperature = temperatureData.reduce((max, current) => {
    const currentValue = current.value;
    return currentValue > max ? currentValue : max;
}, -Infinity);

  maxTemp.textContent = highestTemperature;
}

function displayTotalPrecipitation(data) {
  const precipData = data.filter(entry => {
      entry.type === "precipitation"
  });

  const totalPrecip = precipData.reduce((total, current) => {
    return total + (current.value || 0);
}, 0);

  precip.textContent = totalPrecip;
}

function displayAvgWind(data) {
  const windData = data.filter(entry => {
      entry.type === "wind speed"
  });

  const windSpeed = windData.reduce((total, current) => {
    return total + (current.value || 0);
  }, 0);

  const avgSpeed = windSpeed / windData.length;

  avgWind.textContent = avgSpeed;
}

citySelector.addEventListener('change', () => {
    citySelector.value;
    fetchMinTemp();
    fetchMaxTemp();
    fetchTotalPrecip();
    fetchAvgWind();
});

forecastButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

fetchMinTemp();
fetchMaxTemp();
fetchTotalPrecip();
fetchAvgWind();