let = nameCheck = localStorage.getItem('nameCheck');

function changeTitle(name) {
    var changeTitleNamePersonagem = name;  
    var newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem('titlePersonagem', newTitlePersonagem);
}

function setInputValues() {

    // COMBAT PAGE
    localStorage.setItem("charName" + nameCheck, document.getElementById("title").innerText);
    localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerText);
    localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerText);
    localStorage.setItem("editableArea5" + nameCheck, document.getElementById("editableArea5").innerText);
    localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerText);
};

window.onload = function getInputValues() {

    // COMBAT PAGE
    document.getElementById("title").innerText = localStorage.getItem("charName" + nameCheck);
    document.getElementById("editableArea3").innerText = localStorage.getItem("editableArea3" + nameCheck);
    document.getElementById("editableArea4").innerText = localStorage.getItem("editableArea4" + nameCheck);
    document.getElementById("editableArea5").innerText = localStorage.getItem("editableArea5" + nameCheck);
    document.getElementById("editableArea6").innerText = localStorage.getItem("editableArea6" + nameCheck);
};

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

editBtn1.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "block";
    imgBtn1.style.display = "none";
    editBtn1.style.display = "none";
    xBtn1.style.display = "block";
});

xBtn1.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "";
    imgBtn1.style.display = "block";
    editBtn1.style.display = "block";
    xBtn1.style.display = "none";
});

editBtn2.addEventListener('click', ()=> {
    document.getElementById("passiveAb").style.display = "block";
    imgBtn2.style.display = "none";
    editBtn2.style.display = "none";
    xBtn2.style.display = "block";
});

xBtn2.addEventListener('click', ()=> {
    document.getElementById("passiveAb").style.display = "";
    imgBtn2.style.display = "block";
    editBtn2.style.display = "block";
    xBtn2.style.display = "none";
});

editBtn3.addEventListener('click', ()=> {
    document.getElementById("weaponsDiv").style.display = "block";
    imgBtn3.style.display = "none";
    editBtn3.style.display = "none";
    xBtn3.style.display = "block";
});

xBtn3.addEventListener('click', ()=> {
    document.getElementById("weaponsDiv").style.display = "";
    imgBtn3.style.display = "block";
    editBtn3.style.display = "block";
    xBtn3.style.display = "none";
});

editBtn4.addEventListener('click', ()=> {
    document.getElementById("spellsDiv").style.display = "block";
    imgBtn4.style.display = "none";
    editBtn4.style.display = "none";
    xBtn4.style.display = "block";
});

xBtn4.addEventListener('click', ()=> {
    document.getElementById("spellsDiv").style.display = "";
    imgBtn4.style.display = "block";
    editBtn4.style.display = "block";
    xBtn4.style.display = "none";
});