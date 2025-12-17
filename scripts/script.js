// cons & vars
const container = document.querySelector(".container");
const createBtn = document.querySelector(".createBtn");

console.log(createBtn)

// functions
function print() {
    console.log(this.getAttribute("class"));
    const ingredField = this.parentElement.querySelector(".ingred");
    const clonedField = ingredField.cloneNode(true);
    clonedField.querySelector(".ingredName").value = "";
    clonedField.querySelector(".ingredQuant").value = "";
    ingredField.parentElement.append(clonedField)
    console.log(ingredField, clonedField);
};

// events
createBtn.addEventListener("click", print);
// logic
