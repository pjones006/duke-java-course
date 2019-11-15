function sizeit(x,px, py) {
    var img = new SimpleImage(x);
    print("MetaData for: ", img);
    print("Width: " , img.width , "height: ", img.height);
    print("The following data is for pixel: ", px, ":", py);
    print("Red:", img.getRed(px, py), "Green: ", img.getGreen(px, py), "Blue: ", img.getBlue(px, py));
    print("GetPixel is: ", img.getPixel(px, py));
    // print(img)
}

sizeit("smallpanda.png", 100, 100);

function createBox(r, g, b) {
    var coloredBox = new SimpleImage(200,200);
    print(coloredBox);
        for (var pixel of coloredBox.values() ) {
        pixel.setRed(r);
        pixel.setGreen(g);
        pixel.setBlue(b);
        }
    return coloredBox;
}

var myBox = createBox(255, 255, 0);
print(myBox);

