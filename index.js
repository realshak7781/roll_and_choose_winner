var randomNumber1=Math.floor(Math.random()*6)+1;
var leftImg=document.getElementsByClassName("img1");

leftImg[0].setAttribute("src","dice"+randomNumber1+".png");

var randomNumber2=Math.floor(Math.random()*6)+1;
var rightImg=document.getElementsByClassName("img2");

rightImg[0].setAttribute("src","dice"+randomNumber2+".png");

var winner= document.getElementsByTagName("h1")[0];
if(randomNumber1>randomNumber2){
   winner.innerHTML="Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    winner.innerHTML="Player 2 wins";
}
else if(randomNumber1===randomNumber2){
    
       winner.innerHTML="Draw";
}