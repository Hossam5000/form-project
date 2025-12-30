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

const errMsg = overlay.querySelector('.errorMsg');

// >> Local Storage
let ingredientsData = [];



// Functions
function openModal() {
    overlay.style.display = "block";
};

function closeModal() {
    overlay.style.display = "none";
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

        // save to the local storage again
        localStorage.setItem("ingredients", JSON.stringify(ingredientsData));

        // clean the UI fields
        modalNameField.value = "";
        modalQuantField.value = 0;
        modalUnitField.value = "";
    }
    // display the error message
    else {
        errMsg.style.display = "block";
    }

}

// Events
addBtn.addEventListener("click", openModal);
addIngredBtn.addEventListener("click", addIngred)
closeModalBtn.addEventListener("click", closeModal);
crossModalBtn.addEventListener("click", closeModal);


console.log("test");