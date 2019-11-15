// This runs on Duke's "write your own code" website
// modify image by thirds (part1)
var img = new  SimpleImage("hilton.jpg");
print(img)

for ( var pixel of img.values()) {
    var wdth = img.getWidth();
    var thirdWdth = img.getWidth()/3;
    if (pixel.getX() <= thirdWdth) {
        pixel.setRed(255);
        } 
    else if (pixel.getX() >= thirdWdth && pixel.getX() <= (thirdWdth * 2))  {
        pixel.setGreen(255);
        } 
    else if (pixel.getX() >= (thirdWdth * 2)) {
        pixel.setBlue(255)
        }
    
    }
print(img)


// part 2



// Modify duke image (part3)
var img = new  SimpleImage("duke_blue_devil.png");
print(img)

for ( var pixel of img.values()) {
    if (pixel.getRed() === 0 && (pixel.getGreen()) === 51 && (pixel.getBlue() === 227)) {
        pixel.setRed(255)
        pixel.setGreen(255)
        pixel.setBlue(0);
        }
    }
    print(img)
    
    