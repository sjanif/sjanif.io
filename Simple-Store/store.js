"using strict;"
//Shaquil Janif

//create array of objects
//each product is an object with item and price
//{item: "itemname": price: 10}
var inventory = [
{item: "Mouse", price: 10.00},
{item: "Speaker", price: 20.00},
{item: "USB Drive", price: 8.00},
];
//declare any global variables
var grandtotal = 0

//display the inventory in a table on the webpage
var tableHTML = "<table>" +
  "<caption>Store Item's</caption>" +
  "<tr><th>Item</th><th>Price</th></tr>";

  for (var i = 0; i < inventory.length; i++){
    tableHTML += "<tr><td>" + inventory[i].item +
    "</td><td>" + inventory[i].price +
    "</td></tr>";
  }
tableHTML +=  "</table>";

//displaye this table in the div in HTML
document.getElementById("inventory_table").innerHTML = tableHTML

function addItem()
{
   //function to add items to order
   // Declare quantity and item variables
   var useritem = String(document.getElementById("item").value);
   var quantity = Number(document.getElementById("quantity").value);
   // find price of item
   var itemprice = findPrice(useritem);
   // If item does not exist
   if(itemprice == -1)
    return window.alert("Item not found");
   // Calculate total
   var total = Math.round(quantity * itemprice);
   //Show total on page
   document.getElementById("invoice").innerHTML = "Invoice Total ($):" + total;
   document.getElementById("name").innerHTML = quantity + "&nbsp" + useritem + "&nbsp" + "at" + "&nbsp" + itemprice + "&nbsp" + "each =" + "&nbsp" + total;
}

//this function searches for a product and returns the price
//or -1 if the product is not found
//DO NOT CHANGE THIS CODE
function findPrice(useritem)
{
    //search the inventory, return price or -1
    for (var i = 0; i < inventory.length; i++)
    {
        if (inventory[i].item == useritem)
            return inventory[i].price;
    }
    //not found, return -1
    return -1;
}

function reset(){
  document.getElementById("item").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("invoice").innerHTML = "Invoice Total ($):";
}
