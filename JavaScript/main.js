function tickets() { // Creating a function called tickets()
    // Assign Values
    var flyfrom = document.getElementById("flyfrom").value; // Create a variable called flyfrom which gets the value from the input type  with the id flyfrom
    var flyto = document.getElementById("flyto").value; // Create a variable called flyto which gets the value from the input type with the id flyto
    var depart_date = document.getElementById("depart_date").value; // Create a variable called depart_date which gets the value from the input type with the id depart_date
    var return_date = document.getElementById("return_date").value; // Create a variable called return_date which gets the value from the input type with the id return_date
    var adults = document.getElementById("adults").value; // Create a variable called adults which gets the value from the input type with the id adults
    var child = document.getElementById("child").value; // Create a variable called child which gets the value from the input type with the id child
    var travel = document.getElementById("travel").value; // Create a variable called travel which gets the value from the input type with the id travel
    // Write Values
    if (flyfrom != "" && flyto != "" && depart_date != "" && return_date != "" && adults != "" && child != "" && travel != "") { // If Condition to check if all the input types have values on them
        if (isNaN(flyfrom) && isNaN(flyto)) { //Checks if flyfrom form and flyto form are not numbers
            document.getElementById("testh1").style.display = "none"; // The paragraph "testh1" is removed if the conditions above are met
            alert("The Booking Was Made Successfully!"); // The user is shown an alert with the message: The booking was made successfully
            document.getElementById("flyfrom_paragraph").innerHTML = "From: " + flyfrom; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("flyto_paragraph").innerHTML = "To: " + flyto; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("depart_paragraph").innerHTML = "Departure Date: " + depart_date; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("return_paragraph").innerHTML = "Return Date: " + return_date; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("adults_paragraph").innerHTML = "Adults: " + adults; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("child_paragraph").innerHTML = "Children: " + child; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("travel_paragraph").innerHTML = "Class: " + travel; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            location.href = "#second_part"; // Scroll the page to the corresponding ID: second_part
        } else {
            alert("Destination or Return Should Not Contain Numbers") //Alerts the user if it finds numbers in input form
        }
    } else if (flyfrom != "" && flyto != "" && (depart_date != "" || return_date != "") != "" && adults != "" && child != "" && travel != "") { // If the first condition is not met then this part will be checked
        if (isNaN(flyfrom) && isNaN(flyto)) { //Checks if flyfrom form and flyto form are not numbers
            document.getElementById("testh1").style.display = "none"; // The paragraph "testh1" is removed if the conditions above are met
            alert("The Booking Was Made Successfully! - One Way Flight") //If the conditions above are met the user will see an alert with the message, The Booking Was Successfully - One Way Flight
            document.getElementById("flyfrom_paragraph").innerHTML = "From: " + flyfrom; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("flyto_paragraph").innerHTML = "To: " + flyto; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("depart_paragraph").innerHTML = "Departure Date: " + depart_date; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("return_paragraph").innerHTML = "Return Date: One Way Flight"; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("adults_paragraph").innerHTML = "Adults: " + adults; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("child_paragraph").innerHTML = "Children: " + child; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            document.getElementById("travel_paragraph").innerHTML = "Class: " + travel; // Call the paragraph with its corresponding ID and write the values assigned when the function tickets() is called
            location.href = "#second_part"; // Scroll the page to the corresponding ID: second_part
        } else {
            alert("Destination or Return Should Not Contain Numbers") //Alerts the user if it finds numbers in input form
        }
    } else { // If any of the conditions above are not met, then this section will be executed
        alert("Please Fill Out The Entire Form!") // The user will receive a message: Please Fill Out The Entire Form!
    }
}