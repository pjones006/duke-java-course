function changeColor() {
  var divElement1 = document.getElementById("d1");
  var divElement2 = document.getElementById("d2");

  divElement1.className = "blueback";
  divElement2.className = "orangeback";
}

function doRed() {
  var dd1 = document.getElementById("d1");
  dd1.className = "red";
  
  var context = dd1.getContext("2d");
   context.fillStyle="yellow";
   context.fillRect(10,10,60,60);
   context.fillRect(80,10,60,60);

   context.fillStyle="black";
   context.font = "20px Arial";
   context.fillText("Hello", 15,45);
 }

function doBlue() {
  var dd2 = document.getElementById("d2");
   dd2.className = "blue";
}
function doOrange() {
    var canvas = document.getElementById("d1");
    var context = canvas.getContext("2d");
    context.clearRect(10,10,60,60);
    context.clearRect(80,10,60,60);
    canvas.style.backgroundColor = "orange";
}