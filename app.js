window.addEventListener('load', ()=> {
  let long;
  let lat;
  const temperatureDescription = document.querySelector(".temperature-description");
const temperatureDegree = document.querySelector(".temperature-degree");
const locationTimeZone = document.querySelector(".location-timezone");
const temperatureSection = document.querySelector(".temperature-section");
const temperatureSpan = document.querySelector(".temperature-section span");
  if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
long = position.coords.longitude;
lat = position.coords.latitude;
const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `${proxy}https://api.darksky.net/forecast/7f7610023a4c38eff4638470e357101f/${lat},${long}`;

fetch(api)
.then(response => {
  return response.json();
})
.then(data => {
console.log(data);
const {temperature, summary, icon} = data.currently;
//Set DOM Elements from the API
temperatureDegree.textContent = temperature;
temperatureDescription.textContent = summary;
locationTimeZone.textContent = data.timezone;
//change to C from F
let celsius = (temperature - 32) * (5/9);
//Set Icon
setIcons(icon, document.querySelector(".icon"));


//Change temperature to C from F
temperatureSection.addEventListener('click', () => {
  if (temperatureSpan.textContent === "F") {
    temperatureSpan.textContent = "C";
    temperatureDegree.textContent = parseFloat(celsius).toFixed(2);
  } else {
        temperatureSpan.textContent = "F";
            temperatureDegree.textContent = temperature;
  }
});
});
});
  } else {
    ht.textContext = "Allow geolocation access or use a browser that supports geolocation!"
}
function setIcons(icon, iconID) {
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g,"_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}
});
