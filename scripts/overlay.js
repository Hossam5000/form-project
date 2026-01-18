// cons & vars
export const overlay = document.querySelector(".overlay");

export const modalNameField = overlay.querySelector('.modalNameField');
export const modalQuantField = overlay.querySelector('.modalQuantField');
export const modalUnitField = overlay.querySelector('.modalUnitField');

// == messages
export const errMsg = overlay.querySelector('.errorMsg');

// functions
export function openModal() {
    overlay.style.display = "flex";
};

export function closeModal() {
    overlay.style.display = "none";
    modalNameField.value = "";
    modalQuantField.value = "";
    modalUnitField.value = "";
    errMsg.style.display = "none";
};

