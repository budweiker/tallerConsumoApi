let d = document;
const inputBox = d.querySelector('.searchBar input');
const searchBtn = d.querySelector('.searchBar button');
const weatherIcon = d.querySelector('.weatherIcon');
const weather = d.querySelector('.weather');
const errorMessage = d.querySelector('.error');

async function checkWeather(city){
    const apiKey = '68c0e61b0bf95e08e6f772371d2b7bcf';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});