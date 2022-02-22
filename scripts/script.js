let nameCheck = localStorage.getItem("nameCheck");

nameCheck = prompt("Digite o Nome do Personagem Que Deseja Jogar: ");
if (nameCheck == "") {
    while (nameCheck == "") {
        alert("Nenhuma Ficha Selecionada. Digite o Nome da Sua Ficha Para Continuar ou Clique em Cancelar.");
        nameCheck = prompt("Digite o Nome do Personagem Que Deseja Jogar: ");
    }
    
} else if (nameCheck != localStorage.getItem("charName" + nameCheck)) {
    alert("Esta Ficha Ainda Não Existe. Salve Apenas se Tiver Certeza!");
}
nameCheck = localStorage.setItem("nameCheck", nameCheck);

window.onload = function getInputValues() {

    nameCheck = localStorage.getItem("nameCheck");

    // INDEX
    document.getElementById("title").innerText = localStorage.getItem("charName" + nameCheck);
    document.getElementById("charImg").src = localStorage.getItem("charImg" + nameCheck);
    document.getElementById("charName").value = localStorage.getItem("charName" + nameCheck);
    document.getElementById("charExp").value = localStorage.getItem("charExp" + nameCheck);
    document.getElementById("charRaceSex").value = localStorage.getItem("charRaceSex" + nameCheck);
    document.getElementById("charExpert").value = localStorage.getItem("charExpert" + nameCheck);
    document.getElementById("charAge").value = localStorage.getItem("charAge" + nameCheck);
    document.getElementById("charAlignment").value = localStorage.getItem("charAlignment" + nameCheck);
    document.getElementById("charStature").value = localStorage.getItem("charStature" + nameCheck);
    document.getElementById("charLangs").value = localStorage.getItem("charLangs" + nameCheck);
    document.getElementById("backgroundArea").value = localStorage.getItem("backgroundArea" + nameCheck);
    document.getElementById("textArea1").value = localStorage.getItem("textArea1" + nameCheck);
    document.getElementById("textArea2").value = localStorage.getItem("textArea2" + nameCheck);
    document.getElementById("textArea3").value = localStorage.getItem("textArea3" + nameCheck);
    document.getElementById("textArea4").value = localStorage.getItem("textArea4" + nameCheck);

    // COMBAT
    document.getElementById("editableArea3").innerHTML = localStorage.getItem("editableArea3" + nameCheck);
    document.getElementById("editableArea4").innerHTML = localStorage.getItem("editableArea4" + nameCheck);
    document.getElementById("editableArea5").innerHTML = localStorage.getItem("editableArea5" + nameCheck);
    document.getElementById("editableArea6").innerHTML = localStorage.getItem("editableArea6" + nameCheck);

    // INVENTORY
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("editableArea1").innerHTML = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").innerHTML = localStorage.getItem("editableArea2" + nameCheck);

    // NOTES
    document.getElementById("editableArea").innerHTML = localStorage.getItem("editableArea" + nameCheck);
};

function setInputValues() {

    // INDEX
    localStorage.setItem("charName" + nameCheck, document.getElementById("title").innerText);
    localStorage.setItem("charImg" + nameCheck, document.getElementById("charImg").src);
    localStorage.setItem("charName" + nameCheck, document.getElementById("charName").value);
    localStorage.setItem("charExp" + nameCheck, document.getElementById("charExp").value);
    localStorage.setItem("charRaceSex" + nameCheck, document.getElementById("charRaceSex").value);
    localStorage.setItem("charExpert" + nameCheck, document.getElementById("charExpert").value);
    localStorage.setItem("charAge" + nameCheck, document.getElementById("charAge").value);
    localStorage.setItem("charAlignment" + nameCheck, document.getElementById("charAlignment").value);
    localStorage.setItem("charStature" + nameCheck, document.getElementById("charStature").value);
    localStorage.setItem("charLangs" + nameCheck, document.getElementById("charLangs").value);
    localStorage.setItem("backgroundArea" + nameCheck, document.getElementById("backgroundArea").value);
    localStorage.setItem("textArea1" + nameCheck, document.getElementById("textArea1").value);
    localStorage.setItem("textArea2" + nameCheck, document.getElementById("textArea2").value);
    localStorage.setItem("textArea3" + nameCheck, document.getElementById("textArea3").value);
    localStorage.setItem("textArea4" + nameCheck, document.getElementById("textArea4").value);

    // COMBAT
    localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerHTML);
    localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerHTML);
    localStorage.setItem("editableArea5" + nameCheck, document.getElementById("editableArea5").innerHTML);
    localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerHTML);

    // INVENTORY
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerHTML);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerHTML);

    // NOTES
    localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerHTML);
};

function changeTitle(name) {
    var changeTitleNamePersonagem = name;  
    var newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem('titlePersonagem', newTitlePersonagem);
}

document.getElementById("imgSelectBtn").addEventListener("change", e => {
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        document.getElementById("charImg").src = reader.result;
        upload.value = "";
    }
    reader.readAsDataURL(file);
});

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
/*let section3 = document.getElementById("section3");*/
let section4 = document.getElementById("section4");
let section5 = document.getElementById("section5");
let section6 = document.getElementById("section6");

document.execCommand('styleWithCSS', false, true);

function indexPage() {
    section1.style.display = "block";
    section2.style.display = "block";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
};

function skillsPage() {
    alert("Área Ainda Não Disponível!");
    /*section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "block";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";*/
};

function combatPage() {
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "grid";
    section5.style.display = "none";
    section6.style.display = "none";
};

function inventoryPage() {
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "grid";
    section6.style.display = "none";
};

function notesPage() {
    section1.style.display = "none";
    section2.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "block";
};

perInfoBtn.addEventListener("click", ()=> {
    infoInput.style.display = "grid";
    perInfoBtn.style.display = "none";
    perInfoBtnFake.style.display = "block"
});

perInfoBtnFake.addEventListener("click", ()=> {
    infoInput.style.display = "none";
    perInfoBtn.style.display = "block";
    perInfoBtnFake.style.display = "none"
});

editBtn1.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "block";
    editBtn1.style.display = "none";
    xBtn1.style.display = "block";
});

xBtn1.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "";
    editBtn1.style.display = "block";
    xBtn1.style.display = "none";
});

editBtn2.addEventListener('click', ()=> {
    document.getElementById("passiveAb").style.display = "block";
    editBtn2.style.display = "none";
    xBtn2.style.display = "block";
});

xBtn2.addEventListener('click', ()=> {
    document.getElementById("passiveAb").style.display = "";
    editBtn2.style.display = "block";
    xBtn2.style.display = "none";
});

editBtn3.addEventListener('click', ()=> {
    document.getElementById("weaponsDiv").style.display = "block";
    editBtn3.style.display = "none";
    xBtn3.style.display = "block";
});

xBtn3.addEventListener('click', ()=> {
    document.getElementById("weaponsDiv").style.display = "";
    editBtn3.style.display = "block";
    xBtn3.style.display = "none";
});

editBtn4.addEventListener('click', ()=> {
    document.getElementById("spellsDiv").style.display = "block";
    editBtn4.style.display = "none";
    xBtn4.style.display = "block";
});

xBtn4.addEventListener('click', ()=> {
    document.getElementById("spellsDiv").style.display = "";
    editBtn4.style.display = "block";
    xBtn4.style.display = "none";
});

function changeSize1() {
    var mySize1 = document.getElementById("fontSize1").value;
    document.execCommand('fontSize', false, mySize1);
}

function changeSize2() {
    var mySize2 = document.getElementById("fontSize2").value;
    document.execCommand('fontSize', false, mySize2);
}

function changeSize3() {
    var mySize3 = document.getElementById("fontSize3").value;
    document.execCommand('fontSize', false, mySize3);
}

function changeSize4() {
    var mySize4 = document.getElementById("fontSize4").value;
    document.execCommand('fontSize', false, mySize4);
}

function changeSize5() {
    var mySize5 = document.getElementById("fontSize5").value;
    document.execCommand('fontSize', false, mySize5);
}

function changeSize6() {
    var mySize6 = document.getElementById("fontSize6").value;
    document.execCommand('fontSize', false, mySize6);
}

function changeSize7() {
    var mySize7 = document.getElementById("fontSize7").value;
    document.execCommand('fontSize', false, mySize7);
}

function chooseColor1(){
    var myColor1 = document.getElementById("myColor1").value;
    document.execCommand('foreColor', false, myColor1);
    var bgColor = document.getElementById('myColor1');
    bgColor.style.backgroundColor = myColor1;
}

function chooseColor2(){
    var myColor2 = document.getElementById("myColor2").value;
    document.execCommand('foreColor', false, myColor2);
    var bgColor = document.getElementById('myColor2');
    bgColor.style.backgroundColor = myColor2;
}

function chooseColor3(){
    var myColor3 = document.getElementById("myColor3").value;
    document.execCommand('foreColor', false, myColor3);
    var bgColor = document.getElementById('myColor3');
    bgColor.style.backgroundColor = myColor3;
}

function chooseColor4(){
    var myColor4 = document.getElementById("myColor4").value;
    document.execCommand('foreColor', false, myColor4);
    var bgColor = document.getElementById('myColor4');
    bgColor.style.backgroundColor = myColor4;
}

function chooseColor5(){
    var myColor5 = document.getElementById("myColor5").value;
    document.execCommand('foreColor', false, myColor5);
    var bgColor = document.getElementById('myColor5');
    bgColor.style.backgroundColor = myColor5;
}

function chooseColor6(){
    var myColor6 = document.getElementById("myColor6").value;
    document.execCommand('foreColor', false, myColor6);
    var bgColor = document.getElementById('myColor6');
    bgColor.style.backgroundColor = myColor6;
}

function chooseColor7(){
    var myColor7 = document.getElementById("myColor7").value;
    document.execCommand('foreColor', false, myColor7);
    var bgColor = document.getElementById('myColor7');
    bgColor.style.backgroundColor = myColor7;
}