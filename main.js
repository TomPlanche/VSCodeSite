// var li_items = document.querySelectorAll(".sidebar");
// var wrapper = document.querySelector(".wrapper");
// var content = document.querySelector(".content");

// var estDeroule = false;

// li_items.forEach(function(li_item) {
//     li_item.addEventListener

// li_items.forEach((li_item) => {
//     li_item.addEventListener("click", () => {
//         li_item.closest(".wrapper").classList.toggle("hover_collapse");
//         content.style.left = "15vh";
//     })
// })


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

const items = document.querySelectorAll("#menu ul li");
items.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector("li.active").classList.remove("active");
        item.classList.add("active");
    });
});
