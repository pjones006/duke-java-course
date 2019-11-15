function changeColor() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");

  dd1.className = "blueback";
  dd2.className = "yellowback";
}

function changeText() {
    var dd1 = document.getElementById("d1");
    var dd2 = document.getElementById("d2");

    dd1.innerHTML = "Bonjour";
    dd2.innerHTML= "Sayonara";

}

function changeValue() {
   document.getElementById("btn1").value = "Color change revised";
   document.getElementById("btn2").value = "Text change revised";
}

function changeStyleColor() {
    document.getElementById("btn3").style.color = "#ff0000";
}