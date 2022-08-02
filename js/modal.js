const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".contacts__button");
const modalClose = document.querySelector(".modal__close");

modalButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("show-modal");
})

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("show-modal");
})

