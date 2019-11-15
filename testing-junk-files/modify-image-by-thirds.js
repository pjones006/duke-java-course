// Simple function fo multiply by 25 a number passed to it.


var img = new  SimpleImage("usain.jpg");

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
