window.onload = function() {
    let menu = document.querySelector("#menu-mobile");
    let menuMobList = document.querySelector("#menu nav ul");

    menu.addEventListener("click", e => {
        if (menuMobList.style.display == "flex") {
            menuMobList.style.display = "none";
        } else {
            menuMobList.style.display = "flex";
        }
    });
}