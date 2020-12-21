window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {

    /**

     * Register a click event handler for the Convert button

     */

    document.getElementById("convertButton").addEventListener("click", function() {

        var cInput = document.getElementById("cInput");

        var fInput = document.getElementById("fInput");



        if(cInput.value.length > 0) {   // If celsius input is not empty

            var cFloat = parseFloat(cInput.value);  // Convert the value to float

            if(isNaN(cFloat)) { // If it is not a number, display error message

                document.getElementById("errorMessage").innerHTML = cInput.value + " is not a number";

            }

            else {  // If it is a valid number, do the conversion

                document.getElementById("errorMessage").innerHTML = ""; // Reset the error message

                fInput.value = convertCtoF(cFloat); // Convert the celsius temp to fahrenheit

            }

        }

        else if(fInput.value.length > 0) {  // If fahrenheit input is not empty

            var fFloat = parseFloat(fInput.value);  // Convert the value to float

            if(isNaN(fFloat)) { // If it is not a number, display error message

                document.getElementById("errorMessage").innerHTML = fInput.value + " is not a number";

            }

            else {  // If it is a valid number, do the conversion

                document.getElementById("errorMessage").innerHTML = ""; // Reset the error message

                cInput.value = convertFtoC(fFloat); // Convert the fahrenheit temp to celsius

            }

        }



        /**

         * Change the image accordingly

         */

        if(fInput.value < 32) { // cold.gif if fahrenheit temp < 32

            document.getElementById("weatherImage").src = "cold.gif";

        }

        else if(fInput.value <= 50) {   // cool.gif if fahrenheit temp >= 32 and <= 50

            document.getElementById("weatherImage").src = "cool.gif";

        }

        else {  // warm.gif if fahrenheit temp > 50

            document.getElementById("weatherImage").src = "warm.gif";

        }

    })



    /**

     * Ensure that only one text field contains a value

     */

    // If text is input into celsius input box, reset the fahrenheit input value

    document.getElementById("cInput").addEventListener("input", function() {

        document.getElementById("fInput").value = "";

    })

    // Similarly, if text is input into fahrenheit input box, reset the celsius input value

    document.getElementById("fInput").addEventListener("input", function() {

        document.getElementById("cInput").value = "";

    })

}

// Convert Celsius to Fahrenheit

function convertCtoF(degreesCelsius) {

    var fahrenheit = degreesCelsius * 9 / 5 + 32;

    return fahrenheit;

}

// Convert Fahrenheit to Celsius

function convertFtoC(degreesFahrenheit) {

    var celsius = (degreesFahrenheit - 32) * 5 / 9;

    return celsius;

}
