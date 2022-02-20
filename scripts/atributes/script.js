let = nameCheck = localStorage.getItem('nameCheck');

function changeTitle(name) {
    var changeTitleNamePersonagem = name;  
    var newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem('titlePersonagem', newTitlePersonagem);
}

function setInputValues() {

    // NOTES PAGE
    localStorage.setItem("charName" + nameCheck, document.getElementById("title").innerText);
};

window.onload = function getInputValues() {

    // NOTES PAGE
    document.getElementById("title").innerText = localStorage.getItem("charName" + nameCheck);
};