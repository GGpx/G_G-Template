// Fonction pour afficher le menu quand on scroll
window.onscroll = function () {
    scroll();
    decoration();
};

function scroll() {
    if (document.documentElement.scrollTop > 820) {
        // POUR LE MENU HEADER
        document.getElementById('header_menu').className = "header";

        // POUR LE TITRE DU HEADER
        document.getElementById('titre_header').style.color = "rgb(22, 22, 22)";

    } else {
        // POUR LE MENU HEADER
        document.getElementById('titre_header').style.color = "";

        // POUR LE TITRE DU HEADER
        document.getElementById('header_menu').className = "";

    }
}

// FONCTION POUR LA DéCORATION DES ONGLET DE LA NAVIGATION 

function decoration() {

    // POUR LES LIENS SUR LE HEADER / ABOUT ME

    if (document.documentElement.scrollTop > 820) {

        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {

            // POUR LA COULEURS DE LA NAVIGATION
            tab[i].style.color = "rgb(22, 22, 22)";

            // POUR LA DéCORATION UNDERLINE
            tab[1].style.textDecoration = "underline"
        }

    } else {
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[i].style.color = "white";
            tab[1].style.textDecoration = "none"
        }
    }


    // POUR LES LIENS SUR LE HEADER / SERVICES

    if (document.documentElement.scrollTop > 1600) {
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[1].style.textDecoration = "none"
            tab[2].style.textDecoration = "underline"
        }
    } else {
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[2].style.textDecoration = "none"
        }
    }


    // POUR LES LIENS SUR LE HEADER / PORTFOLIO
    if (document.documentElement.scrollTop > 2850) {

        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[2].style.textDecoration = "none"
            tab[3].style.textDecoration = "underline"
        }

    } else {
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[3].style.textDecoration = "none"
        }
    }


    // POUR LES LIENS SUR LE HEADER / TESTIMONIALS
    if (document.documentElement.scrollTop > 4350) {


        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[3].style.textDecoration = "none"
            tab[4].style.textDecoration = "underline"
        }
    } else {

        // POUR LES LIENS SUR LE HEADER
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[4].style.textDecoration = "none"
        }
    }

    // POUR LES LIENS SUR LE HEADER / OUR BLOG
    if (document.documentElement.scrollTop > 6150) {


        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[4].style.textDecoration = "none"
            tab[5].style.textDecoration = "underline"
        }
    } else {

        // POUR LES LIENS SUR LE HEADER
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[5].style.textDecoration = "none"
        }
    }

    // POUR LES LIENS SUR LE HEADER / CONTACT
    if (document.documentElement.scrollTop > 7600) {


        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[5].style.textDecoration = "none"
            tab[6].style.textDecoration = "underline"
        }
    } else {

        // POUR LES LIENS SUR LE HEADER
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[6].style.textDecoration = "none"
        }
    }
}


// FONCTION POUR LE MENU BURGER

function menu() {
    var monmenu = document.getElementById('nav_burger');
    if (monmenu.style.visibility == "initial") {
        monmenu.style.visibility = "hidden";
    } else {
        monmenu.style.visibility = "initial";
    }
}