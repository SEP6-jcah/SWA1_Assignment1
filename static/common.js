// Shared JavaScript code for both pages
const citySelector = document.getElementById('city');
citySelector.addEventListener('change', () => {
    const selectedCity = citySelector.value;
    // Fetch and display weather data for the selected city
    fetchWeatherData(selectedCity);
});
