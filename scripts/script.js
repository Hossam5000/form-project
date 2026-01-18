// imports
import { overlay, modalNameField, modalQuantField, modalUnitField, errMsg, closeModal, openModal } from "./overlay.js"

// cons & vars
const addBtn = document.querySelector(".addBtn");
const addIngredBtn = document.querySelector(".addIngredBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const crossModalBtn = document.querySelector(".crossModalBtn");

// >> Local Storage
let ingredientsData = [];

// >> container
const container = document.querySelector(".container");
const ingreds = container.querySelector(".ingreds");
const clearBtn = container.querySelector(".clearBtn");


// messages
const emptyMsg = container.querySelector(".emptyMsg");
console.log(emptyMsg);



// Functions
function checkCurrentIngreds() {
    if (!ingreds.innerHTML) { }
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

function removeAllIngreds() {
    ingreds.innerHTML = "";
    ingredientsData = [];
    localStorage.removeItem("ingredients");
};

// Events
clearBtn.addEventListener("click", removeAllIngreds);
window.addEventListener("DOMContentLoaded", RenderIngreds);
window.addEventListener("DOMContentLoaded", checkCurrentIngreds);

addBtn.addEventListener("click", openModal);
addIngredBtn.addEventListener("click", addIngred)
closeModalBtn.addEventListener("click", closeModal);
crossModalBtn.addEventListener("click", closeModal);

console.log("test");