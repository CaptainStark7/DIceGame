// Step 1
var n=Math.random();
n=Math.floor(n*6)+1;

// Step 2 (Including random Images)
var img="dice"+n+".png";
var ImgSrc="images/"+img;

// Step 3
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ImgSrc);


// REPEAT

// Step 1
var x=Math.random();
x=Math.floor(x*6)+1;

// Step 2 (Including random Images)
var imgi="dice"+x+".png";
var ImgSrc2="images/"+imgi;
// Step 3
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",ImgSrc2);
 



// CHECK WHO WIN 

if(n>x){
    document.querySelector("h1").innerHTML="Player 1 WIns";
    
}
else if(n<x){
    document.querySelector("h1").innerHTML="Player 2 WIns";
   
}
else{
        document.querySelector("h1").innerHTML="DRAWS";
}