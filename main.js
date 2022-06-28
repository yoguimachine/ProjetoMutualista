//Menu hamburguer

const hambBtn = document.querySelector(".hamb-menu");

const menuItems = document.querySelector(".menu-items");

const menuItem = document.querySelectorAll(".menu-item");

const last10 = document.querySelector(".las10Btn");

hambBtn.addEventListener("click", () => {
    toggle();
});

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        if(hambBtn.classList.contains("open")) {
            toggle();
        }
    });
});

/*
last10.addEventListener("click", () => {
    toggle();
});
*/

function toggle(){
    hambBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
    //last10.classList.toggle("open");
}

//Formulario

/*
document.getElementById("user-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getInput("name");
    var division = getInput("division");
    var age = getInput("age");
    var male = getInput("male");
    var female = getInput("female");
}

function getInput(id){
    return document.getElementById(id).value;
}
*/