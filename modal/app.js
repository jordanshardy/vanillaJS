// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
const modal = document.querySelector(".modal-overlay");
const modalBtn = document
    .querySelector(".modal-btn")
    // when user clicks modal-btn add .open-modal to modal-overlay
    .addEventListener("click", () => {
        console.log("modalOverlay:", modal.classList);
        modal.classList.add("open-modal");
    });
const closeBtn = document
    .querySelector(".close-btn")
    // when user clicks close-btn remove .open-modal from modal-overlay
    .addEventListener("click", () => {
        modal.classList.remove("open-modal");
    });