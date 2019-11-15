// This runs on Duke's "write your own code" website
// Part 1 (green screen image)
var fgImage = new SimpleImage("drewrobert.png");
var bgImage = new SimpleImage("dinos.png");
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for ( var pixel of fgImage.values()) {
    // Check is foreground image pixel is green and replace with bg pixel
        // if (pixel.getGreen() > pixel.getRed() + pixel.getBlue() ) {
    if (pixel.getGreen() == 255 ) {
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    }
    // Otherwise set the pixel to the non-green foreground image pixel
    else {
      output.setPixel(pixel.getX(), pixel.getY(), pixel)
    }
}
// print(fgImage);
// print(bgImage);print(output);

// Part 2 (red, green, blue, magenta box)
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  // Set entire left half to red (magenta also use red:255)
  if (x < img.getWidth()/2) {
    px.setRed(255);
  }
  // Set top right to green
  if (x > img.getWidth()/2 && y < img.getHeight()/2) {
      px.setGreen(255);
  } 
  // Set bottom half to Blue (magenta also uses blue:255)
  if (y > img.getHeight()/2) {
      px.setBlue(255);
  } 
}
print (img);

// part 3 (image with black border using a function that passes image, border thicknes)

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function addBorder(file, bw) {
    var img = new SimpleImage(file);
    print(img);
    wd = img.getWidth();
    ht = img.getHeight();
    for ( var pixel of img.values()) {
        x = pixel.getX();
        y = pixel.getY();
        if (x <= bw || x >= wd - bw) {
            setBlack(pixel);
        }
        else if (y <= bw || y >= ht - bw) {
            setBlack(pixel);
        }
    }
    return img;
}

print(addBorder("smallpanda.png", 10));