//We assigned variable x to get the HTML from the div with the id "right", into "Geolocation is not supported by this browser." if the function doesn't get excecuted.
var x = document.getElementById("right"); //Created a variable "x" which would call the element with the "right" ID
function getLocation() {
  // create a function named getLocation()
  if (navigator.geolocation) {
    //Checks for geolocation
    navigator.geolocation.getCurrentPosition(showPosition); //gets the current position of the user
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
