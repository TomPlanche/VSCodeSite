
// Sidebar element
let sidebar = document.querySelector(".sidebar");

// Close button element
let closeBtn = document.querySelector("#btn");


// Add an event on click to close button
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); 
});

const items = document.querySelectorAll(".forward a");
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.parentElement.classList.remove("active");
        });
        underline(item.parentElement);
    });
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
    document.querySelectorAll(".forward").forEach(e => e.classList.remove("active"));
    element.classList.add("active");
}

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
let croix = document.querySelectorAll(".croix");
croix.forEach((croix) => {
    croix.addEventListener("click", () => {
        delFic(croix.parentElement.id);
    });
});

const filesInBar: { [id: string]: string } = {
    "fic1":
        "<li class=\"forward\" id=\"fic1\">\n" +
        "    <i class='bx bx-code '></i>\n" +
        "    <a>index.html</a>\n" +
        "    <i class='bx bx-x croix'></i>\n" +
        "</li>",
    "fic2":
        "<li class='forward' id='fic2'>\n" +
        "    <i class='bx bx-code '></i>\n" +
        "    <a>style.scss</a>\n" +
        "    <i class='bx bx-x croix'></i>\n" +
        "</li>",
    "fic3":
        "<li class='forward' id='fic3'>\n" +
        "    <i class='bx bxl-javascript '></i>\n" +
        "    <a>main.ts</a>" +
        "    <i class='bx bx-x croix'></i>" +
        "</li>"
};


const addFile = () => {
    const lenListe = returnListId().length;

    if (0 < lenListe && lenListe < 3) {
        const liste = returnListId();

        for (let i = 1; i < lenListe + 1; i++) {
            if (liste[i - 1] > `fic${i}`) {
                document.querySelector(`#${liste[i - 1]}`).insertAdjacentHTML("beforebegin", filesInBar[`fic${i}`]);
                underline(document.querySelector(`#fic${i}`));
                break;
            } else if (i === lenListe) {
                console.log(liste[i - 1], `fic${i}`);
                document.querySelector(`#${liste[i - 1]}`).insertAdjacentHTML("afterend", filesInBar[`fic${i + 1}`]);
                underline(document.querySelector(`#fic${i + 1}`));
                break;
            }
        }
    } else {
        if (lenListe === 0) {
            document.querySelector(".nav-links").insertAdjacentHTML("afterbegin", filesInBar["fic1"]);
            underline(document.querySelector("#fic1"));
        }
    }
    /**
     * Add a 'click' listener to the crosses in order to delete the file.
     */
    let croix = document.querySelectorAll(".croix");
    croix.forEach((croix) => {
        croix.addEventListener("click", () => {
            delFic(croix.parentElement.id);
        });
    });

    const items = document.querySelectorAll(".forward a");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((item) => {
                item.parentElement.classList.remove("active");
            });
            underline(item.parentElement);
        });
    });
}


const bouton_plus = document.querySelector(".plus");
bouton_plus.addEventListener("click", () => {
    addFile();
});




console.log("Zemmour le sang")























