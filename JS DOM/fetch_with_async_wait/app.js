let url ="https://catfact.ninja/fact";

async function getfacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("fact 1 : ",data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log("fatc2 : ",data2.fact);

    }catch (e) {
        console.log("Error = ",e);
    }
    console.log(" printed directly by js")
    console.log("other lines are exectued after api call accepts");
}
getfacts();
