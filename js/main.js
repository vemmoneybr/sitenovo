const loanAmountSlider = document.querySelector("#loan-amount-slider");
const loanAmountField = document.querySelector("#loan-amount-field");
const loanAmountTxt = document.querySelector("#loan-amount-txt");
const chat = document.querySelector(".chat");
const headerNavbar = document.querySelector(".header-navbar");
const dropdownItems = document.querySelectorAll(".header-navbar .dropdown");
const headerSubnavbars = document.querySelectorAll(".header-subnavbar");

function showHeaderNavbar() {
    headerNavbar.classList.toggle("show-header-navbar");
}

function showHeaderSubnavbar(id) {
    switch (id) {
        case 0:
            headerSubnavbars[0].classList.toggle("show-header-subnavbar");
            headerSubnavbars[1].classList.remove("show-header-subnavbar");
            headerSubnavbars[2].classList.remove("show-header-subnavbar");
            break;
    
        case 1:
            headerSubnavbars[0].classList.remove("show-header-subnavbar");
            headerSubnavbars[1].classList.toggle("show-header-subnavbar");
            headerSubnavbars[2].classList.remove("show-header-subnavbar");
            break;

        case 2:
            headerSubnavbars[0].classList.remove("show-header-subnavbar");
            headerSubnavbars[1].classList.remove("show-header-subnavbar");
            headerSubnavbars[2].classList.toggle("show-header-subnavbar");
            break;
    }
}

function showChat() {
    chat.classList.toggle("show-chat");
}

function changeLoanAmountValue(e) {
    loanAmountTxt.innerHTML = e.value;
    loanAmountSlider.value = e.value;
    loanAmountField.value = e.value;
}
