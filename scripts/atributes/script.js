let = nameCheck = localStorage.getItem('nameCheck');

function setInputValues() {

    // NOTES PAGE
    localStorage.setItem("nameCheck", document.getElementById("title").innerHTML);
};

window.onload = function getInputValues() {

    // NOTES PAGE
    document.getElementById("title").innerHTML = localStorage.getItem("nameCheck");
};