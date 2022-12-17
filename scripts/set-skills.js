let setSkills = () => {

    let radio1 = document.querySelector('input[name="training1"]:checked').id;
    let radio2 = document.querySelector('input[name="training2"]:checked').id;
    let radio3 = document.querySelector('input[name="training3"]:checked').id;
    let radio4 = document.querySelector('input[name="training4"]:checked').id;
    let radio5 = document.querySelector('input[name="training5"]:checked').id;
    let radio6 = document.querySelector('input[name="training6"]:checked').id;
    let radio7 = document.querySelector('input[name="training7"]:checked').id;
    let radio8 = document.querySelector('input[name="training8"]:checked').id;
    let radio9 = document.querySelector('input[name="training9"]:checked').id;
    let radio10 = document.querySelector('input[name="training10"]:checked').id;
    let radio11 = document.querySelector('input[name="training11"]:checked').id;
    let radio12 = document.querySelector('input[name="training12"]:checked').id;
    let radio13 = document.querySelector('input[name="training13"]:checked').id;
    let radio14 = document.querySelector('input[name="training14"]:checked').id;
    let radio15 = document.querySelector('input[name="training15"]:checked').id;
    let radio16 = document.querySelector('input[name="training16"]:checked').id;
    let radio17 = document.querySelector('input[name="training17"]:checked').id;
    let radio18 = document.querySelector('input[name="training18"]:checked').id;
    let radio19 = document.querySelector('input[name="training19"]:checked').id;
    let radio20 = document.querySelector('input[name="training20"]:checked').id;
    let radio21 = document.querySelector('input[name="training21"]:checked').id;
    

    if (radio1 === "skillRadio1") {
        document.getElementById("skill2").value = "+5";
    } else if (radio1 === "skillRadio2") {
        document.getElementById("skill2").value = "+10";
    } else if (radio1 === "skillRadio3") {
        document.getElementById("skill2").value = "+15";
    }

    if (radio2 === "skillRadio4") {
        document.getElementById("skill3").value = "+5";
    } else if (radio2 === "skillRadio5") {
        document.getElementById("skill3").value = "+10";
    } else if (radio2 === "skillRadio6") {
        document.getElementById("skill3").value = "+15";
    }
};

setSkills();