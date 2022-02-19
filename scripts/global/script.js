let = nameCheck = localStorage.getItem('nameCheck');
function chooseSheet() {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Jogar: ");
    if (!nameCheck) {
        while (!nameCheck) {
            nameCheck = prompt("Digite o Nome do Personagem Que Deseja Jogar: ");
        }
    } else {
        location.reload();
    }
    nameCheck = localStorage.setItem('nameCheck', nameCheck);
}

function setInputValues() {

    // INDEX PAGE
    localStorage.setItem("nameCheck", document.getElementById("title").innerHTML);

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

    // INVENTORY PAGE
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").value);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").value);

    alert("Ficha Salva Com Sucesso!");
};

window.onload = function getInputValues() {

    // INDEX PAGE
    document.getElementById("title").innerHTML = localStorage.getItem("nameCheck");

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

    // INVENTORY PAGE
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("editableArea1").value = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").value = localStorage.getItem("editableArea2" + nameCheck);
};