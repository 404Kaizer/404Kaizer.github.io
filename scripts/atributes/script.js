let = nameCheck = localStorage.getItem('nameCheck');

function setInputValues() {

    // NOTES PAGE
    localStorage.setItem("nameCheck", document.getElementById("title").innerHTML);

    window.alert('Ficha Salva: ' + nameCheck.toUpperCase() + '\n\nLembre-se de Fazer Backup de Sua Ficha!');
};

window.onload = function getInputValues() {

    // NOTES PAGE
    document.getElementById("title").innerHTML = localStorage.getItem("nameCheck");
};