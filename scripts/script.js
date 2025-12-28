// cons & vars
const container = document.querySelector(".container");
const ingreds = document.querySelector(".ingreds");
const createBtn = document.querySelector(".createBtn");
let ingredList = [];

console.log(createBtn)

// functions
function addIngredField(name = "", value = 0) {
    /*
    <div class="ingred">
                    <input type="text" class="ingredName" placeholder="enter component">
                    <input type="number" class="ingredQuant" placeholder="enter quantity" min="0.1">
                </div><!--./ingred-->
    */
    //    creating the ingred div
    const ingred = document.createElement("div");
    ingred.classList.add("ingred");

    // creating the name input field
    const ingredName = document.createElement("input");
    ingredName.type = "text";
    ingredName.classList.add("ingredName");
    ingredName.placeholder = "enter component";
    if (name = "") {
        ingredName.value = "";
    } else {
        ingredName.value = name;
    }

    // creating the quantity input field
    const ingredQuant = document.createElement("input");
    ingredQuant.type = "number";
    ingredQuant.min = "0";
    ingredQuant.step = "0.01";

    ingredQuant.classList.add("ingredQuant");
    ingredQuant.placeholder = "enter quantity";
    if (value = 0) {
        ingredQuant.value = 0;
    }
    else {
        ingredQuant.value = value;
    }

    //appending to the ingred
    ingred.append(ingredName, ingredQuant);

    // appending to the ingreds
    ingreds.append(ingred);


    // creating an object for save
    const ingredObj = {
        "name": "",
        "value": 0,
    };

    ingredList.push(ingredObj);

    // adding the events >> ingredName
    ingredName.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(`You entered the value: ${value}`);
        ingredObj.name = value;
        saveIngred();
    });


    // adding the events >> ingredQuant 
    ingredQuant.addEventListener("input", (e) => {
        const quantity = e.target.value;
        console.log(`the quantity is: ${quantity}`);
        ingredObj.value = Number.parseInt(quantity);
        saveIngred();
    });
};

// functions
function saveIngred() {
    localStorage.setItem("ingredients", JSON.stringify(ingredList));
};

function loadIngred() {
    const savedData = JSON.parse(localStorage.getItem("ingredients")) || [];
    ingredList = [];
    ingreds.innerHTML = "";
    savedData.forEach(item => {
        console.log(`component: ${item.name}, quantity: ${item.value}`);
        addIngredField(item.name, item.value)
    });

    /*
    function loadIngred() {
    const saved = JSON.parse(localStorage.getItem("ingredients")) || [];
    ingredList = []; // reset
    ingreds.innerHTML = ""; // clear UI
    saved.forEach(item => {
        console.log(`component: ${item.name}, quantity: ${item.value}`);
        addIngredField(item.name, item.value);
    });
}
    */
};

// events
createBtn.addEventListener("click", addIngredField);
window.addEventListener("DOMContentLoaded", loadIngred);
// logic
