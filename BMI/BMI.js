"using strict;"
//window.alert("connected");

function calcBMI(){
 //get height in feet, height in inches, weight from form and store in 3 variables feet, inches, weight
var feet = Number(document.getElementById("height-ft").value);
var inches = Number(document.getElementById("height-in").value);
var weight = Number(document.getElementById("weight").value);

 //convert height in feet and inches to total inches and store in another variable height
var totalHeight = Math.round(feet*12 + inches)

 //calculate bmi using the formula, store in a variable called bmi
 var bmi = Math.round((weight*703)/Math.pow(totalHeight,2))

 //display bmi on the html page
 document.getElementById("sum").innerHTML = bmi;
} //end 

function reset(){
  // clear the textboxes and sums
  document.getElementById("height-in").value = "";
  document.getElementById("height-ft").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("sum").innerHTML = "0";
}
