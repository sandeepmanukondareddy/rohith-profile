// Get tablinks & tabcontents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// on opentab function call
function openTab(tabname) {
    for (item of tabLinks) {
        item.classList.remove("active-link");
    }
    for (item of tabContents) {
        item.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Get sideMenu
var sideMenu = document.getElementById("sidemenu");

//on openMenu function call 
function openMenu() {
    sideMenu.style.right = "0";
}

//on closeMenu function call 
function closeMenu() {
    sideMenu.style.right = "-200px";
}