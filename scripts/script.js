// cons & vars
// >> overlay
const overlay = document.querySelector(".overlay");

const addBtn = document.querySelector(".addBtn");
const addIngredBtn = document.querySelector(".addIngredBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const crossModalBtn = document.querySelector(".crossModalBtn");

const modalNameField = overlay.querySelector('.modalNameField');
const modalQuantField = overlay.querySelector('.modalQuantField');
const modalUnitField = overlay.querySelector('.modalUnitField');


// >> Local Storage
let ingredientsData = [];

// >> container
const container = document.querySelector(".container");
const ingreds = container.querySelector(".ingreds");
const clearBtn = container.querySelector(".clearBtn");


// messages
const errMsg = overlay.querySelector('.errorMsg');
const emptyMsg = container.querySelector(".emptyMsg");
console.log(emptyMsg);



// Functions
function checkCurrentIngreds() {
    if (!ingreds.innerHTML) { }
};

function openModal() {
    overlay.style.display = "block";
};

function closeModal() {
    overlay.style.display = "none";
    modalNameField.value = "";
    modalQuantField.value = "";
    modalUnitField.value = "";
    errMsg.style.display = "none";
};

function RenderIngreds() {
    // clean the current ingreds container
    ingreds.innerHTML = "";

    /*
            <div class="ingred">
                    <span class="ingredUnit">Unit</span>
                    <span class="ingredQuant">Quantity</span>
                    <span class="ingredName">Name</span>
                </div>
    */

    const saveData = JSON.parse(localStorage.getItem("ingredients")) || [];

    saveData.forEach(ingredItem => {


        // create the ingred field
        const ingred = document.createElement("div");
        ingred.classList.add("ingred");

        // create the ingred contents
        // >> unit
        const ingredUnit = document.createElement("span");
        ingredUnit.classList.add("ingredUnit");
        ingredUnit.textContent = ingredItem.unit;

        // >> quantity
        const ingredQuant = document.createElement("span");
        ingredQuant.classList.add("ingredQuant");
        ingredQuant.textContent = ingredItem.quantity;


        // >> name
        const ingredName = document.createElement("span");
        ingredName.classList.add("ingredName");
        ingredName.textContent = ingredItem.name;


        // appending elements
        ingred.append(ingredUnit, ingredQuant, ingredName);
        ingreds.append(ingred);
    });
};

function addIngred() {
    // storing the input fields' value after trimming
    const name = modalNameField.value.trim();
    const quantity = modalQuantField.value.trim();
    const unit = modalUnitField.value.trim();

    if (name && quantity && unit) {

        // create an object to save the data
        const ingred = {
            "name": name,
            "quantity": quantity,
            "unit": unit,
        };

        // retrieve the current local storage data
        ingredientsData = JSON.parse(localStorage.getItem("ingredients")) || [];

        // add the object to the array
        ingredientsData.push(ingred);
        console.log("test");

        // save to the local storage again
        localStorage.setItem("ingredients", JSON.stringify(ingredientsData));

        // add the ingreds
        RenderIngreds();


        // clean the UI fields
        modalNameField.value = "";
        modalQuantField.value = "";
        modalUnitField.value = "";
        errMsg.style.display = "none";
        overlay.style.display = "none";
    }
    // display the error message
    else {
        errMsg.style.display = "block";
    }

};

function removeAllIngreds() {
    ingreds.innerHTML = "";
    ingredientsData = [];
    localStorage.removeItem("ingredients");
};

// Events
addBtn.addEventListener("click", openModal);
addIngredBtn.addEventListener("click", addIngred)
closeModalBtn.addEventListener("click", closeModal);
crossModalBtn.addEventListener("click", closeModal);
clearBtn.addEventListener("click", removeAllIngreds);
window.addEventListener("DOMContentLoaded", RenderIngreds);
window.addEventListener("DOMContentLoaded", checkCurrentIngreds);

console.log("test");