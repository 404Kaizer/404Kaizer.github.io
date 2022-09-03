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