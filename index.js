
    // Generate random numbers for both players
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Generate image sources
    var randomImageSource1 = "./images/dice" + randomNumber1 + ".png";    //this code will change the source(src) of the image as written in insex.html
    var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

    // Update the images for both players
    var image1 = document.querySelector(".img1");    //we use .img1 beacuse in class we use . in the front
    var image2 = document.querySelector(".img2");     //change pf attribute will take place

    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);         //here we will set the attribute

var heading=document.querySelector("h1");
if(randomNumber1>randomNumber2){
    heading.textContent="player 1 wins";
}else if(randomNumber1<randomNumber2){
    heading.textContent="player 2 wins";
}else{
    heading.textContent="its a Draw";
}


