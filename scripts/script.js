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



// Functions
function openModal() {
    overlay.style.display = "block";
};

function closeModal() {
    overlay.style.display = "none";
};

function addIngred() {
    const ingred = {
        "name": modalNameField.value.trim(),
        "quantity": modalQuantField.value.trim(),
        "unit": modalUnitField.value.trim(),
    };


    ingredientsData.push(ingred)
    localStorage.setItem("ingredients", JSON.stringify(ingredientsData));
    modalNameField.value = "";
    modalQuantField.value = 0;
    modalUnitField.value = "";
}

// Events
addBtn.addEventListener("click", openModal);
addIngredBtn.addEventListener("click", addIngred)
closeModalBtn.addEventListener("click", closeModal);
crossModalBtn.addEventListener("click", closeModal);


console.log("test");