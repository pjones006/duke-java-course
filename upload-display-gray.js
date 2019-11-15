var imageColor;
var imageGray;

function doLime() {
  var dd1 = document.getElementById("d1");
   dd1.style.backgroundColor="lime";
}


function doColor() {
   var dd1 = document.getElementById("d1");
  var colorinput = 
      document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
}
function doSquare() {
  var dd1 = document.getElementById("d1");
  var sizeinput = 
      document.getElementById("sldr");
  var size = sizeinput.value;
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,size,size);
}

function upload() {
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  imageColor = new SimpleImage(fileinput);
  imageGray = imageColor;
  imageColor.drawTo(imgcanvas);
}

function makeGray() {
    for (var pixel of imageGray.values()) {
        var avg = (pixel.getRed() + pixel.getGreen()
            + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("can2");
    imageGray.drawTo(imgcanvas);
}