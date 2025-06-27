
let url = "https://catfact.ninja/fact";

fetch(url)  
    .then((res) => {     //1st request
        return res.json(); //1st req. return in json formate
        //parsing
    })
    .then((data) => {     //if upper line execute then this will return data
        console.log("data 1 = ",data.fact) //fact 1
        return fetch(url);
    })
    .then((res) => {  
        return res.json();
        //(parsing)
    })
    .then((data2) => { 
        console.log("data 2 = ", data2.fact) //fact 2
         return fetch(url); //request data for data 3
    })
    .then((data3) => {
        console.log("data3 = ",data3)
        // here we will get the data but it is not parsed so it will show "readablestream  "

    })
    .catch((err) => {
        console.log("Error = ",err);
        
    });

    console.log("i am the line which will directly print by js above code will print after the api call resolve");