let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr); // fixed case
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = ""; // fixed space
    for (let col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li); // added this line
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(`http://universities.hipolabs.com/search?name=${country}`);
        return res.data;
    } catch (e) {
        console.log("error : ", e);
        return [];
    }
}
