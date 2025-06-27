//0.1
//WE WILL ADD CLASS in the html file by using the classList property only by using js.
const para = document.querySelector('p');
para.classList.add('container'); // here we got a error where i put .conatainer insted of container


// Select the container element 
const container = document.querySelector('.container');

// Create a <p> element
const redParagraph = document.createElement('p');
redParagraph.textContent = "hye i'm red!";
redParagraph.style.color = 'red';


// Append the <p> to the container
container.prepend(redParagraph);

//0.2
// add h3 element with text "i am blue h3 " in color blue

const blueHeading = document.createElement('h3');
blueHeading.textContent = "i'm blue h3!";
blueHeading.style.color = 'blue';
// Append the <h3> to the container 
container.prepend(blueHeading); 
//  or
// container.prepend(blueHeading); // this will add the blue h3 element at the top of the container
// container.appendChild(blueHeading); // this will add the blue h3 element at the end of the container
// container.insertAdjacentElement('afterbegin', blueHeading); // this will add the blue h3 element at the top of the container
// container.insertAdjacentElement('beforeend', blueHeading); // this will add the blue h3 element at the end of the container
// container.insertAdjacentElement('beforebegin', blueHeading); // this will add the blue h3 element before the container
// container.insertAdjacentElement('afterend', blueHeading); // this will add the blue h3 element after the container