// write your code here
function psj(x) {
    return (x * 25);
}
var x = 5;
var y = psj(x)
print(x , "Squared is ", y);


function sizeit(x,px, py) {
    var img = new SimpleImage(x);
    print("MetaData for: ", img)
    print("Width: " , img.width , "height: ", img.height)
    print("The following are the pixel colors at position: ", px, ":", py)
    print("Red:", img.getRed(px, py), "Green: ", img.getGreen(px, py), "Blue: ", img.getBlue(px, py))
    print("GetPixel is: ", img.getPixel(px, py));
    // print(img)
}

sizeit("smallpanda.png", 100, 100);
