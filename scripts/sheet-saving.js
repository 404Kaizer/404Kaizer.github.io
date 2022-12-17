// Onload local storage name check.
window.onload = function getInputValidation() {
    nameCheck = localStorage.getItem("nameCheck");

    if (nameCheck === null || nameCheck === " ") {
        headerTitle.innerText = "Eroda";
    } else {
        headerTitle.innerText = nameCheck;
    }

    getInputValues();
};

// Getting stored information from local storage on page load.
let getInputValues = () => {

    // INDEX
    document.getElementById("title").innerText = localStorage.getItem("charName" + nameCheck);
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

    // ATRIBUTES & PLAYER STATUS
    document.getElementById("lifeBar").innerText = localStorage.getItem("lifeBar" + nameCheck);
    document.getElementById("sanityBar").innerText = localStorage.getItem("sanityBar" + nameCheck);
    document.getElementById("energyBar").innerText = localStorage.getItem("energyBar" + nameCheck);
    document.getElementById("exhaustSelect").value = localStorage.getItem("exhaustSelect" + nameCheck);
    document.getElementById("woundedCheck").checked = JSON.parse(localStorage.getItem("woundedCheck" + nameCheck));
    document.getElementById("dyeingCheck").checked = JSON.parse(localStorage.getItem("dyeingCheck" + nameCheck));
    document.getElementById("fail1").checked = JSON.parse(localStorage.getItem("fail1" + nameCheck));
    document.getElementById("fail2").checked = JSON.parse(localStorage.getItem("fail2" + nameCheck));
    document.getElementById("fail3").checked = JSON.parse(localStorage.getItem("fail3" + nameCheck));
    document.getElementById("terrorizedCheck").checked = JSON.parse(localStorage.getItem("terrorizedCheck" + nameCheck));
    document.getElementById("traumatizedCheck").checked = JSON.parse(localStorage.getItem("traumatizedCheck" + nameCheck));
    document.getElementById("insaneCheck").checked = JSON.parse(localStorage.getItem("insaneCheck" + nameCheck));
    //document.getElementById("trainedSkillBonus").value = localStorage.getItem("trainedSkillBonus" + nameCheck);
    //document.getElementById("nTrainedSkillBonus").value = localStorage.getItem("nTrainedSkillBonus" + nameCheck);
    document.getElementById("defense").value = localStorage.getItem("defense" + nameCheck);
    document.getElementById("block").value = localStorage.getItem("block" + nameCheck);
    document.getElementById("dodge").value = localStorage.getItem("dodge" + nameCheck);
    document.getElementById("armorWeight").value = localStorage.getItem("armorWeight" + nameCheck);
    document.getElementById("physicalRDMG").value = localStorage.getItem("physicalRDMG" + nameCheck);
    document.getElementById("balisticalRDMG").value = localStorage.getItem("balisticalRDMG" + nameCheck);
    document.getElementById("magialRDMG").value = localStorage.getItem("magialRDMG" + nameCheck);
    document.getElementById("velocity").value = localStorage.getItem("velocity" + nameCheck);
    document.getElementById("textArea5").value = localStorage.getItem("textArea5" + nameCheck);
    document.getElementById("strInput").value = localStorage.getItem("strInput" + nameCheck);
    document.getElementById("strModInput").value = localStorage.getItem("strModInput" + nameCheck);
    document.getElementById("agiInput").value = localStorage.getItem("agiInput" + nameCheck);
    document.getElementById("agiModInput").value = localStorage.getItem("agiModInput" + nameCheck);
    document.getElementById("vigInput").value = localStorage.getItem("vigInput" + nameCheck);
    document.getElementById("vigModInput").value = localStorage.getItem("vigModInput" + nameCheck);
    document.getElementById("intInput").value = localStorage.getItem("intInput" + nameCheck);
    document.getElementById("intModInput").value = localStorage.getItem("intModInput" + nameCheck);
    document.getElementById("wisInput").value = localStorage.getItem("wisInput" + nameCheck);
    document.getElementById("wisModInput").value = localStorage.getItem("wisModInput" + nameCheck);
    document.getElementById("chaInput").value = localStorage.getItem("chaInput" + nameCheck);
    //document.getElementById("chaModInput").value = localStorage.getItem("chaModInput" + nameCheck);
    document.getElementById("skillCheck1").checked = JSON.parse(localStorage.getItem("skillCheck1" + nameCheck));
    document.getElementById("skillCheck2").checked = JSON.parse(localStorage.getItem("skillCheck2" + nameCheck));
    document.getElementById("skillCheck3").checked = JSON.parse(localStorage.getItem("skillCheck3" + nameCheck));
    document.getElementById("skillCheck4").checked = JSON.parse(localStorage.getItem("skillCheck4" + nameCheck));
    document.getElementById("skillCheck5").checked = JSON.parse(localStorage.getItem("skillCheck5" + nameCheck));
    document.getElementById("skillCheck6").checked = JSON.parse(localStorage.getItem("skillCheck6" + nameCheck));
    document.getElementById("skillCheck7").checked = JSON.parse(localStorage.getItem("skillCheck7" + nameCheck));
    document.getElementById("skillCheck8").checked = JSON.parse(localStorage.getItem("skillCheck8" + nameCheck));
    document.getElementById("skillCheck9").checked = JSON.parse(localStorage.getItem("skillCheck9" + nameCheck));
    document.getElementById("skillCheck10").checked = JSON.parse(localStorage.getItem("skillCheck10" + nameCheck));
    document.getElementById("skillCheck11").checked = JSON.parse(localStorage.getItem("skillCheck11" + nameCheck));
    document.getElementById("skillCheck12").checked = JSON.parse(localStorage.getItem("skillCheck12" + nameCheck));
    document.getElementById("skillCheck13").checked = JSON.parse(localStorage.getItem("skillCheck13" + nameCheck));
    document.getElementById("skillCheck14").checked = JSON.parse(localStorage.getItem("skillCheck14" + nameCheck));
    document.getElementById("skillCheck15").checked = JSON.parse(localStorage.getItem("skillCheck15" + nameCheck));
    document.getElementById("skillCheck16").checked = JSON.parse(localStorage.getItem("skillCheck16" + nameCheck));
    document.getElementById("skillCheck17").checked = JSON.parse(localStorage.getItem("skillCheck17" + nameCheck));
    document.getElementById("skillCheck19").checked = JSON.parse(localStorage.getItem("skillCheck19" + nameCheck));
    document.getElementById("skillCheck20").checked = JSON.parse(localStorage.getItem("skillCheck20" + nameCheck));
    document.getElementById("skillCheck21").checked = JSON.parse(localStorage.getItem("skillCheck21" + nameCheck));
    document.getElementById("skillCheck22").checked = JSON.parse(localStorage.getItem("skillCheck22" + nameCheck));
    document.getElementById("skillCheck23").checked = JSON.parse(localStorage.getItem("skillCheck23" + nameCheck));
    document.getElementById("skill0").value = localStorage.getItem("skill0" + nameCheck);
    document.getElementById("skill1").value = localStorage.getItem("skill1" + nameCheck);
    document.getElementById("skill2").value = localStorage.getItem("skill2" + nameCheck);
    document.getElementById("skill3").value = localStorage.getItem("skill3" + nameCheck);
    document.getElementById("skill4").value = localStorage.getItem("skill4" + nameCheck);
    document.getElementById("skill5").value = localStorage.getItem("skill5" + nameCheck);
    document.getElementById("skill6").value = localStorage.getItem("skill6" + nameCheck);
    document.getElementById("skill7").value = localStorage.getItem("skill7" + nameCheck);
    document.getElementById("skill8").value = localStorage.getItem("skill8" + nameCheck);
    document.getElementById("skill9").value = localStorage.getItem("skill9" + nameCheck);
    document.getElementById("skill10").value = localStorage.getItem("skill10" + nameCheck);
    document.getElementById("skill11").value = localStorage.getItem("skill11" + nameCheck);
    document.getElementById("skill12").value = localStorage.getItem("skill12" + nameCheck);
    document.getElementById("skill13").value = localStorage.getItem("skill13" + nameCheck);
    document.getElementById("skill14").value = localStorage.getItem("skill14" + nameCheck);
    document.getElementById("skill15").value = localStorage.getItem("skill15" + nameCheck);
    document.getElementById("skill16").value = localStorage.getItem("skill16" + nameCheck);
    document.getElementById("skill17").value = localStorage.getItem("skill17" + nameCheck);
    document.getElementById("skill19").value = localStorage.getItem("skill19" + nameCheck);
    document.getElementById("skill20").value = localStorage.getItem("skill20" + nameCheck);
    document.getElementById("skill21").value = localStorage.getItem("skill21" + nameCheck);
    document.getElementById("skill22").value = localStorage.getItem("skill22" + nameCheck);
    document.getElementById("skill23").value = localStorage.getItem("skill23" + nameCheck);

    // COMBAT
    document.getElementById("editableArea3").innerHTML = localStorage.getItem("editableArea3" + nameCheck);
    document.getElementById("editableArea4").innerHTML = localStorage.getItem("editableArea4" + nameCheck);
    document.getElementById("editableArea5").innerHTML = localStorage.getItem("editableArea5" + nameCheck);
    document.getElementById("editableArea6").innerHTML = localStorage.getItem("editableArea6" + nameCheck);
    document.getElementById("editableArea7").innerHTML = localStorage.getItem("editableArea7" + nameCheck);
    document.getElementById("editableArea8").innerHTML = localStorage.getItem("editableArea8" + nameCheck);
    document.getElementById("editableArea9").innerHTML = localStorage.getItem("editableArea9" + nameCheck);
    document.getElementById("editableArea10").innerHTML = localStorage.getItem("editableArea10" + nameCheck);
    document.getElementById("editableArea11").innerHTML = localStorage.getItem("editableArea11" + nameCheck);
    document.getElementById("editableArea12").innerHTML = localStorage.getItem("editableArea12" + nameCheck);

    // INVENTORY
    document.getElementById("coin1").value = localStorage.getItem("coin1" + nameCheck);
    document.getElementById("coin2").value = localStorage.getItem("coin2" + nameCheck);
    document.getElementById("coin3").value = localStorage.getItem("coin3" + nameCheck);
    document.getElementById("editableArea1").innerHTML = localStorage.getItem("editableArea1" + nameCheck);
    document.getElementById("editableArea2").innerHTML = localStorage.getItem("editableArea2" + nameCheck);

    // NOTES
    document.getElementById("editableArea").innerHTML = localStorage.getItem("editableArea" + nameCheck);
};

let setInputValidation = () => {
    if ((nameCheck === null) || (nameCheck === undefined)) {
        alert("Não Há Ficha Selecionada! Selecione Uma Ficha Antes de Salvar.");
        return;
    }

    if (document.getElementById("charName").value === " ") {
        alert("Digite o Nome do Personagem Antes de Salvar a Ficha.");
        return;
    }

    if (document.getElementById("charName").value !== localStorage.getItem("nameCheck")) {
        alert("CUIDADO! O Nome do Personagem Foi Alterado.");
        sheetIdChange();
        return;
    }

    setInputValues();
}

// Saving information to local storage
let setInputValues = () => {
    
    // INDEX
    localStorage.setItem("charName" + nameCheck, document.getElementById("title").innerText);
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

    // ATRIBUTES & PLAYER STATUS
    localStorage.setItem("lifeBar" + nameCheck, document.getElementById("lifeBar").innerText);
    localStorage.setItem("sanityBar" + nameCheck, document.getElementById("sanityBar").innerText);
    localStorage.setItem("energyBar" + nameCheck, document.getElementById("energyBar").innerText);
    localStorage.setItem("exhaustSelect" + nameCheck, document.getElementById("exhaustSelect").value);
    localStorage.setItem("woundedCheck" + nameCheck, document.getElementById("woundedCheck").checked);
    localStorage.setItem("dyeingCheck" + nameCheck, document.getElementById("dyeingCheck").checked);
    localStorage.setItem("fail1" + nameCheck, document.getElementById("fail1").checked);
    localStorage.setItem("fail2" + nameCheck, document.getElementById("fail2").checked);
    localStorage.setItem("fail3" + nameCheck, document.getElementById("fail3").checked);
    localStorage.setItem("terrorizedCheck" + nameCheck, document.getElementById("terrorizedCheck").checked);
    localStorage.setItem("traumatizedCheck" + nameCheck, document.getElementById("traumatizedCheck").checked);
    localStorage.setItem("insaneCheck" + nameCheck, document.getElementById("insaneCheck").checked);
    localStorage.setItem("trainedSkillBonus" + nameCheck, document.getElementById("trainedSkillBonus").value);
    localStorage.setItem("nTrainedSkillBonus" + nameCheck, document.getElementById("nTrainedSkillBonus").value);
    localStorage.setItem("defense" + nameCheck, document.getElementById("defense").value);
    localStorage.setItem("block" + nameCheck, document.getElementById("block").value);
    localStorage.setItem("dodge" + nameCheck, document.getElementById("dodge").value);
    localStorage.setItem("armorWeight" + nameCheck, document.getElementById("armorWeight").value);
    localStorage.setItem("physicalRDMG" + nameCheck, document.getElementById("physicalRDMG").value);
    localStorage.setItem("balisticalRDMG" + nameCheck, document.getElementById("balisticalRDMG").value);
    localStorage.setItem("magialRDMG" + nameCheck, document.getElementById("magialRDMG").value);
    localStorage.setItem("velocity" + nameCheck, document.getElementById("velocity").value);
    localStorage.setItem("textArea5" + nameCheck, document.getElementById("textArea5").value);
    localStorage.setItem("strInput" + nameCheck, document.getElementById("strInput").value);
    localStorage.setItem("strModInput" + nameCheck, document.getElementById("strModInput").value);
    localStorage.setItem("agiInput" + nameCheck, document.getElementById("agiInput").value);
    localStorage.setItem("agiModInput" + nameCheck, document.getElementById("agiModInput").value);
    localStorage.setItem("vigInput" + nameCheck, document.getElementById("vigInput").value);
    localStorage.setItem("vigModInput" + nameCheck, document.getElementById("vigModInput").value);
    localStorage.setItem("intInput" + nameCheck, document.getElementById("intInput").value);
    localStorage.setItem("intModInput" + nameCheck, document.getElementById("intModInput").value);
    localStorage.setItem("wisInput" + nameCheck, document.getElementById("wisInput").value);
    localStorage.setItem("wisModInput" + nameCheck, document.getElementById("wisModInput").value);
    localStorage.setItem("chaInput" + nameCheck, document.getElementById("chaInput").value);
    //localStorage.setItem("chaModInput" + nameCheck, document.getElementById("chaModInput").value);
    localStorage.setItem("skillCheck1" + nameCheck, document.getElementById("skillCheck1").checked);
    localStorage.setItem("skillCheck2" + nameCheck, document.getElementById("skillCheck2").checked);
    localStorage.setItem("skillCheck3" + nameCheck, document.getElementById("skillCheck3").checked);
    localStorage.setItem("skillCheck4" + nameCheck, document.getElementById("skillCheck4").checked);
    localStorage.setItem("skillCheck5" + nameCheck, document.getElementById("skillCheck5").checked);
    localStorage.setItem("skillCheck6" + nameCheck, document.getElementById("skillCheck6").checked);
    localStorage.setItem("skillCheck7" + nameCheck, document.getElementById("skillCheck7").checked);
    localStorage.setItem("skillCheck8" + nameCheck, document.getElementById("skillCheck8").checked);
    localStorage.setItem("skillCheck9" + nameCheck, document.getElementById("skillCheck9").checked);
    localStorage.setItem("skillCheck10" + nameCheck, document.getElementById("skillCheck10").checked);
    localStorage.setItem("skillCheck11" + nameCheck, document.getElementById("skillCheck11").checked);
    localStorage.setItem("skillCheck12" + nameCheck, document.getElementById("skillCheck12").checked);
    localStorage.setItem("skillCheck13" + nameCheck, document.getElementById("skillCheck13").checked);
    localStorage.setItem("skillCheck14" + nameCheck, document.getElementById("skillCheck14").checked);
    localStorage.setItem("skillCheck15" + nameCheck, document.getElementById("skillCheck15").checked);
    localStorage.setItem("skillCheck16" + nameCheck, document.getElementById("skillCheck16").checked);
    localStorage.setItem("skillCheck17" + nameCheck, document.getElementById("skillCheck17").checked);
    localStorage.setItem("skillCheck19" + nameCheck, document.getElementById("skillCheck19").checked);
    localStorage.setItem("skillCheck20" + nameCheck, document.getElementById("skillCheck20").checked);
    localStorage.setItem("skillCheck21" + nameCheck, document.getElementById("skillCheck21").checked);
    localStorage.setItem("skillCheck22" + nameCheck, document.getElementById("skillCheck22").checked);
    localStorage.setItem("skillCheck23" + nameCheck, document.getElementById("skillCheck23").checked);
    localStorage.setItem("skill0" + nameCheck, document.getElementById("skill0").value);
    localStorage.setItem("skill1" + nameCheck, document.getElementById("skill1").value);
    localStorage.setItem("skill2" + nameCheck, document.getElementById("skill2").value);
    localStorage.setItem("skill3" + nameCheck, document.getElementById("skill3").value);
    localStorage.setItem("skill4" + nameCheck, document.getElementById("skill4").value);
    localStorage.setItem("skill5" + nameCheck, document.getElementById("skill5").value);
    localStorage.setItem("skill6" + nameCheck, document.getElementById("skill6").value);
    localStorage.setItem("skill7" + nameCheck, document.getElementById("skill7").value);
    localStorage.setItem("skill8" + nameCheck, document.getElementById("skill8").value);
    localStorage.setItem("skill9" + nameCheck, document.getElementById("skill9").value);
    localStorage.setItem("skill10" + nameCheck, document.getElementById("skill10").value);
    localStorage.setItem("skill11" + nameCheck, document.getElementById("skill11").value);
    localStorage.setItem("skill12" + nameCheck, document.getElementById("skill12").value);
    localStorage.setItem("skill13" + nameCheck, document.getElementById("skill13").value);
    localStorage.setItem("skill14" + nameCheck, document.getElementById("skill14").value);
    localStorage.setItem("skill15" + nameCheck, document.getElementById("skill15").value);
    localStorage.setItem("skill16" + nameCheck, document.getElementById("skill16").value);
    localStorage.setItem("skill17" + nameCheck, document.getElementById("skill17").value);
    localStorage.setItem("skill19" + nameCheck, document.getElementById("skill19").value);
    localStorage.setItem("skill20" + nameCheck, document.getElementById("skill20").value);
    localStorage.setItem("skill21" + nameCheck, document.getElementById("skill21").value);
    localStorage.setItem("skill22" + nameCheck, document.getElementById("skill22").value);
    localStorage.setItem("skill23" + nameCheck, document.getElementById("skill23").value);

    // COMBAT
    localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerHTML);
    localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerHTML);
    localStorage.setItem("editableArea5" + nameCheck, document.getElementById("editableArea5").innerHTML);
    localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerHTML);
    localStorage.setItem("editableArea7" + nameCheck, document.getElementById("editableArea7").innerHTML);
    localStorage.setItem("editableArea8" + nameCheck, document.getElementById("editableArea8").innerHTML);
    localStorage.setItem("editableArea9" + nameCheck, document.getElementById("editableArea9").innerHTML);
    localStorage.setItem("editableArea10" + nameCheck, document.getElementById("editableArea10").innerHTML);
    localStorage.setItem("editableArea11" + nameCheck, document.getElementById("editableArea11").innerHTML);
    localStorage.setItem("editableArea12" + nameCheck, document.getElementById("editableArea12").innerHTML);

    // INVENTORY
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("coin3" + nameCheck, document.getElementById("coin3").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerHTML);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerHTML);

    // NOTES
    localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerHTML);

    window.alert("Ficha SALVA com Sucesso: " + nameCheck.toUpperCase() + "\n\nLembre-se de Fazer Backup de Sua Ficha!");
};