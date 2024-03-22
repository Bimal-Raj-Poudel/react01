const button= document.getElementById('search-button');
const input= document.getElementById('search button');

const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');


async function getData(cityNameHere){
const promise= await fetch(`https://api.weatherapi.com/v1/current.json?key=401f7dff259b482495350628242203&q=${cityNameHere}&aqi=yes`);
return await promise.json();
}
getData();



button.addEventListener("click", async () => {
    const value=input.value;
    const result= await getData(value);

    cityName.innerText = `${result.location.name},${result.location.region}- ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});