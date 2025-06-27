let input = document.querySelector("input");
input.addEventListener("keyup", function (event) {
    // console.log(event.key); // Logs the key pressed
    // console.log(event.code); // Logs the physical key on the keyboard
    // console.log(event); // Logs the entire KeyboardEvent object (properties)

    console.log(event.code);
    if (event.code == "ArrowUp"){
        console.log("character move up!");
    } else if (event.code == "ArrowDown") {
        console.log("character move down!");
    }   else if (event.code == "ArrowLeft") {   
        console.log("character move left!");
    } else if (event.code == "ArrowRight") {
        console.log("character move right!");
    }   else {
        console.log("character stay still!");
    }


});