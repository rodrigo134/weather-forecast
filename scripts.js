const key  = "YOUR_API_KEY"

function clickedButton(){
    const city = document.querySelector(".input-city").value
    console.log(city)
    searchCity(city)
}
 

async function searchCity(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const dados = await response.json();
    colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados){
    document.querySelector(".city").innerHTML = "Weather in " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp - 273.15) + "°C";
    document.querySelector(".text-info").innerHTML = dados.weather[0].main;
    document.querySelector(".container-weather > p:not([class])").innerHTML = "Humidity: " + dados.main.humidity + "%";
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}