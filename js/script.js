const body = document.querySelector("body"),
sidebarToggle = body.querySelector(".sidebar-toggle"),
sidebar = body.querySelector(".sidebar");


sidebarToggle.addEventListener("click" ,() => {
sidebar.classList.toggle("close");
})
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);