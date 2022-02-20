let = nameCheck = localStorage.getItem('nameCheck');

function setInputValues() {

    // NOTES PAGE
    localStorage.setItem("nameCheck", document.getElementById("title").innerHTML);
    localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerText);
};

window.onload = function getInputValues() {

    // NOTES PAGE
    document.getElementById("title").innerHTML = localStorage.getItem("nameCheck");
    document.getElementById("editableArea").innerText = localStorage.getItem("editableArea" + nameCheck);
};