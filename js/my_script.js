function invoiceGenerate {
    var list = "Total:"; // this will show a list of selected items
    var runningTotal = 0; // keeps a running total of numeric cost
    var sizeTotal = 0; // numeric subtotal of pizza size cost
    var sizeArray = document.getElementsByClassName("size"); // pulls in the array of checked options with class "size"

    for (var i = 0; i < sizeArray.length; i++) { // declare counter variable set to 0, increment countery until it is no longer less than the size of the array
        if sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            list = list + selectedSize + "<br>";
        }
    }
}

function sizeCost {

}

function meatCost {

}

function veggiesCost {

}