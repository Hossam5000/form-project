// cons & vars
const container = document.querySelector(".container");
const ingreds = document.querySelector(".ingreds");
const createBtn = document.querySelector(".createBtn");

console.log(createBtn)

// functions
function addIngredField() {
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

    // creating the quantity input field
    const ingredQuant = document.createElement("input");
    ingredQuant.type = "number";
    ingredQuant.min = "0";
    ingredQuant.step = "0.01";

    ingredQuant.classList.add("ingredQuant");
    ingredQuant.placeholder = "enter quantity";


    //appending to the ingred
    ingred.append(ingredName, ingredQuant);

    // appending to the ingreds
    ingreds.append(ingred);

    // adding the events >> ingredName

    ingredName.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(`You entered the value: ${value}`);
        localStorage.setItem("ingredName", value)
    });

    // adding the events >> ingredQuant
    ingredQuant.addEventListener("input", (e) => {
        const value = e.target.value;
        console.log(`the quantity is: ${value}`);
        localStorage.setItem("quantity", value);
    });
};

// events
createBtn.addEventListener("click", addIngredField);
// logic
