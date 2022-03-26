function emailcheck() {
  //the function we've created is emailcheck and is called whenever we click the submit button

  var n = document.getElementById("name").value; //whatever value is placed on id name is then stored on a variable called n here//
  var s = document.getElementById("surname").value; //whatever value is placed on id surname is then stored on a variable called s here//
  var f = document.getElementById("fly").value; //whatever value is placed on id fly is then stored on a variable called f here//
  var c = document.getElementById("comm").value; //whatever value is placed on id comm is then stored on a variable called c here//

  var e1 = document.getElementById("email_1").value; //the email placed in the first email box is stored on a variable called e1//
  var e2 = document.getElementById("email_2").value; //the email placed in the confirm email box is stored on a variable called e2//

  if (n != "" && s != "" && f != "" && c != "") {
    //the if statement will check all the variable n s f c whether they are filled or not
    if (e1 != e2) {
      //if the values stored on e1 and e2 do not match show the below alert box
      alert("Emails Are Not The Same!");
    } else {
      alert("Your Message Has Been Received Successfully!"); //if they do match it will show this alert box that the message is sent successfully
      document.getElementById("b_border").style.borderColor = "#30c230"; //after the alert box is gone the border of the box will change its color to #30c230
    }
  } else {
    alert("Please Fill Out The Form..."); // if there is no value placed on the input boxes the function will then display an alert box to fill out the form after the submit button is pressed
  }
}

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
