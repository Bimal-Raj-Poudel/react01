const button=document.getElementById('get-location-button');

  
async function getData (lat, lon){
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=401f7dff259b482495350628242203&q=${lat},${lon}&aqi=yes`);
    return await promise.json();
}


async function gotLocation(position){
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function notGotLocation (){
    console.log(" there is some issue");
}
button.addEventListener('click', async ()=>{
navigator.geolocation.getCurrentPosition( gotLocation, notGotLocation);

}); 