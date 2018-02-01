function preload(){
    userUpload = loadImage("colesprouse.jpg")
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
    background(0);
    image(userUpload, 0, 0);
    loadPixels();
    
        for(var row = 0; row < height; row++){
            for(var col = 0; col < width; col++){
                    var startingIndex = (col + row * width)*4;
                    
                var r = pixels[startingIndex];
                var g = pixels[startingIndex + 1];
                var b = pixels[startingIndex + 2];
                var a = pixels[startingIndex + 3];
                
                var lastPixel = pixels.length - 1;
                    
                    if(keyIsPressed){
                        if(key=="1"){
                            gray_filter(startingIndex, g, a);
                        }
                        if(key=="2"){
                            green_filter(startingIndex, g, a);
                        }
                        if(key=="3"){
                            cole_filter(startingIndex, r, g, b, a);
                        }
                        if(key=="4"){
                            beautiful_filter(startingIndex, r, g, b, a);
                        }
                        if(key=="5"){
                            pretty_filter(startingIndex, r, g, b, a);
                        }
                        if(key=="6"){
                            maria_filter(startingIndex, r, g, b, a);
                        }
                        if(key=="7"){
                            gorgeous_filter(startingIndex, r, g, b, a, row, col);
                        }
                        if(key=="8"){
                            mrbudi1(startingIndex, r, g, b, a);
                        }
                        if(key=="9"){
                            mrbudi2(startingIndex, lastPixel, r, g, b, a);                            
                        }
                    }    
            }
        }
    
            
    
    updatePixels();
}

function gray_filter(startingIndex, g, a){
    pixels[startingIndex + 0] = g; //red
    pixels[startingIndex + 1] = g; //green
    pixels[startingIndex + 2] = g; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function green_filter(startingIndex, g, a){
    pixels[startingIndex + 0] = 0; //red
    pixels[startingIndex + 1] = g; //green
    pixels[startingIndex + 2] = 0; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function cole_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r; //red
    pixels[startingIndex + 1] = b; //green
    pixels[startingIndex + 2] = g; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function beautiful_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r/2; //red
    pixels[startingIndex + 1] = b/2; //green
    pixels[startingIndex + 2] = g/2; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function pretty_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r*2; //red
    pixels[startingIndex + 1] = b*2; //green
    pixels[startingIndex + 2] = g*2; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function maria_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = 255 - r; //red
    pixels[startingIndex + 1] = 255 - g; //green
    pixels[startingIndex + 2] = 255 - b; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function gorgeous_filter(startingIndex, r, g, b, a, row, col){
    pixels[startingIndex + 0] = r + row - 190; //red
    pixels[startingIndex + 1] = g + col - 190; //green
    pixels[startingIndex + 2] = b; //blue
    pixels[startingIndex + 3] = a; //alpha
}

function mrbudi1(startingIndex, r, g, b, a){
    if(startingIndex % 20 == 0){
        pixels[startingIndex + 0] = 255; //red
        pixels[startingIndex + 1] = 0; //green
        pixels[startingIndex + 2] = 0; //blue
        pixels[startingIndex + 3] = a; //alpha
    }
}

function mrbudi2(startingIndex, lastPixel, r, g, b, a){
    pixels[lastPixel - startingIndex + 3] = r; //red
    pixels[lastPixel - startingIndex + 2] = g; //green
    pixels[lastPixel - startingIndex + 1] = b; //blue
    pixels[lastPixel - startingIndex + 0] = a; //alpha
}