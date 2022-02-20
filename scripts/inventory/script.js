let = nameCheck = localStorage.getItem('nameCheck');

function changeTitle(name) {
    var changeTitleNamePersonagem = name;  
    var newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem('titlePersonagem', newTitlePersonagem);
}

function setInputValues() {

    // INVENTORY PAGE
    localStorage.setItem("charName" + nameCheck, document.getElementById("title").innerText);
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerText);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerText);
};

window.onload = function getInputValues() {

    // INVENTORY PAGE
    document.getElementById("title").innerText = localStorage.getItem("charName" + nameCheck);
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("editableArea1").innerText = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").innerText = localStorage.getItem("editableArea2" + nameCheck);
};