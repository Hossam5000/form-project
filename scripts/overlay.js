// cons & vars
// >> overlay
const overlay = document.querySelector(".overlay");

const addBtn = document.querySelector(".addBtn");
const addIngredBtn = document.querySelector(".addIngredBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const crossModalBtn = document.querySelector(".crossModalBtn");

export const modalNameField = overlay.querySelector('.modalNameField');
export const modalQuantField = overlay.querySelector('.modalQuantField');
export const modalUnitField = overlay.querySelector('.modalUnitField');

// messages
export const errMsg = overlay.querySelector('.errorMsg');

// functions
export function openModal() {
    overlay.style.display = "block";
};

export function closeModal() {
    overlay.style.display = "none";
    modalNameField.value = "";
    modalQuantField.value = "";
    modalUnitField.value = "";
    errMsg.style.display = "none";
};

export function addIngred() {
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


// events
addBtn.addEventListener("click", openModal);
addIngredBtn.addEventListener("click", addIngred)
closeModalBtn.addEventListener("click", closeModal);
crossModalBtn.addEventListener("click", closeModal);
