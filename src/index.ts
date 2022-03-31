
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

const items = document.querySelectorAll(".file-bar ul li:not(.plus) a");
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((item) => {
            item.parentElement.classList.remove("active");
        });
        underline(item.parentElement);
    });
});

const returnListId = () => {
    var liste = [];

    document.querySelectorAll(".nav-links li.forward").forEach((item) => {
        liste.push(item.id);
    });

    return liste;
}


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

const croix = document.querySelectorAll(".croix");
croix.forEach((croix) => {
    croix.addEventListener("click", () => {
        delFic(croix.parentElement.id);
    });
});

// const filesInBar: { [id: string]: string } = {
//     "fic1":
//         "<li class=\"forward active\" id=\"fic1\">\n" +
//         "    <i class='bx bx-code '></i>\n" +
//         "    <a href=\"#\">index.html</a>\n" +
//         "    <i class='bx bx-x croix'></i>\n" +
//         "</li>",
//     "fic2":
//         "<li class=\"forward active\" id=\"fic2\">\n" +
//         "    <i class='bx bx-code '></i>\n" +
//         "    <a href=\"#\">style.scss</a>\n" +
//         "    <i class='bx bx-x croix'></i>\n" +
//         "</li>",
//     "fic3":
//         "<li class=\"forward active\" id=\"fic3\">\n" +
//         "    <i class='bx bx-code '></i>\n" +
//         "    <a href=\"#\">main.ts</a>\n" +
//         "    <i class='bx bx-x croix'></i>\n" +
//         "</li>"
// };
//
// const addFic = (elementId: string) => {
//     const elem = document.getElementById(elementId);
//     const lastId = "#fic" + (+elementId.slice(3) - 1);
//
//     if (elem.classList.contains("active")) {
//         document.querySelector(lastId).classList.add("active");
//     }
//     elem.parentNode.appendChild(elem);
// }



// const boutonAjout = document.querySelector(".plus");
// boutonAjout.addEventListener("click", () => {
//     const filesInBarWebsite = document.querySelectorAll(".nav-links .forward");
//
//     for (let i = 0; i < Object.keys(filesInBar).length; i++) {
//         // console.log(filesInBarWebsite[i]);
//         // if (filesInBarWebsite[i].id != "fic" + (i + 1)) {
//         //     console.log(filesInBarWebsite[i].innerHTML);
//         //     // filesInBarWebsite[i].innerHTML = filesInBar[filesInBarWebsite["fic" + i]];
//         // } else {
//         //     console.log("aaazaezaz");
//         // }
//         console.log(filesInBarWebsite[i]);
//         if (filesInBarWebsite[i] === undefined) {
//             console.log(filesInBar["fic" + (i + 1)]);
//             // filesInBarWebsite[i].innerHTML = filesInBar[filesInBarWebsite["fic" + i]];
//         } else {
//             console.log(returnLastId(filesInBarWebsite));
//         }
//     }
//
// })

























