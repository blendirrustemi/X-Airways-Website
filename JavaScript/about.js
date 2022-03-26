//We assigned variable x to get the HTML from the div with the id "right", into "Geolocation is not supported by this browser." if the function doesn't get excecuted.
var x = document.getElementById("right");
function getLocation() {
  //if the function is supported by the browser, it will call the function "showPosition()"
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
//when this function will be called, it will change the innerHTML of the div "right" into your current latitude and longitude
function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
