let toDo = [];

let req = prompt("Enter the request");

while(true){
    if(req == "quit"){
        console.log("Quiting app");
        break;
    }

    if(req == "list"){
        console.log("----------------");
        for(let i=0; i<toDo.length; i++){
            console.log(i, toDo[i]);
        }
        console.log("-----------------")
    }

    else if(req == "add"){
        let task = prompt("Enter the task you want to add ");
        toDo.push(task);
        console.log("task added");
    }
    else if(req == "delete"){
        let index = prompt("Enter the task index number");
        toDo.splice(index, 1);
        console.log("task deleted");
    }
    else {
        console.log("Entered wrong task");
    }
    
    req = prompt("Enter the request");
}