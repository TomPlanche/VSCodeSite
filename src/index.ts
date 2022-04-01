
// Sidebar element
let sidebar = document.querySelector(".sidebar");

// Close button element
let closeBtn = document.querySelector("#btn");


// Add an event on click to close button
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); 
});


/**
 * Function to toggle the menu button position.
 */
const menuBtnChange = () => {
    closeBtn.classList.replace(
        sidebar.classList.contains("open") ? "bx-menu" : "bx-menu-alt-right",
        sidebar.classList.contains("open") ? "bx-menu-alt-right" : "bx-menu"
    );
};

/**
 * Add the "active" class to an element.
 * @param element element to which to add the 'active' class.
 */
const underline = (element: Element) => {
    element.classList.add("active");
}

const items = document.querySelectorAll(".file-bar ul li:not(.plus) a");
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.parentElement.classList.remove("active");
        });
        underline(item.parentElement);
    });
});

/**
 * Return the list of the li.forward ids.
 */
const returnListId = () => {
    let liste = [];

    document.querySelectorAll(".nav-links li.forward").forEach((item) => {
        liste.push(item.id);
    });

    return liste;
}


/**
 * Delete a file from the file-bar.
 * @param elementId
 */
const delFic = (elementId: string) => {
    const elem = document.getElementById(elementId);
    const liste = returnListId();


    if (elem.classList.contains("active")) {
        if (liste.length > 1) {
            if (elementId == liste[0]) {
                elem.classList.remove("active");
                document.getElementById(liste[1]).classList.add("active");
            } else if (elementId == liste[liste.length - 1]) {
                elem.classList.remove("active");
                document.getElementById(liste[liste.length - 2]).classList.add("active");
            } else {
                elem.classList.remove("active");
                document.getElementById(liste[liste.indexOf(elementId) - 1]).classList.add("active");
            }
        }
    }

    elem.parentNode.removeChild(elem);
}

/**
 * Add a 'click' listener to the crosses in order to delete the file.
 */
const croix = document.querySelectorAll(".croix");
croix.forEach((croix) => {
    croix.addEventListener("click", () => {
        delFic(croix.parentElement.id);
    });
});

const filesInBar: { [id: string]: string } = {
    "fic1":
        "<li class=\"forward active\" id=\"fic1\">\n" +
        "    <i class='bx bx-code '></i>\n" +
        "    <a href=\"#\">index.html</a>\n" +
        "    <i class='bx bx-x croix'></i>\n" +
        "</li>",
    "fic2":
        "<li class=\"forward active\" id=\"fic2\">\n" +
        "    <i class='bx bx-code '></i>\n" +
        "    <a href=\"#\">style.scss</a>\n" +
        "    <i class='bx bx-x croix'></i>\n" +
        "</li>",
    "fic3":
        "<li class=\"forward active\" id=\"fic3\">\n" +
        "    <i class='bx bx-code '></i>\n" +
        "    <a href=\"#\">main.ts</a>\n" +
        "    <i class='bx bx-x croix'></i>\n" +
        "</li>"
};






























