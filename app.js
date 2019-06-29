window.addEventListener('load', ()=> {
  let long;
  let lat;


  if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
long = position.coords.longitude;
lat = position.coords.latitude;

const api = `https://api.darksky.net/forecast/7f7610023a4c38eff4638470e357101f/${lat},${long}`;
  });
  } else {
    ht.textContext = "Allow geolocation access or use a browser that supports geolocation!"
}
fetch(api)
.then(data)
});
