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

let openProfModalDiv2 = document.getElementById("openProfModalDiv2");
let openProfModalDiv1 = document.getElementById("openProfModalDiv1");
let closeProfModalDiv2 = document.getElementById("closeProfModalDiv2");
let closeProfModalDiv1 = document.getElementById("closeProfModalDiv1");
let profModalDiv1 = document.getElementById("profModalDiv1");
let profModalDiv2 = document.getElementById("profModalDiv2");

if (nameCheck == null || nameCheck == " " || nameCheck == undefined) {
    chooseSheet()
}

const charStatus = {
    life: {
      current: 0,
      max: 0,
    },

    sanity: {
      current: 0,
      max: 0,
    },

    energy: {
      current: 0,
      max: 0,
    }
}   

function calculateBar(current, max) {
    if (current > max) {
        return 100;
    } else if (current < 0) {
        return 0;
    } else {
        const value = (100 / max) * current;
        const string = value.toString().split('.')[0];
        const percentage = Number(string);
        return percentage;
    }
}

energyBar.addEventListener("click", ()=> {
    let current = Number(prompt("ENERGIA ATUAL:"));
    let max = Number(prompt("ENERGIA M??XIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    energyBar.style.width = `${calculateBar(current, max)}%`;
    energyBar.innerText = `${current} / ${max}`;
});

lifeBar.addEventListener("click", ()=> {
    let current = Number(prompt("VIDA ATUAL:"));
    let max = Number(prompt("VIDA M??XIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    lifeBar.style.width = `${calculateBar(current, max)}%`;
    lifeBar.innerText = `${current} / ${max}`;
});

sanityBar.addEventListener("click", ()=> {
    let current = Number(prompt("SANIDADE ATUAL:"));
    let max = Number(prompt("SANIDADE M??XIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    sanityBar.style.width = `${calculateBar(current, max)}%`;
    sanityBar.innerText = `${current} / ${max}`;
});

document.execCommand("styleWithCSS", false, true);

function chooseSheet() {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Carregar ou Criar: ");
    if (nameCheck == " ") {
        while (nameCheck == " ") {
            alert("Nenhum Personagem Selecionado. Digite o Nome do Personagem Para Continuar ou Clique em Cancelar.");
            nameCheck = prompt("Digite ao Nome do Personagem Que Deseja Carregar: ");
        }
    } else if (nameCheck != localStorage.getItem("charName" + nameCheck)) {
        alert("Este Personagem Ainda N??o Existe. Salve Apenas se Quiser Cri??-lo.");
    }
    nameCheck = localStorage.setItem("nameCheck", nameCheck);
    location.reload();
};

function deleteSheet() {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Deletar ou Digite *** Para Deletar TODAS as Fichas: ");

    if (nameCheck == "***") {
        confirm("Voc?? Quer Apagar TODAS as Fichas Salvas Neste Navegador?");
        localStorage.clear();
        confirm("Todas as Fichas Foram Deletadas!");
        location.reload();
    } else if (nameCheck == localStorage.getItem("charName" + nameCheck)) {
        // INDEX
        localStorage.removeItem("nameCheck");
        localStorage.removeItem("titlePersonagem");
        localStorage.removeItem("charImg" + nameCheck);
        localStorage.removeItem("charName" + nameCheck);
        localStorage.removeItem("charExp" + nameCheck);
        localStorage.removeItem("charRaceSex" + nameCheck);
        localStorage.removeItem("charExpert" + nameCheck);
        localStorage.removeItem("charAge" + nameCheck);
        localStorage.removeItem("charAlignment" + nameCheck);
        localStorage.removeItem("charStature" + nameCheck);
        localStorage.removeItem("charLangs" + nameCheck);
        localStorage.removeItem("backgroundArea" + nameCheck);
        localStorage.removeItem("textArea1" + nameCheck);
        localStorage.removeItem("textArea2" + nameCheck);
        localStorage.removeItem("textArea3" + nameCheck);
        localStorage.removeItem("textArea4" + nameCheck);

        // ATRIBUTES & PLAYER STATUS
        localStorage.removeItem("lifeBar" + nameCheck);
        localStorage.removeItem("sanityBar" + nameCheck);
        localStorage.removeItem("energyBar" + nameCheck);
        localStorage.removeItem("exhaustSelect" + nameCheck);
        localStorage.removeItem("woundedCheck" + nameCheck);
        localStorage.removeItem("dyeingCheck" + nameCheck);
        localStorage.removeItem("fail1" + nameCheck);
        localStorage.removeItem("fail2" + nameCheck);
        localStorage.removeItem("fail3" + nameCheck);
        localStorage.removeItem("terrorizedCheck" + nameCheck);
        localStorage.removeItem("traumatizedCheck" + nameCheck);
        localStorage.removeItem("insaneCheck" + nameCheck);
        localStorage.removeItem("trainedSkillBonus" + nameCheck);
        localStorage.removeItem("nTrainedSkillBonus" + nameCheck);
        localStorage.removeItem("defense" + nameCheck);
        localStorage.removeItem("block" + nameCheck);
        localStorage.removeItem("dodge" + nameCheck);
        localStorage.removeItem("armorWeight" + nameCheck);
        localStorage.removeItem("physicalRDMG" + nameCheck);
        localStorage.removeItem("balisticalRDMG" + nameCheck);
        localStorage.removeItem("magialRDMG" + nameCheck);
        localStorage.removeItem("velocity" + nameCheck);
        localStorage.removeItem("textArea5" + nameCheck);
        localStorage.removeItem("strInput" + nameCheck);
        localStorage.removeItem("strModInput" + nameCheck);
        localStorage.removeItem("agiInput" + nameCheck);
        localStorage.removeItem("agiModInput" + nameCheck);
        localStorage.removeItem("conInput" + nameCheck);
        localStorage.removeItem("conModInput" + nameCheck);
        localStorage.removeItem("intInput" + nameCheck);
        localStorage.removeItem("intModInput" + nameCheck);
        localStorage.removeItem("wisInput" + nameCheck);
        localStorage.removeItem("wisModInput" + nameCheck);
        localStorage.removeItem("chaInput" + nameCheck);
        localStorage.removeItem("chaModInput" + nameCheck);
        localStorage.removeItem("skillCheck1" + nameCheck);
        localStorage.removeItem("skillCheck2" + nameCheck);
        localStorage.removeItem("skillCheck3" + nameCheck);
        localStorage.removeItem("skillCheck4" + nameCheck);
        localStorage.removeItem("skillCheck5" + nameCheck);
        localStorage.removeItem("skillCheck6" + nameCheck);
        localStorage.removeItem("skillCheck7" + nameCheck);
        localStorage.removeItem("skillCheck8" + nameCheck);
        localStorage.removeItem("skillCheck9" + nameCheck);
        localStorage.removeItem("skillCheck10" + nameCheck);
        localStorage.removeItem("skillCheck11" + nameCheck);
        localStorage.removeItem("skillCheck12" + nameCheck);
        localStorage.removeItem("skillCheck13" + nameCheck);
        localStorage.removeItem("skillCheck14" + nameCheck);
        localStorage.removeItem("skillCheck15" + nameCheck);
        localStorage.removeItem("skillCheck16" + nameCheck);
        localStorage.removeItem("skillCheck17" + nameCheck);
        localStorage.removeItem("skillCheck19" + nameCheck);
        localStorage.removeItem("skillCheck20" + nameCheck);
        localStorage.removeItem("skillCheck21" + nameCheck);
        localStorage.removeItem("skillCheck22" + nameCheck);
        localStorage.removeItem("skillCheck23" + nameCheck);
        localStorage.removeItem("skill0" + nameCheck);
        localStorage.removeItem("skill1" + nameCheck);
        localStorage.removeItem("skill2" + nameCheck);
        localStorage.removeItem("skill3" + nameCheck);
        localStorage.removeItem("skill4" + nameCheck);
        localStorage.removeItem("skill5" + nameCheck);
        localStorage.removeItem("skill6" + nameCheck);
        localStorage.removeItem("skill7" + nameCheck);
        localStorage.removeItem("skill8" + nameCheck);
        localStorage.removeItem("skill9" + nameCheck);
        localStorage.removeItem("skill10" + nameCheck);
        localStorage.removeItem("skill11" + nameCheck);
        localStorage.removeItem("skill12" + nameCheck);
        localStorage.removeItem("skill13" + nameCheck);
        localStorage.removeItem("skill14" + nameCheck);
        localStorage.removeItem("skill15" + nameCheck);
        localStorage.removeItem("skill16" + nameCheck);
        localStorage.removeItem("skill17" + nameCheck);
        localStorage.removeItem("skill19" + nameCheck);
        localStorage.removeItem("skill20" + nameCheck);
        localStorage.removeItem("skill21" + nameCheck);
        localStorage.removeItem("skill22" + nameCheck);
        localStorage.removeItem("skill23" + nameCheck);
        localStorage.removeItem("meleeType1" + nameCheck);
        localStorage.removeItem("meleeType2" + nameCheck);
        localStorage.removeItem("meleeType3" + nameCheck);
        localStorage.removeItem("rangedType1" + nameCheck);
        localStorage.removeItem("rangedType2" + nameCheck);
        localStorage.removeItem("rangedType3" + nameCheck);

        // COMBAT
        localStorage.removeItem("editableArea3" + nameCheck);
        localStorage.removeItem("editableArea4" + nameCheck);
        localStorage.removeItem("editableArea5" + nameCheck);
        localStorage.removeItem("editableArea6" + nameCheck);
        localStorage.removeItem("editableArea7" + nameCheck);
        localStorage.removeItem("editableArea8" + nameCheck);
        localStorage.removeItem("editableArea9" + nameCheck);
        localStorage.removeItem("editableArea10" + nameCheck);
        localStorage.removeItem("editableArea11" + nameCheck);
        localStorage.removeItem("editableArea12" + nameCheck);

        // INVENTORY
        localStorage.removeItem("coin1" + nameCheck);
        localStorage.removeItem("coin2" + nameCheck);
        localStorage.removeItem("coin3" + nameCheck);
        localStorage.removeItem("editableArea1" + nameCheck);
        localStorage.removeItem("editableArea2" + nameCheck);

        // NOTES
        localStorage.removeItem("editableArea" + nameCheck);

        window.alert("Ficha DELETADA com Sucesso: " + nameCheck.toUpperCase());

        location.reload();
    } else {
        while (nameCheck != localStorage.getItem("charName" + nameCheck)) {
            alert("Nenhum Personagem Selecionado ou N??o Existe. Digite o Nome do Personagem Para Continuar ou Clique em Cancelar.");
            nameCheck = prompt("Digite o Nome do Personagem Que Deseja Deletar ou Digite *** Para Deletar TODAS as Fichas: ");
        }
    }
}

window.onload = function getInputValues() {
    nameCheck = localStorage.getItem("nameCheck");

    if (nameCheck == null || nameCheck == " ") {
        headerTitle.innerText = "Eroda";
    } else {
        headerTitle.innerText = nameCheck;
    }

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

    // ATRIBUTES & PLAYER STATUS
    document.getElementById("lifeBar").innerText = localStorage.getItem("lifeBar" + nameCheck);
    document.getElementById("sanityBar").innerText = localStorage.getItem("sanityBar" + nameCheck);
    document.getElementById("energyBar").innerText = localStorage.getItem("energyBar" + nameCheck);
    document.getElementById("exhaustSelect").value = localStorage.getItem("exhaustSelect" + nameCheck);
    document.getElementById("woundedCheck").checked = JSON.parse(localStorage.getItem("woundedCheck" + nameCheck));
    document.getElementById("dyeingCheck").checked = JSON.parse(localStorage.getItem("dyeingCheck" + nameCheck));
    document.getElementById("fail1").checked = JSON.parse(localStorage.getItem("fail1" + nameCheck));
    document.getElementById("fail2").checked = JSON.parse(localStorage.getItem("fail2" + nameCheck));
    document.getElementById("fail3").checked = JSON.parse(localStorage.getItem("fail3" + nameCheck));
    document.getElementById("terrorizedCheck").checked = JSON.parse(localStorage.getItem("terrorizedCheck" + nameCheck));
    document.getElementById("traumatizedCheck").checked = JSON.parse(localStorage.getItem("traumatizedCheck" + nameCheck));
    document.getElementById("insaneCheck").checked = JSON.parse(localStorage.getItem("insaneCheck" + nameCheck));
    document.getElementById("trainedSkillBonus").value = localStorage.getItem("trainedSkillBonus" + nameCheck);
    document.getElementById("nTrainedSkillBonus").value = localStorage.getItem("nTrainedSkillBonus" + nameCheck);
    document.getElementById("defense").value = localStorage.getItem("defense" + nameCheck);
    document.getElementById("block").value = localStorage.getItem("block" + nameCheck);
    document.getElementById("dodge").value = localStorage.getItem("dodge" + nameCheck);
    document.getElementById("armorWeight").value = localStorage.getItem("armorWeight" + nameCheck);
    document.getElementById("physicalRDMG").value = localStorage.getItem("physicalRDMG" + nameCheck);
    document.getElementById("balisticalRDMG").value = localStorage.getItem("balisticalRDMG" + nameCheck);
    document.getElementById("magialRDMG").value = localStorage.getItem("magialRDMG" + nameCheck);
    document.getElementById("velocity").value = localStorage.getItem("velocity" + nameCheck);
    document.getElementById("textArea5").value = localStorage.getItem("textArea5" + nameCheck);
    document.getElementById("strInput").value = localStorage.getItem("strInput" + nameCheck);
    document.getElementById("strModInput").value = localStorage.getItem("strModInput" + nameCheck);
    document.getElementById("agiInput").value = localStorage.getItem("agiInput" + nameCheck);
    document.getElementById("agiModInput").value = localStorage.getItem("agiModInput" + nameCheck);
    document.getElementById("conInput").value = localStorage.getItem("conInput" + nameCheck);
    document.getElementById("conModInput").value = localStorage.getItem("conModInput" + nameCheck);
    document.getElementById("intInput").value = localStorage.getItem("intInput" + nameCheck);
    document.getElementById("intModInput").value = localStorage.getItem("intModInput" + nameCheck);
    document.getElementById("wisInput").value = localStorage.getItem("wisInput" + nameCheck);
    document.getElementById("wisModInput").value = localStorage.getItem("wisModInput" + nameCheck);
    document.getElementById("chaInput").value = localStorage.getItem("chaInput" + nameCheck);
    document.getElementById("chaModInput").value = localStorage.getItem("chaModInput" + nameCheck);
    document.getElementById("skillCheck1").checked = JSON.parse(localStorage.getItem("skillCheck1" + nameCheck));
    document.getElementById("skillCheck2").checked = JSON.parse(localStorage.getItem("skillCheck2" + nameCheck));
    document.getElementById("skillCheck3").checked = JSON.parse(localStorage.getItem("skillCheck3" + nameCheck));
    document.getElementById("skillCheck4").checked = JSON.parse(localStorage.getItem("skillCheck4" + nameCheck));
    document.getElementById("skillCheck5").checked = JSON.parse(localStorage.getItem("skillCheck5" + nameCheck));
    document.getElementById("skillCheck6").checked = JSON.parse(localStorage.getItem("skillCheck6" + nameCheck));
    document.getElementById("skillCheck7").checked = JSON.parse(localStorage.getItem("skillCheck7" + nameCheck));
    document.getElementById("skillCheck8").checked = JSON.parse(localStorage.getItem("skillCheck8" + nameCheck));
    document.getElementById("skillCheck9").checked = JSON.parse(localStorage.getItem("skillCheck9" + nameCheck));
    document.getElementById("skillCheck10").checked = JSON.parse(localStorage.getItem("skillCheck10" + nameCheck));
    document.getElementById("skillCheck11").checked = JSON.parse(localStorage.getItem("skillCheck11" + nameCheck));
    document.getElementById("skillCheck12").checked = JSON.parse(localStorage.getItem("skillCheck12" + nameCheck));
    document.getElementById("skillCheck13").checked = JSON.parse(localStorage.getItem("skillCheck13" + nameCheck));
    document.getElementById("skillCheck14").checked = JSON.parse(localStorage.getItem("skillCheck14" + nameCheck));
    document.getElementById("skillCheck15").checked = JSON.parse(localStorage.getItem("skillCheck15" + nameCheck));
    document.getElementById("skillCheck16").checked = JSON.parse(localStorage.getItem("skillCheck16" + nameCheck));
    document.getElementById("skillCheck17").checked = JSON.parse(localStorage.getItem("skillCheck17" + nameCheck));
    document.getElementById("skillCheck19").checked = JSON.parse(localStorage.getItem("skillCheck19" + nameCheck));
    document.getElementById("skillCheck20").checked = JSON.parse(localStorage.getItem("skillCheck20" + nameCheck));
    document.getElementById("skillCheck21").checked = JSON.parse(localStorage.getItem("skillCheck21" + nameCheck));
    document.getElementById("skillCheck22").checked = JSON.parse(localStorage.getItem("skillCheck22" + nameCheck));
    document.getElementById("skillCheck23").checked = JSON.parse(localStorage.getItem("skillCheck23" + nameCheck));
    document.getElementById("skill0").value = localStorage.getItem("skill0" + nameCheck);
    document.getElementById("skill1").value = localStorage.getItem("skill1" + nameCheck);
    document.getElementById("skill2").value = localStorage.getItem("skill2" + nameCheck);
    document.getElementById("skill3").value = localStorage.getItem("skill3" + nameCheck);
    document.getElementById("skill4").value = localStorage.getItem("skill4" + nameCheck);
    document.getElementById("skill5").value = localStorage.getItem("skill5" + nameCheck);
    document.getElementById("skill6").value = localStorage.getItem("skill6" + nameCheck);
    document.getElementById("skill7").value = localStorage.getItem("skill7" + nameCheck);
    document.getElementById("skill8").value = localStorage.getItem("skill8" + nameCheck);
    document.getElementById("skill9").value = localStorage.getItem("skill9" + nameCheck);
    document.getElementById("skill10").value = localStorage.getItem("skill10" + nameCheck);
    document.getElementById("skill11").value = localStorage.getItem("skill11" + nameCheck);
    document.getElementById("skill12").value = localStorage.getItem("skill12" + nameCheck);
    document.getElementById("skill13").value = localStorage.getItem("skill13" + nameCheck);
    document.getElementById("skill14").value = localStorage.getItem("skill14" + nameCheck);
    document.getElementById("skill15").value = localStorage.getItem("skill15" + nameCheck);
    document.getElementById("skill16").value = localStorage.getItem("skill16" + nameCheck);
    document.getElementById("skill17").value = localStorage.getItem("skill17" + nameCheck);
    document.getElementById("skill19").value = localStorage.getItem("skill19" + nameCheck);
    document.getElementById("skill20").value = localStorage.getItem("skill20" + nameCheck);
    document.getElementById("skill21").value = localStorage.getItem("skill21" + nameCheck);
    document.getElementById("skill22").value = localStorage.getItem("skill22" + nameCheck);
    document.getElementById("skill23").value = localStorage.getItem("skill23" + nameCheck);
    document.getElementById("meleeType1").checked = JSON.parse(localStorage.getItem("meleeType1" + nameCheck));
    document.getElementById("meleeType2").checked = JSON.parse(localStorage.getItem("meleeType2" + nameCheck));
    document.getElementById("meleeType3").checked = JSON.parse(localStorage.getItem("meleeType3" + nameCheck));
    document.getElementById("rangedType1").checked = JSON.parse(localStorage.getItem("rangedType1" + nameCheck));
    document.getElementById("rangedType2").checked = JSON.parse(localStorage.getItem("rangedType2" + nameCheck));
    document.getElementById("rangedType3").checked = JSON.parse(localStorage.getItem("rangedType3" + nameCheck));

    // COMBAT
    document.getElementById("editableArea3").innerHTML = localStorage.getItem("editableArea3" + nameCheck);
    document.getElementById("editableArea4").innerHTML = localStorage.getItem("editableArea4" + nameCheck);
    document.getElementById("editableArea5").innerHTML = localStorage.getItem("editableArea5" + nameCheck);
    document.getElementById("editableArea6").innerHTML = localStorage.getItem("editableArea6" + nameCheck);
    document.getElementById("editableArea7").innerHTML = localStorage.getItem("editableArea7" + nameCheck);
    document.getElementById("editableArea8").innerHTML = localStorage.getItem("editableArea8" + nameCheck);
    document.getElementById("editableArea9").innerHTML = localStorage.getItem("editableArea9" + nameCheck);
    document.getElementById("editableArea10").innerHTML = localStorage.getItem("editableArea10" + nameCheck);
    document.getElementById("editableArea11").innerHTML = localStorage.getItem("editableArea11" + nameCheck);
    document.getElementById("editableArea12").innerHTML = localStorage.getItem("editableArea12" + nameCheck);

    // INVENTORY
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("coin3").value = localStorage.getItem("coin3" + nameCheck);
    document.getElementById("editableArea1").innerHTML = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").innerHTML = localStorage.getItem("editableArea2" + nameCheck);

    // NOTES
    document.getElementById("editableArea").innerHTML = localStorage.getItem("editableArea" + nameCheck);
};

function sheetIdChange() {
    nameCheck = localStorage.getItem("nameCheck");

    // DELETAR INDEX
    localStorage.removeItem("nameCheck");
    localStorage.removeItem("titlePersonagem");
    localStorage.removeItem("charImg" + nameCheck);
    localStorage.removeItem("charName" + nameCheck);
    localStorage.removeItem("charExp" + nameCheck);
    localStorage.removeItem("charRaceSex" + nameCheck);
    localStorage.removeItem("charExpert" + nameCheck);
    localStorage.removeItem("charAge" + nameCheck);
    localStorage.removeItem("charAlignment" + nameCheck);
    localStorage.removeItem("charStature" + nameCheck);
    localStorage.removeItem("charLangs" + nameCheck);
    localStorage.removeItem("backgroundArea" + nameCheck);
    localStorage.removeItem("textArea1" + nameCheck);
    localStorage.removeItem("textArea2" + nameCheck);
    localStorage.removeItem("textArea3" + nameCheck);
    localStorage.removeItem("textArea4" + nameCheck);

    // DELETAR ATRIBUTES & PLAYER STATUS
    localStorage.removeItem("lifeBar" + nameCheck);
    localStorage.removeItem("sanityBar" + nameCheck);
    localStorage.removeItem("energyBar" + nameCheck);
    localStorage.removeItem("exhaustSelect" + nameCheck);
    localStorage.removeItem("woundedCheck" + nameCheck);
    localStorage.removeItem("dyeingCheck" + nameCheck);
    localStorage.removeItem("fail1" + nameCheck);
    localStorage.removeItem("fail2" + nameCheck);
    localStorage.removeItem("fail3" + nameCheck);
    localStorage.removeItem("terrorizedCheck" + nameCheck);
    localStorage.removeItem("traumatizedCheck" + nameCheck);
    localStorage.removeItem("insaneCheck" + nameCheck);
    localStorage.removeItem("trainedSkillBonus" + nameCheck);
    localStorage.removeItem("nTrainedSkillBonus" + nameCheck);
    localStorage.removeItem("defense" + nameCheck);
    localStorage.removeItem("block" + nameCheck);
    localStorage.removeItem("dodge" + nameCheck);
    localStorage.removeItem("armorWeight" + nameCheck);
    localStorage.removeItem("physicalRDMG" + nameCheck);
    localStorage.removeItem("balisticalRDMG" + nameCheck);
    localStorage.removeItem("magialRDMG" + nameCheck);
    localStorage.removeItem("velocity" + nameCheck);
    localStorage.removeItem("textArea5" + nameCheck);
    localStorage.removeItem("strInput" + nameCheck);
    localStorage.removeItem("strModInput" + nameCheck);
    localStorage.removeItem("agiInput" + nameCheck);
    localStorage.removeItem("agiModInput" + nameCheck);
    localStorage.removeItem("conInput" + nameCheck);
    localStorage.removeItem("conModInput" + nameCheck);
    localStorage.removeItem("intInput" + nameCheck);
    localStorage.removeItem("intModInput" + nameCheck);
    localStorage.removeItem("wisInput" + nameCheck);
    localStorage.removeItem("wisModInput" + nameCheck);
    localStorage.removeItem("chaInput" + nameCheck);
    localStorage.removeItem("chaModInput" + nameCheck);
    localStorage.removeItem("skillCheck1" + nameCheck);
    localStorage.removeItem("skillCheck2" + nameCheck);
    localStorage.removeItem("skillCheck3" + nameCheck);
    localStorage.removeItem("skillCheck4" + nameCheck);
    localStorage.removeItem("skillCheck5" + nameCheck);
    localStorage.removeItem("skillCheck6" + nameCheck);
    localStorage.removeItem("skillCheck7" + nameCheck);
    localStorage.removeItem("skillCheck8" + nameCheck);
    localStorage.removeItem("skillCheck9" + nameCheck);
    localStorage.removeItem("skillCheck10" + nameCheck);
    localStorage.removeItem("skillCheck11" + nameCheck);
    localStorage.removeItem("skillCheck12" + nameCheck);
    localStorage.removeItem("skillCheck13" + nameCheck);
    localStorage.removeItem("skillCheck14" + nameCheck);
    localStorage.removeItem("skillCheck15" + nameCheck);
    localStorage.removeItem("skillCheck16" + nameCheck);
    localStorage.removeItem("skillCheck17" + nameCheck);
    localStorage.removeItem("skillCheck19" + nameCheck);
    localStorage.removeItem("skillCheck20" + nameCheck);
    localStorage.removeItem("skillCheck21" + nameCheck);
    localStorage.removeItem("skillCheck22" + nameCheck);
    localStorage.removeItem("skillCheck23" + nameCheck);
    localStorage.removeItem("skill0" + nameCheck);
    localStorage.removeItem("skill1" + nameCheck);
    localStorage.removeItem("skill2" + nameCheck);
    localStorage.removeItem("skill3" + nameCheck);
    localStorage.removeItem("skill4" + nameCheck);
    localStorage.removeItem("skill5" + nameCheck);
    localStorage.removeItem("skill6" + nameCheck);
    localStorage.removeItem("skill7" + nameCheck);
    localStorage.removeItem("skill8" + nameCheck);
    localStorage.removeItem("skill9" + nameCheck);
    localStorage.removeItem("skill10" + nameCheck);
    localStorage.removeItem("skill11" + nameCheck);
    localStorage.removeItem("skill12" + nameCheck);
    localStorage.removeItem("skill13" + nameCheck);
    localStorage.removeItem("skill14" + nameCheck);
    localStorage.removeItem("skill15" + nameCheck);
    localStorage.removeItem("skill16" + nameCheck);
    localStorage.removeItem("skill17" + nameCheck);
    localStorage.removeItem("skill19" + nameCheck);
    localStorage.removeItem("skill20" + nameCheck);
    localStorage.removeItem("skill21" + nameCheck);
    localStorage.removeItem("skill22" + nameCheck);
    localStorage.removeItem("skill23" + nameCheck);
    localStorage.removeItem("meleeType1" + nameCheck);
    localStorage.removeItem("meleeType2" + nameCheck);
    localStorage.removeItem("meleeType3" + nameCheck);
    localStorage.removeItem("rangedType1" + nameCheck);
    localStorage.removeItem("rangedType2" + nameCheck);
    localStorage.removeItem("rangedType3" + nameCheck);

    // DELETAR COMBAT
    localStorage.removeItem("editableArea3" + nameCheck);
    localStorage.removeItem("editableArea4" + nameCheck);
    localStorage.removeItem("editableArea5" + nameCheck);
    localStorage.removeItem("editableArea6" + nameCheck);
    localStorage.removeItem("editableArea7" + nameCheck);
    localStorage.removeItem("editableArea8" + nameCheck);
    localStorage.removeItem("editableArea9" + nameCheck);
    localStorage.removeItem("editableArea10" + nameCheck);
    localStorage.removeItem("editableArea11" + nameCheck);
    localStorage.removeItem("editableArea12" + nameCheck);

    // DELETAR INVENTORY
    localStorage.removeItem("coin1" + nameCheck);
    localStorage.removeItem("coin2" + nameCheck);
    localStorage.removeItem("coin3" + nameCheck);
    localStorage.removeItem("editableArea1" + nameCheck);
    localStorage.removeItem("editableArea2" + nameCheck);

    // DELETAR NOTES
    localStorage.removeItem("editableArea" + nameCheck);

    newName = document.getElementById("charName").value;
    nameCheck = newName;

    // SALVAR INDEX
    localStorage.setItem("nameCheck", nameCheck);
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

    // SALVAR ATRIBUTES & PLAYER STATUS
    localStorage.setItem("lifeBar" + nameCheck, document.getElementById("lifeBar").innerText);
    localStorage.setItem("sanityBar" + nameCheck, document.getElementById("sanityBar").innerText);
    localStorage.setItem("energyBar" + nameCheck, document.getElementById("energyBar").innerText);
    localStorage.setItem("exhaustSelect" + nameCheck, document.getElementById("exhaustSelect").value);
    localStorage.setItem("woundedCheck" + nameCheck, document.getElementById("woundedCheck").checked);
    localStorage.setItem("dyeingCheck" + nameCheck, document.getElementById("dyeingCheck").checked);
    localStorage.setItem("fail1" + nameCheck, document.getElementById("fail1").checked);
    localStorage.setItem("fail2" + nameCheck, document.getElementById("fail2").checked);
    localStorage.setItem("fail3" + nameCheck, document.getElementById("fail3").checked);
    localStorage.setItem("terrorizedCheck" + nameCheck, document.getElementById("terrorizedCheck").checked);
    localStorage.setItem("traumatizedCheck" + nameCheck, document.getElementById("traumatizedCheck").checked);
    localStorage.setItem("insaneCheck" + nameCheck, document.getElementById("insaneCheck").checked);
    localStorage.setItem("trainedSkillBonus" + nameCheck, document.getElementById("trainedSkillBonus").value);
    localStorage.setItem("nTrainedSkillBonus" + nameCheck, document.getElementById("nTrainedSkillBonus").value);
    localStorage.setItem("defense" + nameCheck, document.getElementById("defense").value);
    localStorage.setItem("block" + nameCheck, document.getElementById("block").value);
    localStorage.setItem("dodge" + nameCheck, document.getElementById("dodge").value);
    localStorage.setItem("armorWeight" + nameCheck, document.getElementById("armorWeight").value);
    localStorage.setItem("physicalRDMG" + nameCheck, document.getElementById("physicalRDMG").value);
    localStorage.setItem("balisticalRDMG" + nameCheck, document.getElementById("balisticalRDMG").value);
    localStorage.setItem("magialRDMG" + nameCheck, document.getElementById("magialRDMG").value);
    localStorage.setItem("velocity" + nameCheck, document.getElementById("velocity").value);
    localStorage.setItem("textArea5" + nameCheck, document.getElementById("textArea5").value);
    localStorage.setItem("strInput" + nameCheck, document.getElementById("strInput").value);
    localStorage.setItem("strModInput" + nameCheck, document.getElementById("strModInput").value);
    localStorage.setItem("agiInput" + nameCheck, document.getElementById("agiInput").value);
    localStorage.setItem("agiModInput" + nameCheck, document.getElementById("agiModInput").value);
    localStorage.setItem("conInput" + nameCheck, document.getElementById("conInput").value);
    localStorage.setItem("conModInput" + nameCheck, document.getElementById("conModInput").value);
    localStorage.setItem("intInput" + nameCheck, document.getElementById("intInput").value);
    localStorage.setItem("intModInput" + nameCheck, document.getElementById("intModInput").value);
    localStorage.setItem("wisInput" + nameCheck, document.getElementById("wisInput").value);
    localStorage.setItem("wisModInput" + nameCheck, document.getElementById("wisModInput").value);
    localStorage.setItem("chaInput" + nameCheck, document.getElementById("chaInput").value);
    localStorage.setItem("chaModInput" + nameCheck, document.getElementById("chaModInput").value);
    localStorage.setItem("skillCheck1" + nameCheck, document.getElementById("skillCheck1").checked);
    localStorage.setItem("skillCheck2" + nameCheck, document.getElementById("skillCheck2").checked);
    localStorage.setItem("skillCheck3" + nameCheck, document.getElementById("skillCheck3").checked);
    localStorage.setItem("skillCheck4" + nameCheck, document.getElementById("skillCheck4").checked);
    localStorage.setItem("skillCheck5" + nameCheck, document.getElementById("skillCheck5").checked);
    localStorage.setItem("skillCheck6" + nameCheck, document.getElementById("skillCheck6").checked);
    localStorage.setItem("skillCheck7" + nameCheck, document.getElementById("skillCheck7").checked);
    localStorage.setItem("skillCheck8" + nameCheck, document.getElementById("skillCheck8").checked);
    localStorage.setItem("skillCheck9" + nameCheck, document.getElementById("skillCheck9").checked);
    localStorage.setItem("skillCheck10" + nameCheck, document.getElementById("skillCheck10").checked);
    localStorage.setItem("skillCheck11" + nameCheck, document.getElementById("skillCheck11").checked);
    localStorage.setItem("skillCheck12" + nameCheck, document.getElementById("skillCheck12").checked);
    localStorage.setItem("skillCheck13" + nameCheck, document.getElementById("skillCheck13").checked);
    localStorage.setItem("skillCheck14" + nameCheck, document.getElementById("skillCheck14").checked);
    localStorage.setItem("skillCheck15" + nameCheck, document.getElementById("skillCheck15").checked);
    localStorage.setItem("skillCheck16" + nameCheck, document.getElementById("skillCheck16").checked);
    localStorage.setItem("skillCheck17" + nameCheck, document.getElementById("skillCheck17").checked);
    localStorage.setItem("skillCheck19" + nameCheck, document.getElementById("skillCheck19").checked);
    localStorage.setItem("skillCheck20" + nameCheck, document.getElementById("skillCheck20").checked);
    localStorage.setItem("skillCheck21" + nameCheck, document.getElementById("skillCheck21").checked);
    localStorage.setItem("skillCheck22" + nameCheck, document.getElementById("skillCheck22").checked);
    localStorage.setItem("skillCheck23" + nameCheck, document.getElementById("skillCheck23").checked);
    localStorage.setItem("skill0" + nameCheck, document.getElementById("skill0").value);
    localStorage.setItem("skill1" + nameCheck, document.getElementById("skill1").value);
    localStorage.setItem("skill2" + nameCheck, document.getElementById("skill2").value);
    localStorage.setItem("skill3" + nameCheck, document.getElementById("skill3").value);
    localStorage.setItem("skill4" + nameCheck, document.getElementById("skill4").value);
    localStorage.setItem("skill5" + nameCheck, document.getElementById("skill5").value);
    localStorage.setItem("skill6" + nameCheck, document.getElementById("skill6").value);
    localStorage.setItem("skill7" + nameCheck, document.getElementById("skill7").value);
    localStorage.setItem("skill8" + nameCheck, document.getElementById("skill8").value);
    localStorage.setItem("skill9" + nameCheck, document.getElementById("skill9").value);
    localStorage.setItem("skill10" + nameCheck, document.getElementById("skill10").value);
    localStorage.setItem("skill11" + nameCheck, document.getElementById("skill11").value);
    localStorage.setItem("skill12" + nameCheck, document.getElementById("skill12").value);
    localStorage.setItem("skill13" + nameCheck, document.getElementById("skill13").value);
    localStorage.setItem("skill14" + nameCheck, document.getElementById("skill14").value);
    localStorage.setItem("skill15" + nameCheck, document.getElementById("skill15").value);
    localStorage.setItem("skill16" + nameCheck, document.getElementById("skill16").value);
    localStorage.setItem("skill17" + nameCheck, document.getElementById("skill17").value);
    localStorage.setItem("skill19" + nameCheck, document.getElementById("skill19").value);
    localStorage.setItem("skill20" + nameCheck, document.getElementById("skill20").value);
    localStorage.setItem("skill21" + nameCheck, document.getElementById("skill21").value);
    localStorage.setItem("skill22" + nameCheck, document.getElementById("skill22").value);
    localStorage.setItem("skill23" + nameCheck, document.getElementById("skill23").value);
    localStorage.setItem("meleeType1" + nameCheck, document.getElementById("meleeType1").checked);
    localStorage.setItem("meleeType2" + nameCheck, document.getElementById("meleeType2").checked);
    localStorage.setItem("meleeType3" + nameCheck, document.getElementById("meleeType3").checked);
    localStorage.setItem("rangedType1" + nameCheck, document.getElementById("rangedType1").checked);
    localStorage.setItem("rangedType2" + nameCheck, document.getElementById("rangedType2").checked);
    localStorage.setItem("rangedType3" + nameCheck, document.getElementById("rangedType3").checked);

    // SALVAR COMBAT
    localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerHTML);
    localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerHTML);
    localStorage.setItem("editableArea5" + nameCheck, document.getElementById("editableArea5").innerHTML);
    localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerHTML);
    localStorage.setItem("editableArea7" + nameCheck, document.getElementById("editableArea7").innerHTML);
    localStorage.setItem("editableArea8" + nameCheck, document.getElementById("editableArea8").innerHTML);
    localStorage.setItem("editableArea9" + nameCheck, document.getElementById("editableArea9").innerHTML);
    localStorage.setItem("editableArea10" + nameCheck, document.getElementById("editableArea10").innerHTML);
    localStorage.setItem("editableArea11" + nameCheck, document.getElementById("editableArea11").innerHTML);
    localStorage.setItem("editableArea12" + nameCheck, document.getElementById("editableArea12").innerHTML);

    // SALVAR INVENTORY
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("coin3" + nameCheck, document.getElementById("coin3").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerHTML);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerHTML);

    // SALVAR NOTES
    localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerHTML);

    window.alert("O ID da Sua Ficha Foi Alterado Para: " + nameCheck.toUpperCase());
    getInputValues()
    location.reload();
};

function setInputValues() {

    if (nameCheck == null) {
        alert("N??o H?? Ficha Selecionada! Selecione Uma Ficha Antes de Salvar.");
    } else if (document.getElementById("charName").value == " ") {
        alert("Digite o Nome do Personagem Antes de Salvar a Ficha.");
    } else if (document.getElementById("charName").value != localStorage.getItem("nameCheck")) {
        alert("CUIDADO! O Nome do Personagem Foi Alterado.");
        sheetIdChange()
    } else {
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

        // ATRIBUTES & PLAYER STATUS
        localStorage.setItem("lifeBar" + nameCheck, document.getElementById("lifeBar").innerText);
        localStorage.setItem("sanityBar" + nameCheck, document.getElementById("sanityBar").innerText);
        localStorage.setItem("energyBar" + nameCheck, document.getElementById("energyBar").innerText);
        localStorage.setItem("exhaustSelect" + nameCheck, document.getElementById("exhaustSelect").value);
        localStorage.setItem("woundedCheck" + nameCheck, document.getElementById("woundedCheck").checked);
        localStorage.setItem("dyeingCheck" + nameCheck, document.getElementById("dyeingCheck").checked);
        localStorage.setItem("fail1" + nameCheck, document.getElementById("fail1").checked);
        localStorage.setItem("fail2" + nameCheck, document.getElementById("fail2").checked);
        localStorage.setItem("fail3" + nameCheck, document.getElementById("fail3").checked);
        localStorage.setItem("terrorizedCheck" + nameCheck, document.getElementById("terrorizedCheck").checked);
        localStorage.setItem("traumatizedCheck" + nameCheck, document.getElementById("traumatizedCheck").checked);
        localStorage.setItem("insaneCheck" + nameCheck, document.getElementById("insaneCheck").checked);
        localStorage.setItem("trainedSkillBonus" + nameCheck, document.getElementById("trainedSkillBonus").value);
        localStorage.setItem("nTrainedSkillBonus" + nameCheck, document.getElementById("nTrainedSkillBonus").value);
        localStorage.setItem("defense" + nameCheck, document.getElementById("defense").value);
        localStorage.setItem("block" + nameCheck, document.getElementById("block").value);
        localStorage.setItem("dodge" + nameCheck, document.getElementById("dodge").value);
        localStorage.setItem("armorWeight" + nameCheck, document.getElementById("armorWeight").value);
        localStorage.setItem("physicalRDMG" + nameCheck, document.getElementById("physicalRDMG").value);
        localStorage.setItem("balisticalRDMG" + nameCheck, document.getElementById("balisticalRDMG").value);
        localStorage.setItem("magialRDMG" + nameCheck, document.getElementById("magialRDMG").value);
        localStorage.setItem("velocity" + nameCheck, document.getElementById("velocity").value);
        localStorage.setItem("textArea5" + nameCheck, document.getElementById("textArea5").value);
        localStorage.setItem("strInput" + nameCheck, document.getElementById("strInput").value);
        localStorage.setItem("strModInput" + nameCheck, document.getElementById("strModInput").value);
        localStorage.setItem("agiInput" + nameCheck, document.getElementById("agiInput").value);
        localStorage.setItem("agiModInput" + nameCheck, document.getElementById("agiModInput").value);
        localStorage.setItem("conInput" + nameCheck, document.getElementById("conInput").value);
        localStorage.setItem("conModInput" + nameCheck, document.getElementById("conModInput").value);
        localStorage.setItem("intInput" + nameCheck, document.getElementById("intInput").value);
        localStorage.setItem("intModInput" + nameCheck, document.getElementById("intModInput").value);
        localStorage.setItem("wisInput" + nameCheck, document.getElementById("wisInput").value);
        localStorage.setItem("wisModInput" + nameCheck, document.getElementById("wisModInput").value);
        localStorage.setItem("chaInput" + nameCheck, document.getElementById("chaInput").value);
        localStorage.setItem("chaModInput" + nameCheck, document.getElementById("chaModInput").value);
        localStorage.setItem("skillCheck1" + nameCheck, document.getElementById("skillCheck1").checked);
        localStorage.setItem("skillCheck2" + nameCheck, document.getElementById("skillCheck2").checked);
        localStorage.setItem("skillCheck3" + nameCheck, document.getElementById("skillCheck3").checked);
        localStorage.setItem("skillCheck4" + nameCheck, document.getElementById("skillCheck4").checked);
        localStorage.setItem("skillCheck5" + nameCheck, document.getElementById("skillCheck5").checked);
        localStorage.setItem("skillCheck6" + nameCheck, document.getElementById("skillCheck6").checked);
        localStorage.setItem("skillCheck7" + nameCheck, document.getElementById("skillCheck7").checked);
        localStorage.setItem("skillCheck8" + nameCheck, document.getElementById("skillCheck8").checked);
        localStorage.setItem("skillCheck9" + nameCheck, document.getElementById("skillCheck9").checked);
        localStorage.setItem("skillCheck10" + nameCheck, document.getElementById("skillCheck10").checked);
        localStorage.setItem("skillCheck11" + nameCheck, document.getElementById("skillCheck11").checked);
        localStorage.setItem("skillCheck12" + nameCheck, document.getElementById("skillCheck12").checked);
        localStorage.setItem("skillCheck13" + nameCheck, document.getElementById("skillCheck13").checked);
        localStorage.setItem("skillCheck14" + nameCheck, document.getElementById("skillCheck14").checked);
        localStorage.setItem("skillCheck15" + nameCheck, document.getElementById("skillCheck15").checked);
        localStorage.setItem("skillCheck16" + nameCheck, document.getElementById("skillCheck16").checked);
        localStorage.setItem("skillCheck17" + nameCheck, document.getElementById("skillCheck17").checked);
        localStorage.setItem("skillCheck19" + nameCheck, document.getElementById("skillCheck19").checked);
        localStorage.setItem("skillCheck20" + nameCheck, document.getElementById("skillCheck20").checked);
        localStorage.setItem("skillCheck21" + nameCheck, document.getElementById("skillCheck21").checked);
        localStorage.setItem("skillCheck22" + nameCheck, document.getElementById("skillCheck22").checked);
        localStorage.setItem("skillCheck23" + nameCheck, document.getElementById("skillCheck23").checked);
        localStorage.setItem("skill0" + nameCheck, document.getElementById("skill0").value);
        localStorage.setItem("skill1" + nameCheck, document.getElementById("skill1").value);
        localStorage.setItem("skill2" + nameCheck, document.getElementById("skill2").value);
        localStorage.setItem("skill3" + nameCheck, document.getElementById("skill3").value);
        localStorage.setItem("skill4" + nameCheck, document.getElementById("skill4").value);
        localStorage.setItem("skill5" + nameCheck, document.getElementById("skill5").value);
        localStorage.setItem("skill6" + nameCheck, document.getElementById("skill6").value);
        localStorage.setItem("skill7" + nameCheck, document.getElementById("skill7").value);
        localStorage.setItem("skill8" + nameCheck, document.getElementById("skill8").value);
        localStorage.setItem("skill9" + nameCheck, document.getElementById("skill9").value);
        localStorage.setItem("skill10" + nameCheck, document.getElementById("skill10").value);
        localStorage.setItem("skill11" + nameCheck, document.getElementById("skill11").value);
        localStorage.setItem("skill12" + nameCheck, document.getElementById("skill12").value);
        localStorage.setItem("skill13" + nameCheck, document.getElementById("skill13").value);
        localStorage.setItem("skill14" + nameCheck, document.getElementById("skill14").value);
        localStorage.setItem("skill15" + nameCheck, document.getElementById("skill15").value);
        localStorage.setItem("skill16" + nameCheck, document.getElementById("skill16").value);
        localStorage.setItem("skill17" + nameCheck, document.getElementById("skill17").value);
        localStorage.setItem("skill19" + nameCheck, document.getElementById("skill19").value);
        localStorage.setItem("skill20" + nameCheck, document.getElementById("skill20").value);
        localStorage.setItem("skill21" + nameCheck, document.getElementById("skill21").value);
        localStorage.setItem("skill22" + nameCheck, document.getElementById("skill22").value);
        localStorage.setItem("skill23" + nameCheck, document.getElementById("skill23").value);
        localStorage.setItem("meleeType1" + nameCheck, document.getElementById("meleeType1").checked);
        localStorage.setItem("meleeType2" + nameCheck, document.getElementById("meleeType2").checked);
        localStorage.setItem("meleeType3" + nameCheck, document.getElementById("meleeType3").checked);
        localStorage.setItem("rangedType1" + nameCheck, document.getElementById("rangedType1").checked);
        localStorage.setItem("rangedType2" + nameCheck, document.getElementById("rangedType2").checked);
        localStorage.setItem("rangedType3" + nameCheck, document.getElementById("rangedType3").checked);

        // COMBAT
        localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerHTML);
        localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerHTML);
        localStorage.setItem("editableArea5" + nameCheck, document.getElementById("editableArea5").innerHTML);
        localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerHTML);
        localStorage.setItem("editableArea7" + nameCheck, document.getElementById("editableArea7").innerHTML);
        localStorage.setItem("editableArea8" + nameCheck, document.getElementById("editableArea8").innerHTML);
        localStorage.setItem("editableArea9" + nameCheck, document.getElementById("editableArea9").innerHTML);
        localStorage.setItem("editableArea10" + nameCheck, document.getElementById("editableArea10").innerHTML);
        localStorage.setItem("editableArea11" + nameCheck, document.getElementById("editableArea11").innerHTML);
        localStorage.setItem("editableArea12" + nameCheck, document.getElementById("editableArea12").innerHTML);

        // INVENTORY
        localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
        localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
        localStorage.setItem("coin3" + nameCheck, document.getElementById("coin3").value);
        localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerHTML);
        localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerHTML);

        // NOTES
        localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerHTML);

        window.alert("Ficha SALVA com Sucesso: " + nameCheck.toUpperCase() + "\n\nLembre-se de Fazer Backup de Sua Ficha!");
    }
};

function setSkills() {
    let trainedSkillBonus = parseInt(document.getElementById("trainedSkillBonus").value);
    let nTrainedSkillBonus = parseInt(document.getElementById("nTrainedSkillBonus").value);
    let strModInput = parseInt(document.getElementById("strModInput").value);
    let agiModInput = parseInt(document.getElementById("agiModInput").value);
    let conModInput = parseInt(document.getElementById("conModInput").value);
    let intModInput = parseInt(document.getElementById("intModInput").value);
    let wisModInput = parseInt(document.getElementById("wisModInput").value);
    let chaModInput = parseInt(document.getElementById("chaModInput").value);

    if (document.getElementById("skillCheck2").checked == true) {
        document.getElementById("skill2").value = trainedSkillBonus + strModInput;
        if (document.getElementById("skill2").value > 0) {
            document.getElementById("skill2").value = "+" + document.getElementById("skill2").value;
        }
    } else {
        document.getElementById("skill2").value = nTrainedSkillBonus + strModInput;
        if (document.getElementById("skill2").value > 0) {
            document.getElementById("skill2").value = "+" + document.getElementById("skill2").value;
        }
    }

    if (document.getElementById("skillCheck3").checked == true) {
        document.getElementById("skill3").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill3").value > 0) {
            document.getElementById("skill3").value = "+" + document.getElementById("skill3").value;
        }
    } else {
        document.getElementById("skill3").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill3").value > 0) {
            document.getElementById("skill3").value = "+" + document.getElementById("skill3").value;
        }
    }

    if (document.getElementById("skillCheck4").checked == true) {
        document.getElementById("skill4").value = trainedSkillBonus + conModInput;
        if (document.getElementById("skill4").value > 0) {
            document.getElementById("skill4").value = "+" + document.getElementById("skill4").value;
        }
    } else {
        document.getElementById("skill4").value = nTrainedSkillBonus + conModInput;
        if (document.getElementById("skill4").value > 0) {
            document.getElementById("skill4").value = "+" + document.getElementById("skill4").value;
        }
    }

    if (document.getElementById("skillCheck5").checked == true) {
        document.getElementById("skill5").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill5").value > 0) {
            document.getElementById("skill5").value = "+" + document.getElementById("skill5").value;
        }
    } else {
        document.getElementById("skill5").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill5").value > 0) {
            document.getElementById("skill5").value = "+" + document.getElementById("skill5").value;
        }
    }

    if (document.getElementById("skillCheck6").checked == true) {
        document.getElementById("skill6").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill6").value > 0) {
            document.getElementById("skill6").value = "+" + document.getElementById("skill6").value;
        }
    } else {
        document.getElementById("skill6").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill6").value > 0) {
            document.getElementById("skill6").value = "+" + document.getElementById("skill6").value;
        }
    }

    if (document.getElementById("skillCheck7").checked == true) {
        document.getElementById("skill7").value = trainedSkillBonus + strModInput;
        if (document.getElementById("skill7").value > 0) {
            document.getElementById("skill7").value = "+" + document.getElementById("skill7").value;
        }
    } else {
        document.getElementById("skill7").value = nTrainedSkillBonus + strModInput;
        if (document.getElementById("skill7").value > 0) {
            document.getElementById("skill7").value = "+" + document.getElementById("skill7").value;
        }
    }

    if (document.getElementById("skillCheck8").checked == true) {
        document.getElementById("skill8").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill8").value > 0) {
            document.getElementById("skill8").value = "+" + document.getElementById("skill8").value;
        }
    } else {
        document.getElementById("skill8").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill8").value > 0) {
            document.getElementById("skill8").value = "+" + document.getElementById("skill8").value;
        }
    }

    if (document.getElementById("skillCheck9").checked == true) {
        document.getElementById("skill9").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill9").value > 0) {
            document.getElementById("skill9").value = "+" + document.getElementById("skill9").value;
        }
    } else {
        document.getElementById("skill9").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill9").value > 0) {
            document.getElementById("skill9").value = "+" + document.getElementById("skill9").value;
        }
    }

    if (document.getElementById("skillCheck10").checked == true) {
        document.getElementById("skill10").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill10").value > 0) {
            document.getElementById("skill10").value = "+" + document.getElementById("skill10").value;
        }
    } else {
        document.getElementById("skill10").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill10").value > 0) {
            document.getElementById("skill10").value = "+" + document.getElementById("skill10").value;
        }
    }

    if (document.getElementById("skillCheck11").checked == true) {
        document.getElementById("skill11").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill11").value > 0) {
            document.getElementById("skill11").value = "+" + document.getElementById("skill11").value;
        }
    } else {
        document.getElementById("skill11").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill11").value > 0) {
            document.getElementById("skill11").value = "+" + document.getElementById("skill11").value;
        }
    }

    if (document.getElementById("skillCheck12").checked == true) {
        document.getElementById("skill12").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill12").value > 0) {
            document.getElementById("skill12").value = "+" + document.getElementById("skill12").value;
        }
    } else {
        document.getElementById("skill12").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill12").value > 0) {
            document.getElementById("skill12").value = "+" + document.getElementById("skill12").value;
        }
    }

    if (document.getElementById("skillCheck13").checked == true) {
        document.getElementById("skill13").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill13").value > 0) {
            document.getElementById("skill13").value = "+" + document.getElementById("skill13").value;
        }
    } else {
        document.getElementById("skill13").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill13").value > 0) {
            document.getElementById("skill13").value = "+" + document.getElementById("skill13").value;
        }
    }

    if (document.getElementById("skillCheck14").checked == true) {
        document.getElementById("skill14").value = trainedSkillBonus + intModInput;
       if ( document.getElementById("skill14").value > 0) {
        document.getElementById("skill14").value = "+" + document.getElementById("skill14").value;
        }
    } else {
        document.getElementById("skill14").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill14").value > 0) {
            document.getElementById("skill14").value = "+" + document.getElementById("skill14").value;
        }
    }

    if (document.getElementById("skillCheck15").checked == true) {
        document.getElementById("skill15").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill15").value > 0) {
            document.getElementById("skill15").value = "+" + document.getElementById("skill15").value;
        }
    } else {
        document.getElementById("skill15").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill15").value > 0) {
            document.getElementById("skill15").value = "+" + document.getElementById("skill15").value;
        }
    }

    if (document.getElementById("skillCheck16").checked == true) {
        document.getElementById("skill16").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill16").value > 0) {
            document.getElementById("skill16").value = "+" + document.getElementById("skill16").value;
        }
    } else {
        document.getElementById("skill16").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill16").value > 0) {
            document.getElementById("skill16").value = "+" + document.getElementById("skill16").value;
        }
    }

    if (document.getElementById("skillCheck17").checked == true) {
        document.getElementById("skill17").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill17").value > 0) {
            document.getElementById("skill17").value = "+" + document.getElementById("skill17").value;
        }
    } else {
        document.getElementById("skill17").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill17").value > 0) {
            document.getElementById("skill17").value = "+" + document.getElementById("skill17").value;
        }
    }

    if (document.getElementById("skillCheck19").checked == true) {
        document.getElementById("skill19").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill19").value > 0) {
            document.getElementById("skill19").value = "+" + document.getElementById("skill19").value;
        }
    } else {
        document.getElementById("skill19").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill19").value > 0) {
            document.getElementById("skill19").value = "+" + document.getElementById("skill19").value;
        }
    }

    if (document.getElementById("skillCheck20").checked == true) {
        document.getElementById("skill20").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill20").value > 0) {
            document.getElementById("skill20").value = "+" + document.getElementById("skill20").value;
        }
    } else {
        document.getElementById("skill20").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill20").value > 0) {
            document.getElementById("skill20").value = "+" + document.getElementById("skill20").value;
        }
    }

    if (document.getElementById("skillCheck21").checked == true) {
        document.getElementById("skill21").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill21").value > 0) {
            document.getElementById("skill21").value = "+" + document.getElementById("skill21").value;
        }
    } else {
        document.getElementById("skill21").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill21").value > 0) {
            document.getElementById("skill21").value = "+" + document.getElementById("skill21").value;
        }
    }

    if (document.getElementById("skillCheck22").checked == true) {
        document.getElementById("skill22").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill22").value > 0) {
            document.getElementById("skill22").value = "+" + document.getElementById("skill22").value;
        }
    } else {
        document.getElementById("skill22").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill22").value > 0) {
    document.getElementById("skill22").value = "+" + document.getElementById("skill22").value;            
        }
    }

    if (document.getElementById("skillCheck23").checked == true) {
        document.getElementById("skill23").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill23").value > 0) {
            document.getElementById("skill23").value = "+" + document.getElementById("skill23").value;
        }
    } else {
        document.getElementById("skill23").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill23").value > 0) {
            document.getElementById("skill23").value = "+" + document.getElementById("skill23").value;
        }
    }
}; setSkills()

function updateAttMods() {
    let strInput = document.getElementById("strInput").value;
    document.getElementById("strModInput").value = Math.floor((strInput - 10) / 2);
    if (document.getElementById("strModInput").value > 0) {
        document.getElementById("strModInput").value = "+" + document.getElementById("strModInput").value;
    }

    let agiInput = document.getElementById("agiInput").value;
    document.getElementById("agiModInput").value = Math.floor((agiInput - 10) / 2);
    if (document.getElementById("agiModInput").value > 0) {
        document.getElementById("agiModInput").value = "+" + document.getElementById("agiModInput").value;
    }

    let conInput = document.getElementById("conInput").value;
    document.getElementById("conModInput").value = Math.floor((conInput - 10) / 2);
    if (document.getElementById("conModInput").value > 0) {
        document.getElementById("conModInput").value = "+" + document.getElementById("conModInput").value;
    }

    let intInput = document.getElementById("intInput").value;
    document.getElementById("intModInput").value = Math.floor((intInput - 10) / 2);
    if (document.getElementById("intModInput").value > 0) {
        document.getElementById("intModInput").value = "+" + document.getElementById("intModInput").value;
    }

    let wisInput = document.getElementById("wisInput").value;
    document.getElementById("wisModInput").value = Math.floor((wisInput - 10) / 2);
    if (document.getElementById("wisModInput").value > 0) {
        document.getElementById("wisModInput").value = "+" + document.getElementById("wisModInput").value;
    }

    let chaInput = document.getElementById("chaInput").value;
    document.getElementById("chaModInput").value = Math.floor((chaInput - 10) / 2);
    if (document.getElementById("chaModInput").value > 0) {
        document.getElementById("chaModInput").value = "+" + document.getElementById("chaModInput").value;
    }

}; updateAttMods()

function updateDefenseMods() {
    document.getElementById("block").value = parseInt(document.getElementById("skill2").value);
    if (document.getElementById("block").value > 0) {
        document.getElementById("block").value = "+" + document.getElementById("block").value;
    }

    document.getElementById("dodge").value = parseInt(document.getElementById("skill5").value);
    if (document.getElementById("dodge").value > 0) {
        document.getElementById("dodge").value = "+" + document.getElementById("dodge").value;
    }
}; updateDefenseMods()

function changeTitle(name) {
    let changeTitleNamePersonagem = name;  
    let newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem("titlePersonagem", newTitlePersonagem);
};

document.getElementById("imgSelectBtn").addEventListener("change", e => {
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        document.getElementById("charImg").src = reader.result;
        upload.value = "";
    }
    reader.readAsDataURL(file);
});

openProfModalDiv2.addEventListener("click", ()=> {
    profModalDiv2.style.display = "grid"
    openProfModalDiv2.style.display = "none";
    closeProfModalDiv2.style.display = "block";
});

openProfModalDiv1.addEventListener("click", ()=> {
    profModalDiv1.style.display = "grid"
    openProfModalDiv1.style.display = "none";
    closeProfModalDiv1.style.display = "block";
});

closeProfModalDiv2.addEventListener("click", ()=> {
    profModalDiv2.style.display = "none"
    openProfModalDiv2.style.display = "block";
    closeProfModalDiv2.style.display = "none";
});

closeProfModalDiv1.addEventListener("click", ()=> {
    profModalDiv1.style.display = "none"
    openProfModalDiv1.style.display = "block";
    closeProfModalDiv1.style.display = "none";
});

function openHamburguer() {
    hamburguerMenu.style.display = "none";
    xHamburguerMenu.style.display = "block";
    saveLoadDelBtns.style.display = "flex";
    headerTitle.style.display = "none";
};

function closeHamburguer() {
    hamburguerMenu.style.display = "";
    xHamburguerMenu.style.display = "none";
    saveLoadDelBtns.style.display = "none";
    headerTitle.style.display = "block";
};

function indexPage() {
    navBtnDiv1.style.opacity = "100%";
    navBtnDiv2.style.opacity = "";
    navBtnDiv3.style.opacity = "";
    navBtnDiv4.style.opacity = "";
    navBtnDiv5.style.opacity = "";
    navBtnDiv1.style.borderBlockColor = "white";
    navBtnDiv2.style.borderBlockColor = "gray";
    navBtnDiv3.style.borderBlockColor = "gray";
    navBtnDiv4.style.borderBlockColor = "gray";
    navBtnDiv5.style.borderBlockColor = "gray";
    navImgBtn1.style.opacity = "100%";
    navImgBtn2.style.opacity = "";
    navImgBtn3.style.opacity = "";
    navImgBtn4.style.opacity = "";
    navImgBtn5.style.opacity = "";
    section1.style.display = "block";
    section2.style.display = "block";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
};

function skillsPage() {
    navBtnDiv1.style.opacity = "";
    navBtnDiv2.style.opacity = "100%";
    navBtnDiv3.style.opacity = "";
    navBtnDiv4.style.opacity = "";
    navBtnDiv5.style.opacity = "";
    navImgBtn1.style.opacity = "";
    navImgBtn2.style.opacity = "100%";
    navImgBtn3.style.opacity = "";
    navImgBtn4.style.opacity = "";
    navImgBtn5.style.opacity = "";
    navBtnDiv1.style.borderBlockColor = "gray";
    navBtnDiv2.style.borderBlockColor = "white";
    navBtnDiv3.style.borderBlockColor = "gray";
    navBtnDiv4.style.borderBlockColor = "gray";
    navBtnDiv5.style.borderBlockColor = "gray";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "grid";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
};

function combatPage() {
    navBtnDiv1.style.opacity = "";
    navBtnDiv2.style.opacity = "";
    navBtnDiv3.style.opacity = "100%";
    navBtnDiv4.style.opacity = "";
    navBtnDiv5.style.opacity = "";
    navImgBtn1.style.opacity = "";
    navImgBtn2.style.opacity = "";
    navImgBtn3.style.opacity = "100%";
    navImgBtn4.style.opacity = "";
    navImgBtn5.style.opacity = "";
    navBtnDiv1.style.borderBlockColor = "gray";
    navBtnDiv2.style.borderBlockColor = "gray";
    navBtnDiv3.style.borderBlockColor = "white";
    navBtnDiv4.style.borderBlockColor = "gray";
    navBtnDiv5.style.borderBlockColor = "gray";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "grid";
    section5.style.display = "none";
    section6.style.display = "none";
};

function inventoryPage() {
    navBtnDiv1.style.opacity = "";
    navBtnDiv2.style.opacity = "";
    navBtnDiv3.style.opacity = "";
    navBtnDiv4.style.opacity = "100%";
    navBtnDiv5.style.opacity = "";
    navImgBtn1.style.opacity = "";
    navImgBtn2.style.opacity = "";
    navImgBtn3.style.opacity = "";
    navImgBtn4.style.opacity = "100%";
    navImgBtn5.style.opacity = "";
    navBtnDiv1.style.borderBlockColor = "gray";
    navBtnDiv2.style.borderBlockColor = "gray";
    navBtnDiv3.style.borderBlockColor = "gray";
    navBtnDiv4.style.borderBlockColor = "white";
    navBtnDiv5.style.borderBlockColor = "gray";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "grid";
    section6.style.display = "none";
};

function notesPage() {
    navBtnDiv1.style.opacity = "";
    navBtnDiv2.style.opacity = "";
    navBtnDiv3.style.opacity = "";
    navBtnDiv4.style.opacity = "";
    navBtnDiv5.style.opacity = "100%";
    navImgBtn1.style.opacity = "";
    navImgBtn2.style.opacity = "";
    navImgBtn3.style.opacity = "";
    navImgBtn4.style.opacity = "";
    navImgBtn5.style.opacity = "100%";
    navBtnDiv1.style.borderBlockColor = "gray";
    navBtnDiv2.style.borderBlockColor = "gray";
    navBtnDiv3.style.borderBlockColor = "gray";
    navBtnDiv4.style.borderBlockColor = "gray";
    navBtnDiv5.style.borderBlockColor = "white";
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
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

    document.getElementById("passiveAb").style.display = "none";
    editBtn2.style.display = "block";
    xBtn2.style.display = "none";

    document.getElementById("weaponsDiv").style.display = "none";
    editBtn3.style.display = "block";
    xBtn3.style.display = "none";

    document.getElementById("spellsDiv").style.display = "none";
    editBtn4.style.display = "block";
    xBtn4.style.display = "none";
});

editBtn2.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "none";
    editBtn1.style.display = "block";
    xBtn1.style.display = "none";

    document.getElementById("passiveAb").style.display = "block";
    editBtn2.style.display = "none";
    xBtn2.style.display = "block";

    document.getElementById("weaponsDiv").style.display = "none";
    editBtn3.style.display = "block";
    xBtn3.style.display = "none";

    document.getElementById("spellsDiv").style.display = "none";
    editBtn4.style.display = "block";
    xBtn4.style.display = "none";
});

editBtn3.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "none";
    editBtn1.style.display = "block";
    xBtn1.style.display = "none";

    document.getElementById("passiveAb").style.display = "none";
    editBtn2.style.display = "block";
    xBtn2.style.display = "none";

    document.getElementById("weaponsDiv").style.display = "block";
    editBtn3.style.display = "none";
    xBtn3.style.display = "block";

    document.getElementById("spellsDiv").style.display = "none";
    editBtn4.style.display = "block";
    xBtn4.style.display = "none";
});

editBtn4.addEventListener('click', ()=> {
    document.getElementById("activeAb").style.display = "none";
    editBtn1.style.display = "block";
    xBtn1.style.display = "none";

    document.getElementById("passiveAb").style.display = "none";
    editBtn2.style.display = "block";
    xBtn2.style.display = "none";

    document.getElementById("weaponsDiv").style.display = "none";
    editBtn3.style.display = "block";
    xBtn3.style.display = "none";

    document.getElementById("spellsDiv").style.display = "grid";
    document.getElementById("spellsDiv").style.rowGap = "6em"
    editBtn4.style.display = "none";
    xBtn4.style.display = "block";
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

function changeSize8() {
    var mySize8 = document.getElementById("fontSize8").value;
    document.execCommand('fontSize', false, mySize8);
}

function changeSize9() {
    var mySize9 = document.getElementById("fontSize9").value;
    document.execCommand('fontSize', false, mySize9);
}

function changeSize10() {
    var mySize10 = document.getElementById("fontSize10").value;
    document.execCommand('fontSize', false, mySize10);
}

function changeSize11() {
    var mySize11 = document.getElementById("fontSize11").value;
    document.execCommand('fontSize', false, mySize11);
}

function changeSize12() {
    var mySize12 = document.getElementById("fontSize12").value;
    document.execCommand('fontSize', false, mySize12);
}

function changeSize13() {
    var mySize13 = document.getElementById("fontSize13").value;
    document.execCommand('fontSize', false, mySize13);
}

function chooseColor1() {
    var myColor1 = document.getElementById("myColor1").value;
    document.execCommand('foreColor', false, myColor1);
    var bgColor = document.getElementById('myColor1');
    bgColor.style.backgroundColor = myColor1;
}

function chooseColor2() {
    var myColor2 = document.getElementById("myColor2").value;
    document.execCommand('foreColor', false, myColor2);
    var bgColor = document.getElementById('myColor2');
    bgColor.style.backgroundColor = myColor2;
}

function chooseColor3() {
    var myColor3 = document.getElementById("myColor3").value;
    document.execCommand('foreColor', false, myColor3);
    var bgColor = document.getElementById('myColor3');
    bgColor.style.backgroundColor = myColor3;
}

function chooseColor4() {
    var myColor4 = document.getElementById("myColor4").value;
    document.execCommand('foreColor', false, myColor4);
    var bgColor = document.getElementById('myColor4');
    bgColor.style.backgroundColor = myColor4;
}

function chooseColor5() {
    var myColor5 = document.getElementById("myColor5").value;
    document.execCommand('foreColor', false, myColor5);
    var bgColor = document.getElementById('myColor5');
    bgColor.style.backgroundColor = myColor5;
}

function chooseColor6() {
    var myColor6 = document.getElementById("myColor6").value;
    document.execCommand('foreColor', false, myColor6);
    var bgColor = document.getElementById('myColor6');
    bgColor.style.backgroundColor = myColor6;
}

function chooseColor7() {
    var myColor7 = document.getElementById("myColor7").value;
    document.execCommand('foreColor', false, myColor7);
    var bgColor = document.getElementById('myColor7');
    bgColor.style.backgroundColor = myColor7;
}

function chooseColor8() {
    var myColor8 = document.getElementById("myColor8").value;
    document.execCommand('foreColor', false, myColor8);
    var bgColor = document.getElementById('myColor8');
    bgColor.style.backgroundColor = myColor8;
}

function chooseColor9() {
    var myColor9 = document.getElementById("myColor9").value;
    document.execCommand('foreColor', false, myColor9);
    var bgColor = document.getElementById('myColor9');
    bgColor.style.backgroundColor = myColor9;
}

function chooseColor10() {
    var myColor10 = document.getElementById("myColor10").value;
    document.execCommand('foreColor', false, myColor10);
    var bgColor = document.getElementById('myColor10');
    bgColor.style.backgroundColor = myColor10;
}

function chooseColor11() {
    var myColor11 = document.getElementById("myColor11").value;
    document.execCommand('foreColor', false, myColor11);
    var bgColor = document.getElementById('myColor11');
    bgColor.style.backgroundColor = myColor11;
}

function chooseColor12() {
    var myColor12 = document.getElementById("myColor12").value;
    document.execCommand('foreColor', false, myColor12);
    var bgColor = document.getElementById('myColor12');
    bgColor.style.backgroundColor = myColor12;
}

function chooseColor13() {
    var myColor13 = document.getElementById("myColor13").value;
    document.execCommand('foreColor', false, myColor13);
    var bgColor = document.getElementById('myColor13');
    bgColor.style.backgroundColor = myColor13;
}

window.onbeforeunload = function () {
    return ""
}