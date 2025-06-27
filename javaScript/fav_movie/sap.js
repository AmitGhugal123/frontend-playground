const favoriteSer = "GOT";
let guess = prompt("guess my favourite series ")
while ((guess != favoriteSer) && (guess != "quit")) {
    guess = prompt(" wrong guess. please try again");
}
if(guess==favoriteSer){
    console.log("Congratulation !!")
}else
{
    console.log("you quit")
}