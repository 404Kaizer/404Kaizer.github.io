let = nameCheck = localStorage.getItem('nameCheck');

function setInputValues() {

    // INVENTORY PAGE
    localStorage.setItem("nameCheck", document.getElementById("title").innerHTML);
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerText);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerText);

    window.alert('Ficha Salva: ' + nameCheck.toUpperCase() + '\n\nLembre-se de Fazer Backup de Sua Ficha!');
};

window.onload = function getInputValues() {

    // INVENTORY PAGE
    document.getElementById("title").innerHTML = localStorage.getItem("nameCheck");
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("editableArea1").innerText = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").innerText = localStorage.getItem("editableArea2" + nameCheck);
};