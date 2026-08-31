const d = document;
const inputBox = d.querySelector('.searchBar input');
const searchBtn = d.querySelector('.searchBar button');
const weather = d.querySelector('.weather');
const weatherIcon = d.querySelector('.weatherIcon');
const errorMessage = d.querySelector('.error');

async function checkWeather(city){
    const apiKey = '68c0e61b0bf95e08e6f772371d2b7bcf';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
    updateWeatherUI(data);
}

function updateWeatherUI(data){
    d.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    d.querySelector('.city').innerHTML = data.name;
    d.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    d.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;

    const weatherMain = data.weather[0].main.toLowerCase();
    const weatherIcons = {
        clear: 'images/clear.png',
        snow: 'images/snow.png',
        rain: 'images/rain.png',
        clouds: 'images/clouds.png',
        drizzle: 'images/drizzle.png',
        mist: 'images/clouds.png',
        thunderstorm: 'images/rain.png'
    }

    weatherIcon.src = weatherIcons[weatherMain] || 'images/clouds.png';
    weather.style.display = 'block';
    weatherIcon.style.display = 'block';
    errorMessage.style.display = 'none';
    console.log(weatherIcons);
}



searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});