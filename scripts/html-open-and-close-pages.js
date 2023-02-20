let indexPage = () => {
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

let skillsPage = () => {
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

let combatPage = () => {
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

let inventoryPage = () => {
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

let notesPage = () => {
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

let openCloseSkillStatus1 = () => {

    if(document.getElementById("skillSpan1").innerHTML === "+") {
        document.getElementById("skillSpan1").innerHTML = "X";
        openCloseRadioDiv1.style.display = "flex";
    } else {
        document.getElementById("skillSpan1").innerHTML = "+";
        openCloseRadioDiv1.style.display = "none";
    }
};

let openCloseSkillStatus2 = () => {

    if(document.getElementById("skillSpan2").innerHTML === "+") {
        document.getElementById("skillSpan2").innerHTML = "X";
        openCloseRadioDiv2.style.display = "flex";
    } else {
        document.getElementById("skillSpan2").innerHTML = "+";
        openCloseRadioDiv2.style.display = "none";
    }
};

let openCloseSkillStatus3 = () => {

    if(document.getElementById("skillSpan3").innerHTML === "+") {
        document.getElementById("skillSpan3").innerHTML = "X";
        openCloseRadioDiv3.style.display = "flex";
    } else {
        document.getElementById("skillSpan3").innerHTML = "+";
        openCloseRadioDiv3.style.display = "none";
    }
};

let openCloseSkillStatus4 = () => {

    if(document.getElementById("skillSpan4").innerHTML === "+") {
        document.getElementById("skillSpan4").innerHTML = "X";
        openCloseRadioDiv4.style.display = "flex";
    } else {
        document.getElementById("skillSpan4").innerHTML = "+";
        openCloseRadioDiv4.style.display = "none";
    }
};

let openCloseSkillStatus5 = () => {

    if(document.getElementById("skillSpan5").innerHTML === "+") {
        document.getElementById("skillSpan5").innerHTML = "X";
        openCloseRadioDiv5.style.display = "flex";
    } else {
        document.getElementById("skillSpan5").innerHTML = "+";
        openCloseRadioDiv5.style.display = "none";
    }
};

let openCloseSkillStatus6 = () => {

    if(document.getElementById("skillSpan6").innerHTML === "+") {
        document.getElementById("skillSpan6").innerHTML = "X";
        openCloseRadioDiv6.style.display = "flex";
    } else {
        document.getElementById("skillSpan6").innerHTML = "+";
        openCloseRadioDiv6.style.display = "none";
    }
};

let openCloseSkillStatus7 = () => {

    if(document.getElementById("skillSpan7").innerHTML === "+") {
        document.getElementById("skillSpan7").innerHTML = "X";
        openCloseRadioDiv7.style.display = "flex";
    } else {
        document.getElementById("skillSpan7").innerHTML = "+";
        openCloseRadioDiv7.style.display = "none";
    }
};

let openCloseSkillStatus8 = () => {

    if(document.getElementById("skillSpan8").innerHTML === "+") {
        document.getElementById("skillSpan8").innerHTML = "X";
        openCloseRadioDiv8.style.display = "flex";
    } else {
        document.getElementById("skillSpan8").innerHTML = "+";
        openCloseRadioDiv8.style.display = "none";
    }
};


let openCloseSkillStatus9 = () => {

    if(document.getElementById("skillSpan9").innerHTML === "+") {
        document.getElementById("skillSpan9").innerHTML = "X";
        openCloseRadioDiv9.style.display = "flex";
    } else {
        document.getElementById("skillSpan9").innerHTML = "+";
        openCloseRadioDiv9.style.display = "none";
    }
};

let openCloseSkillStatus10 = () => {

    if(document.getElementById("skillSpan10").innerHTML === "+") {
        document.getElementById("skillSpan10").innerHTML = "X";
        openCloseRadioDiv10.style.display = "flex";
    } else {
        document.getElementById("skillSpan10").innerHTML = "+";
        openCloseRadioDiv10.style.display = "none";
    }
};

let openCloseSkillStatus11 = () => {

    if(document.getElementById("skillSpan11").innerHTML === "+") {
        document.getElementById("skillSpan11").innerHTML = "X";
        openCloseRadioDiv11.style.display = "flex";
    } else {
        document.getElementById("skillSpan11").innerHTML = "+";
        openCloseRadioDiv11.style.display = "none";
    }
};

let openCloseSkillStatus12 = () => {

    if(document.getElementById("skillSpan12").innerHTML === "+") {
        document.getElementById("skillSpan12").innerHTML = "X";
        openCloseRadioDiv12.style.display = "flex";
    } else {
        document.getElementById("skillSpan12").innerHTML = "+";
        openCloseRadioDiv12.style.display = "none";
    }
};

let openCloseSkillStatus13 = () => {

    if(document.getElementById("skillSpan13").innerHTML === "+") {
        document.getElementById("skillSpan13").innerHTML = "X";
        openCloseRadioDiv13.style.display = "flex";
    } else {
        document.getElementById("skillSpan13").innerHTML = "+";
        openCloseRadioDiv13.style.display = "none";
    }
};

let openCloseSkillStatus14 = () => {

    if(document.getElementById("skillSpan14").innerHTML === "+") {
        document.getElementById("skillSpan14").innerHTML = "X";
        openCloseRadioDiv14.style.display = "flex";
    } else {
        document.getElementById("skillSpan14").innerHTML = "+";
        openCloseRadioDiv14.style.display = "none";
    }
};

let openCloseSkillStatus15 = () => {

    if(document.getElementById("skillSpan15").innerHTML === "+") {
        document.getElementById("skillSpan15").innerHTML = "X";
        openCloseRadioDiv15.style.display = "flex";
    } else {
        document.getElementById("skillSpan15").innerHTML = "+";
        openCloseRadioDiv15.style.display = "none";
    }
};

let openCloseSkillStatus16 = () => {

    if(document.getElementById("skillSpan16").innerHTML === "+") {
        document.getElementById("skillSpan16").innerHTML = "X";
        openCloseRadioDiv16.style.display = "flex";
    } else {
        document.getElementById("skillSpan16").innerHTML = "+";
        openCloseRadioDiv16.style.display = "none";
    }
};

let openCloseSkillStatus17 = () => {

    if(document.getElementById("skillSpan17").innerHTML === "+") {
        document.getElementById("skillSpan17").innerHTML = "X";
        openCloseRadioDiv17.style.display = "flex";
    } else {
        document.getElementById("skillSpan17").innerHTML = "+";
        openCloseRadioDiv17.style.display = "none";
    }
};

let openCloseSkillStatus18 = () => {

    if(document.getElementById("skillSpan18").innerHTML === "+") {
        document.getElementById("skillSpan18").innerHTML = "X";
        openCloseRadioDiv18.style.display = "flex";
    } else {
        document.getElementById("skillSpan18").innerHTML = "+";
        openCloseRadioDiv18.style.display = "none";
    }
};

let openCloseSkillStatus19 = () => {

    if(document.getElementById("skillSpan19").innerHTML === "+") {
        document.getElementById("skillSpan19").innerHTML = "X";
        openCloseRadioDiv19.style.display = "flex";
    } else {
        document.getElementById("skillSpan19").innerHTML = "+";
        openCloseRadioDiv19.style.display = "none";
    }
};

let openCloseSkillStatus20 = () => {

    if(document.getElementById("skillSpan20").innerHTML === "+") {
        document.getElementById("skillSpan20").innerHTML = "X";
        openCloseRadioDiv20.style.display = "flex";
    } else {
        document.getElementById("skillSpan20").innerHTML = "+";
        openCloseRadioDiv20.style.display = "none";
    }
};

let openCloseSkillStatus21 = () => {

    if(document.getElementById("skillSpan21").innerHTML === "+") {
        document.getElementById("skillSpan21").innerHTML = "X";
        openCloseRadioDiv21.style.display = "flex";
        document.getElementById("skillsGridDiv").style.marginBottom = "70px";
    } else {
        document.getElementById("skillSpan21").innerHTML = "+";
        openCloseRadioDiv21.style.display = "none";
        document.getElementById("skillsGridDiv").style.marginBottom = "0px";
    }
};

let openCloseSkillStatus22 = () => {

    if(document.getElementById("skillSpan22").innerHTML === "+") {
        document.getElementById("skillSpan22").innerHTML = "X";
        openCloseRadioDiv22.style.display = "flex";
    } else {
        document.getElementById("skillSpan22").innerHTML = "+";
        openCloseRadioDiv22.style.display = "none";
    }
};

let openCloseSkillStatus23 = () => {

    if(document.getElementById("skillSpan23").innerHTML === "+") {
        document.getElementById("skillSpan23").innerHTML = "X";
        openCloseRadioDiv23.style.display = "flex";
    } else {
        document.getElementById("skillSpan23").innerHTML = "+";
        openCloseRadioDiv23.style.display = "none";
    }
};

let openCloseSkillStatus24 = () => {

    if(document.getElementById("skillSpan24").innerHTML === "+") {
        document.getElementById("skillSpan24").innerHTML = "X";
        openCloseRadioDiv24.style.display = "flex";
    } else {
        document.getElementById("skillSpan24").innerHTML = "+";
        openCloseRadioDiv24.style.display = "none";
    }
};