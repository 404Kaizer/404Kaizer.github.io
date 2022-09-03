// Predefining HTML elements
let nameCheck = localStorage.getItem("nameCheck");
let headerTitle = document.getElementById("headerTitle");

let hamburguerMenu = document.getElementById("hamburguerMenu");
let xHamburguerMenu = document.getElementById("xHamburguerMenu");
let saveLoadDelBtns = document.getElementById("saveLoadDelBtns");

let perInfoBtn = document.getElementById("perInfoBtn");
let perInfoBtnFake = document.getElementById("perInfoBtnFake");
let infoInput = document.getElementById("infoInput");

let xBtn1 = document.getElementById("xBtn1");
let imgBtn1 = document.getElementById("imgBtn1");
let editBtn1 = document.getElementById("editBtn1");
let xBtn2 = document.getElementById("xBtn2");
let imgBtn2 = document.getElementById("imgBtn2");
let editBtn2 = document.getElementById("editBtn2");
let xBtn3 = document.getElementById("xBtn3");
let imgBtn3 = document.getElementById("imgBtn3");
let editBtn3 = document.getElementById("editBtn3");
let xBtn4 = document.getElementById("xBtn4");
let imgBtn4 = document.getElementById("imgBtn4");
let editBtn4 = document.getElementById("editBtn4");

let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");

let navBtnDiv1 = document.getElementById("navBtnDiv1");
let navBtnDiv2 = document.getElementById("navBtnDiv2");
let navBtnDiv3 = document.getElementById("navBtnDiv3");
let navBtnDiv4 = document.getElementById("navBtnDiv4");
let navBtnDiv5 = document.getElementById("navBtnDiv5");

let navImgBtn1 = document.getElementById("navImgBtn1");
let navImgBtn2 = document.getElementById("navImgBtn2");
let navImgBtn3 = document.getElementById("navImgBtn3");
let navImgBtn4 = document.getElementById("navImgBtn4");
let navImgBtn5 = document.getElementById("navImgBtn5");

let lifeBar = document.getElementById("lifeBar");
let sanityBar = document.getElementById("sanityBar");
let energyBar = document.getElementById("energyBar");

document.execCommand("styleWithCSS", false, true);

window.onbeforeunload = () => {
    return "";
}