var li_items = document.querySelectorAll(".sidebar");
var wrapper = document.querySelector(".wrapper");
var content = document.querySelector(".content");

var estDeroule = false;

li_items.forEach(function(li_item) {
    li_item.addEventListener

li_items.forEach((li_item) => {
    li_item.addEventListener("click", () => {
        li_item.closest(".wrapper").classList.toggle("hover_collapse");
        content.style.left = "15vh";
    })
})

