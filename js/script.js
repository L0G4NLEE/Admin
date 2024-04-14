const body = document.querySelector("body"),
sidebarToggle = body.querySelector(".sidebar-toggle"),
sidebar = body.querySelector(".sidebar");


sidebarToggle.addEventListener("click" ,() => {
sidebar.classList.toggle("close");
})