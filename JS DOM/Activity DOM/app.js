let btn = document.querySelector('button');

// Add an event listener to the button
btn.addEventListener('click', function () {
    // Generate a random color and apply it to the h3 element and div
    let h3 = document.querySelector('h3');
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
//
    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    console.log(randomColor);
});


// Function to generate a random RGB color
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}