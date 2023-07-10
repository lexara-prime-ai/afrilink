// SELECTORS
const subTitle = document.querySelector('.sub-title');

// TOGGLE SIDE NAVIGATION
function openSideMenu() {
    document.getElementById('side-menu').style.width = '250px';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';

    document.getElementById('main').style.marginLeft = '0';
}

// ADD STYLES TO HEADER ON SCROLL
const header = document.querySelector('header');
window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        header.classList.add("header-scrolled");
        header.classList.remove("header-default");
    } 
    else { 
        header.classList.add("header-default");
        header.classList.remove("header-scrolled");
    }
};

// TEXT ANIMATION
const subTitleText = "Helping you make the right move";
let index = 0;
let typingSpeed = 100;

function TYPE() {
    if (index < subTitleText.length) {
        subTitle.innerHTML += subTitleText.charAt(index);
        index++;

        setTimeout(TYPE, typingSpeed);
    }
}
