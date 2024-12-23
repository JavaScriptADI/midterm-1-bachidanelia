//2.Write a JavaScript program to print the current window contents.

const printButton = '<form> <input type="button" value="Print" onclick="window.print()" /> </form>' // this will create print button;

document.getElementById("body").innerHTML = printButton; // this will inject it into body with ID = "body";
