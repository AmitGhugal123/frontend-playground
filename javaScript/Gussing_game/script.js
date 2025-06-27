
const max = prompt("Enter the Maximum number between 1 to 100");

    const random = Math.floor(Math.random() * max) + 1;

    let guess = prompt("Guess the numbeer");

    while(true)
    {
        if( guess == "quit") {
            console.log("user quit");
            break;
        }
        if(guess == random){
            console.log(" CONGRATES!! YOU GUESS THE CORRECT NUMBER ");
            break;
        }
        else if(guess < random){
          guess = prompt(" hint : your guess was too small. please try again");
        }
        else {
            guess = prompt("hint : your guess was too large . please try again");
        }
    }