
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

let navBar = document.querySelector(".menu")


closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    navBar.classList.toggle("open");
    menuBtnChange(); 
});



function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); 
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); 
    }

    if (navBar.classList.contains("open")) {
        navBar.classList.replace("open", "close"); 
    } else {
        navBar.classList.replace("close", "open"); 
    }
}

const underline = (element: Element) => {
    element.classList.add("active");
}

const items = document.querySelectorAll(".file-bar ul li");
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.classList.remove("active");
        });
        console.log("appui");
        underline(item);
    });
});
