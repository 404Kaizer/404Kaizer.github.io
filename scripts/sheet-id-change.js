let sheetIdChange = () => {

    nameCheck = localStorage.getItem("nameCheck");

    // DELETAR INDEX
    localStorage.removeItem("nameCheck");
    localStorage.removeItem("titlePersonagem");
    localStorage.removeItem("charImg" + nameCheck);
    localStorage.removeItem("charName" + nameCheck);
    localStorage.removeItem("charExp" + nameCheck);
    localStorage.removeItem("charRaceSex" + nameCheck);
    localStorage.removeItem("charExpert" + nameCheck);
    localStorage.removeItem("charAge" + nameCheck);
    localStorage.removeItem("charAlignment" + nameCheck);
    localStorage.removeItem("charStature" + nameCheck);
    localStorage.removeItem("charLangs" + nameCheck);
    localStorage.removeItem("backgroundArea" + nameCheck);
    localStorage.removeItem("textArea1" + nameCheck);
    localStorage.removeItem("textArea2" + nameCheck);
    localStorage.removeItem("textArea3" + nameCheck);
    localStorage.removeItem("textArea4" + nameCheck);

    // DELETAR ATRIBUTES & PLAYER STATUS
    localStorage.removeItem("lifeBar" + nameCheck);
    localStorage.removeItem("sanityBar" + nameCheck);
    localStorage.removeItem("energyBar" + nameCheck);
    localStorage.removeItem("exhaustSelect" + nameCheck);
    localStorage.removeItem("woundedCheck" + nameCheck);
    localStorage.removeItem("dyeingCheck" + nameCheck);
    localStorage.removeItem("fail1" + nameCheck);
    localStorage.removeItem("fail2" + nameCheck);
    localStorage.removeItem("fail3" + nameCheck);
    localStorage.removeItem("terrorizedCheck" + nameCheck);
    localStorage.removeItem("traumatizedCheck" + nameCheck);
    localStorage.removeItem("insaneCheck" + nameCheck);
    //localStorage.removeItem("trainedSkillBonus" + nameCheck);
    //localStorage.removeItem("nTrainedSkillBonus" + nameCheck);
    localStorage.removeItem("defense" + nameCheck);
    localStorage.removeItem("block" + nameCheck);
    localStorage.removeItem("dodge" + nameCheck);
    localStorage.removeItem("armorWeight" + nameCheck);
    localStorage.removeItem("physicalRDMG" + nameCheck);
    localStorage.removeItem("balisticalRDMG" + nameCheck);
    localStorage.removeItem("magicalRDMG" + nameCheck);
    localStorage.removeItem("velocity" + nameCheck);
    localStorage.removeItem("textArea5" + nameCheck);
    localStorage.removeItem("textArea6" + nameCheck);
    //localStorage.removeItem("strModInput" + nameCheck);
    localStorage.removeItem("agiInput" + nameCheck);
    //localStorage.removeItem("agiModInput" + nameCheck);
    localStorage.removeItem("vigInput" + nameCheck);
    //localStorage.removeItem("vigModInput" + nameCheck);
    localStorage.removeItem("intInput" + nameCheck);
    //localStorage.removeItem("intModInput" + nameCheck);
    localStorage.removeItem("wisInput" + nameCheck);
    //localStorage.removeItem("wisModInput" + nameCheck);
    localStorage.removeItem("chaInput" + nameCheck);
    //localStorage.removeItem("chaModInput" + nameCheck);
    localStorage.removeItem("skillRadio1" + nameCheck);
    localStorage.removeItem("skillRadio2" + nameCheck);
    localStorage.removeItem("skillRadio3" + nameCheck);
    localStorage.removeItem("skillRadio4" + nameCheck);
    localStorage.removeItem("skillRadio5" + nameCheck);
    localStorage.removeItem("skillRadio6" + nameCheck);
    localStorage.removeItem("skillRadio7" + nameCheck);
    localStorage.removeItem("skillRadio8" + nameCheck);
    localStorage.removeItem("skillRadio9" + nameCheck);
    localStorage.removeItem("skillRadio10" + nameCheck);
    localStorage.removeItem("skillRadio11" + nameCheck);
    localStorage.removeItem("skillRadio12" + nameCheck);
    localStorage.removeItem("skillRadio13" + nameCheck);
    localStorage.removeItem("skillRadio14" + nameCheck);
    localStorage.removeItem("skillRadio15" + nameCheck);
    localStorage.removeItem("skillRadio16" + nameCheck);
    localStorage.removeItem("skillRadio17" + nameCheck);
    localStorage.removeItem("skillRadio18" + nameCheck);
    localStorage.removeItem("skillRadio19" + nameCheck);
    localStorage.removeItem("skillRadio20" + nameCheck);
    localStorage.removeItem("skillRadio21" + nameCheck);
    localStorage.removeItem("skillRadio22" + nameCheck);
    localStorage.removeItem("skillRadio23" + nameCheck);
    localStorage.removeItem("skillRadio24" + nameCheck);
    localStorage.removeItem("skillRadio25" + nameCheck);
    localStorage.removeItem("skillRadio26" + nameCheck);
    localStorage.removeItem("skillRadio27" + nameCheck);
    localStorage.removeItem("skillRadio28" + nameCheck);
    localStorage.removeItem("skillRadio29" + nameCheck);
    localStorage.removeItem("skillRadio30" + nameCheck);
    localStorage.removeItem("skillRadio31" + nameCheck);
    localStorage.removeItem("skillRadio32" + nameCheck);
    localStorage.removeItem("skillRadio33" + nameCheck);
    localStorage.removeItem("skillRadio34" + nameCheck);
    localStorage.removeItem("skillRadio35" + nameCheck);
    localStorage.removeItem("skillRadio36" + nameCheck);
    localStorage.removeItem("skillRadio37" + nameCheck);
    localStorage.removeItem("skillRadio38" + nameCheck);
    localStorage.removeItem("skillRadio39" + nameCheck);
    localStorage.removeItem("skillRadio40" + nameCheck);
    localStorage.removeItem("skillRadio41" + nameCheck);
    localStorage.removeItem("skillRadio42" + nameCheck);
    localStorage.removeItem("skillRadio43" + nameCheck);
    localStorage.removeItem("skillRadio44" + nameCheck);
    localStorage.removeItem("skillRadio45" + nameCheck);
    localStorage.removeItem("skillRadio46" + nameCheck);
    localStorage.removeItem("skillRadio47" + nameCheck);
    localStorage.removeItem("skillRadio48" + nameCheck);
    localStorage.removeItem("skillRadio49" + nameCheck);
    localStorage.removeItem("skillRadio50" + nameCheck);
    localStorage.removeItem("skillRadio51" + nameCheck);
    localStorage.removeItem("skillRadio52" + nameCheck);
    localStorage.removeItem("skillRadio53" + nameCheck);
    localStorage.removeItem("skillRadio54" + nameCheck);
    localStorage.removeItem("skillRadio55" + nameCheck);
    localStorage.removeItem("skillRadio56" + nameCheck);
    localStorage.removeItem("skillRadio57" + nameCheck);
    localStorage.removeItem("skillRadio58" + nameCheck);
    localStorage.removeItem("skillRadio59" + nameCheck);
    localStorage.removeItem("skillRadio60" + nameCheck);
    localStorage.removeItem("skillRadio61" + nameCheck);
    localStorage.removeItem("skillRadio62" + nameCheck);
    localStorage.removeItem("skillRadio63" + nameCheck);
    localStorage.removeItem("skillRadio64" + nameCheck);
    localStorage.removeItem("skillRadio65" + nameCheck);
    localStorage.removeItem("skillRadio66" + nameCheck);
    localStorage.removeItem("skillRadio67" + nameCheck);
    localStorage.removeItem("skillRadio68" + nameCheck);
    localStorage.removeItem("skillRadio69" + nameCheck);
    localStorage.removeItem("skillRadio70" + nameCheck);
    localStorage.removeItem("skillRadio71" + nameCheck);
    localStorage.removeItem("skillRadio72" + nameCheck);
    localStorage.removeItem("skillRadio73" + nameCheck);
    localStorage.removeItem("skillRadio74" + nameCheck);
    localStorage.removeItem("skillRadio75" + nameCheck);
    localStorage.removeItem("skillRadio76" + nameCheck);
    localStorage.removeItem("skillRadio77" + nameCheck);
    localStorage.removeItem("skillRadio78" + nameCheck);
    localStorage.removeItem("skillRadio79" + nameCheck);
    localStorage.removeItem("skillRadio80" + nameCheck);
    localStorage.removeItem("skillRadio81" + nameCheck);
    localStorage.removeItem("skillRadio82" + nameCheck);
    localStorage.removeItem("skillRadio83" + nameCheck);
    localStorage.removeItem("skillRadio84" + nameCheck);
    localStorage.removeItem("skillRadio85" + nameCheck);
    localStorage.removeItem("skillRadio86" + nameCheck);
    localStorage.removeItem("skillRadio87" + nameCheck);
    localStorage.removeItem("skillRadio88" + nameCheck);
    localStorage.removeItem("skillRadio89" + nameCheck);
    localStorage.removeItem("skillRadio90" + nameCheck);
    localStorage.removeItem("skillRadio91" + nameCheck);
    localStorage.removeItem("skillRadio92" + nameCheck);
    localStorage.removeItem("skillRadio93" + nameCheck);
    localStorage.removeItem("skillRadio94" + nameCheck);
    localStorage.removeItem("skillRadio95" + nameCheck);
    localStorage.removeItem("skillRadio96" + nameCheck);
    localStorage.removeItem("unskillRadio1" + nameCheck);
    localStorage.removeItem("unskillRadio2" + nameCheck);
    localStorage.removeItem("unskillRadio3" + nameCheck);
    localStorage.removeItem("unskillRadio4" + nameCheck);
    localStorage.removeItem("unskillRadio5" + nameCheck);
    localStorage.removeItem("unskillRadio6" + nameCheck);
    localStorage.removeItem("unskillRadio7" + nameCheck);
    localStorage.removeItem("unskillRadio8" + nameCheck);
    localStorage.removeItem("unskillRadio9" + nameCheck);
    localStorage.removeItem("unskillRadio10" + nameCheck);
    localStorage.removeItem("unskillRadio11" + nameCheck);
    localStorage.removeItem("unskillRadio12" + nameCheck);
    localStorage.removeItem("unskillRadio13" + nameCheck);
    localStorage.removeItem("unskillRadio14" + nameCheck);
    localStorage.removeItem("unskillRadio15" + nameCheck);
    localStorage.removeItem("unskillRadio16" + nameCheck);
    localStorage.removeItem("unskillRadio17" + nameCheck);
    localStorage.removeItem("unskillRadio18" + nameCheck);
    localStorage.removeItem("unskillRadio19" + nameCheck);
    localStorage.removeItem("unskillRadio20" + nameCheck);
    localStorage.removeItem("unskillRadio21" + nameCheck);
    localStorage.removeItem("unskillRadio22" + nameCheck);
    localStorage.removeItem("unskillRadio23" + nameCheck);
    localStorage.removeItem("unskillRadio24" + nameCheck);
    localStorage.removeItem("skill0" + nameCheck);
    localStorage.removeItem("skill1" + nameCheck);
    localStorage.removeItem("skill2" + nameCheck);
    localStorage.removeItem("skill3" + nameCheck);
    localStorage.removeItem("skill4" + nameCheck);
    localStorage.removeItem("skill5" + nameCheck);
    localStorage.removeItem("skill6" + nameCheck);
    localStorage.removeItem("skill7" + nameCheck);
    localStorage.removeItem("skill8" + nameCheck);
    localStorage.removeItem("skill9" + nameCheck);
    localStorage.removeItem("skill10" + nameCheck);
    localStorage.removeItem("skill11" + nameCheck);
    localStorage.removeItem("skill12" + nameCheck);
    localStorage.removeItem("skill13" + nameCheck);
    localStorage.removeItem("skill14" + nameCheck);
    localStorage.removeItem("skill15" + nameCheck);
    localStorage.removeItem("skill16" + nameCheck);
    localStorage.removeItem("skill17" + nameCheck);
    localStorage.removeItem("skill19" + nameCheck);
    localStorage.removeItem("skill20" + nameCheck);
    localStorage.removeItem("skill21" + nameCheck);
    localStorage.removeItem("skill22" + nameCheck);
    localStorage.removeItem("skill23" + nameCheck);
    localStorage.removeItem("skill24" + nameCheck);
    localStorage.removeItem("skill25" + nameCheck);
    localStorage.removeItem("skill26" + nameCheck);

    // DELETAR COMBAT
    localStorage.removeItem("editableArea3" + nameCheck);
    localStorage.removeItem("editableArea4" + nameCheck);
    localStorage.removeItem("editableArea6" + nameCheck);
    localStorage.removeItem("editableArea7" + nameCheck);
    localStorage.removeItem("editableArea8" + nameCheck);
    localStorage.removeItem("editableArea9" + nameCheck);
    localStorage.removeItem("editableArea10" + nameCheck);
    localStorage.removeItem("editableArea11" + nameCheck);
    localStorage.removeItem("editableArea12" + nameCheck);

    // DELETAR INVENTORY
    localStorage.removeItem("coin1" + nameCheck);
    localStorage.removeItem("coin2" + nameCheck);
    localStorage.removeItem("coin3" + nameCheck);
    localStorage.removeItem("weight1" + nameCheck);
    localStorage.removeItem("weight2" + nameCheck);
    localStorage.removeItem("editableArea1" + nameCheck);
    localStorage.removeItem("editableArea2" + nameCheck);

    // DELETAR NOTES
    localStorage.removeItem("editableArea" + nameCheck);

    newName = document.getElementById("charName").value;
    nameCheck = newName;

    // SALVAR INDEX
    localStorage.setItem("nameCheck", nameCheck);
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

    // SALVAR ATRIBUTES & PLAYER STATUS
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
    //localStorage.setItem("trainedSkillBonus" + nameCheck, document.getElementById("trainedSkillBonus").value);
    //localStorage.setItem("nTrainedSkillBonus" + nameCheck, document.getElementById("nTrainedSkillBonus").value);
    localStorage.setItem("defense" + nameCheck, document.getElementById("defense").value);
    localStorage.setItem("block" + nameCheck, document.getElementById("block").value);
    localStorage.setItem("dodge" + nameCheck, document.getElementById("dodge").value);
    localStorage.setItem("armorWeight" + nameCheck, document.getElementById("armorWeight").value);
    localStorage.setItem("physicalRDMG" + nameCheck, document.getElementById("physicalRDMG").value);
    localStorage.setItem("balisticalRDMG" + nameCheck, document.getElementById("balisticalRDMG").value);
    localStorage.setItem("magicalRDMG" + nameCheck, document.getElementById("magicalRDMG").value);
    localStorage.setItem("velocity" + nameCheck, document.getElementById("velocity").value);
    localStorage.setItem("textArea5" + nameCheck, document.getElementById("textArea5").value);
    localStorage.setItem("textArea6" + nameCheck, document.getElementById("textArea6").value);
    localStorage.setItem("strInput" + nameCheck, document.getElementById("strInput").value);
    //localStorage.setItem("strModInput" + nameCheck, document.getElementById("strModInput").value);
    localStorage.setItem("agiInput" + nameCheck, document.getElementById("agiInput").value);
    //localStorage.setItem("agiModInput" + nameCheck, document.getElementById("agiModInput").value);
    localStorage.setItem("vigInput" + nameCheck, document.getElementById("vigInput").value);
    //localStorage.setItem("vigModInput" + nameCheck, document.getElementById("vigModInput").value);
    localStorage.setItem("intInput" + nameCheck, document.getElementById("intInput").value);
    //localStorage.setItem("intModInput" + nameCheck, document.getElementById("intModInput").value);
    localStorage.setItem("wisInput" + nameCheck, document.getElementById("wisInput").value);
    //localStorage.setItem("wisModInput" + nameCheck, document.getElementById("wisModInput").value);
    localStorage.setItem("chaInput" + nameCheck, document.getElementById("chaInput").value);
    //localStorage.setItem("chaModInput" + nameCheck, document.getElementById("chaModInput").value);
    localStorage.setItem("skillRadio1" + nameCheck, document.getElementById("skillRadio1").checked);
    localStorage.setItem("skillRadio2" + nameCheck, document.getElementById("skillRadio2").checked);
    localStorage.setItem("skillRadio3" + nameCheck, document.getElementById("skillRadio3").checked);
    localStorage.setItem("skillRadio4" + nameCheck, document.getElementById("skillRadio4").checked);
    localStorage.setItem("skillRadio5" + nameCheck, document.getElementById("skillRadio5").checked);
    localStorage.setItem("skillRadio6" + nameCheck, document.getElementById("skillRadio6").checked);
    localStorage.setItem("skillRadio7" + nameCheck, document.getElementById("skillRadio7").checked);
    localStorage.setItem("skillRadio8" + nameCheck, document.getElementById("skillRadio8").checked);
    localStorage.setItem("skillRadio9" + nameCheck, document.getElementById("skillRadio9").checked);
    localStorage.setItem("skillRadio10" + nameCheck, document.getElementById("skillRadio10").checked);
    localStorage.setItem("skillRadio11" + nameCheck, document.getElementById("skillRadio11").checked);
    localStorage.setItem("skillRadio12" + nameCheck, document.getElementById("skillRadio12").checked);
    localStorage.setItem("skillRadio13" + nameCheck, document.getElementById("skillRadio13").checked);
    localStorage.setItem("skillRadio14" + nameCheck, document.getElementById("skillRadio14").checked);
    localStorage.setItem("skillRadio15" + nameCheck, document.getElementById("skillRadio15").checked);
    localStorage.setItem("skillRadio16" + nameCheck, document.getElementById("skillRadio16").checked);
    localStorage.setItem("skillRadio17" + nameCheck, document.getElementById("skillRadio17").checked);
    localStorage.setItem("skillRadio18" + nameCheck, document.getElementById("skillRadio18").checked);
    localStorage.setItem("skillRadio19" + nameCheck, document.getElementById("skillRadio19").checked);
    localStorage.setItem("skillRadio20" + nameCheck, document.getElementById("skillRadio20").checked);
    localStorage.setItem("skillRadio21" + nameCheck, document.getElementById("skillRadio21").checked);
    localStorage.setItem("skillRadio22" + nameCheck, document.getElementById("skillRadio22").checked);
    localStorage.setItem("skillRadio23" + nameCheck, document.getElementById("skillRadio23").checked);
    localStorage.setItem("skillRadio24" + nameCheck, document.getElementById("skillRadio24").checked);
    localStorage.setItem("skillRadio25" + nameCheck, document.getElementById("skillRadio25").checked);
    localStorage.setItem("skillRadio26" + nameCheck, document.getElementById("skillRadio26").checked);
    localStorage.setItem("skillRadio27" + nameCheck, document.getElementById("skillRadio27").checked);
    localStorage.setItem("skillRadio28" + nameCheck, document.getElementById("skillRadio28").checked);
    localStorage.setItem("skillRadio29" + nameCheck, document.getElementById("skillRadio29").checked);
    localStorage.setItem("skillRadio30" + nameCheck, document.getElementById("skillRadio30").checked);
    localStorage.setItem("skillRadio31" + nameCheck, document.getElementById("skillRadio31").checked);
    localStorage.setItem("skillRadio32" + nameCheck, document.getElementById("skillRadio32").checked);
    localStorage.setItem("skillRadio33" + nameCheck, document.getElementById("skillRadio33").checked);
    localStorage.setItem("skillRadio34" + nameCheck, document.getElementById("skillRadio34").checked);
    localStorage.setItem("skillRadio35" + nameCheck, document.getElementById("skillRadio35").checked);
    localStorage.setItem("skillRadio36" + nameCheck, document.getElementById("skillRadio36").checked);
    localStorage.setItem("skillRadio37" + nameCheck, document.getElementById("skillRadio37").checked);
    localStorage.setItem("skillRadio38" + nameCheck, document.getElementById("skillRadio38").checked);
    localStorage.setItem("skillRadio39" + nameCheck, document.getElementById("skillRadio39").checked);
    localStorage.setItem("skillRadio40" + nameCheck, document.getElementById("skillRadio40").checked);
    localStorage.setItem("skillRadio41" + nameCheck, document.getElementById("skillRadio41").checked);
    localStorage.setItem("skillRadio42" + nameCheck, document.getElementById("skillRadio42").checked);
    localStorage.setItem("skillRadio43" + nameCheck, document.getElementById("skillRadio43").checked);
    localStorage.setItem("skillRadio44" + nameCheck, document.getElementById("skillRadio44").checked);
    localStorage.setItem("skillRadio45" + nameCheck, document.getElementById("skillRadio45").checked);
    localStorage.setItem("skillRadio46" + nameCheck, document.getElementById("skillRadio46").checked);
    localStorage.setItem("skillRadio47" + nameCheck, document.getElementById("skillRadio47").checked);
    localStorage.setItem("skillRadio48" + nameCheck, document.getElementById("skillRadio48").checked);
    localStorage.setItem("skillRadio49" + nameCheck, document.getElementById("skillRadio49").checked);
    localStorage.setItem("skillRadio50" + nameCheck, document.getElementById("skillRadio50").checked);
    localStorage.setItem("skillRadio51" + nameCheck, document.getElementById("skillRadio51").checked);
    localStorage.setItem("skillRadio52" + nameCheck, document.getElementById("skillRadio52").checked);
    localStorage.setItem("skillRadio53" + nameCheck, document.getElementById("skillRadio53").checked);
    localStorage.setItem("skillRadio54" + nameCheck, document.getElementById("skillRadio54").checked);
    localStorage.setItem("skillRadio55" + nameCheck, document.getElementById("skillRadio55").checked);
    localStorage.setItem("skillRadio56" + nameCheck, document.getElementById("skillRadio56").checked);
    localStorage.setItem("skillRadio57" + nameCheck, document.getElementById("skillRadio57").checked);
    localStorage.setItem("skillRadio58" + nameCheck, document.getElementById("skillRadio58").checked);
    localStorage.setItem("skillRadio59" + nameCheck, document.getElementById("skillRadio59").checked);
    localStorage.setItem("skillRadio60" + nameCheck, document.getElementById("skillRadio60").checked);
    localStorage.setItem("skillRadio61" + nameCheck, document.getElementById("skillRadio61").checked);
    localStorage.setItem("skillRadio62" + nameCheck, document.getElementById("skillRadio62").checked);
    localStorage.setItem("skillRadio63" + nameCheck, document.getElementById("skillRadio63").checked);
    localStorage.setItem("skillRadio64" + nameCheck, document.getElementById("skillRadio65").checked);
    localStorage.setItem("skillRadio65" + nameCheck, document.getElementById("skillRadio64").checked);
    localStorage.setItem("skillRadio66" + nameCheck, document.getElementById("skillRadio66").checked);
    localStorage.setItem("skillRadio67" + nameCheck, document.getElementById("skillRadio67").checked);
    localStorage.setItem("skillRadio68" + nameCheck, document.getElementById("skillRadio68").checked);
    localStorage.setItem("skillRadio69" + nameCheck, document.getElementById("skillRadio69").checked);
    localStorage.setItem("skillRadio70" + nameCheck, document.getElementById("skillRadio70").checked);
    localStorage.setItem("skillRadio71" + nameCheck, document.getElementById("skillRadio71").checked);
    localStorage.setItem("skillRadio72" + nameCheck, document.getElementById("skillRadio72").checked);
    localStorage.setItem("skillRadio73" + nameCheck, document.getElementById("skillRadio73").checked);
    localStorage.setItem("skillRadio74" + nameCheck, document.getElementById("skillRadio74").checked);
    localStorage.setItem("skillRadio75" + nameCheck, document.getElementById("skillRadio75").checked);
    localStorage.setItem("skillRadio76" + nameCheck, document.getElementById("skillRadio76").checked);
    localStorage.setItem("skillRadio77" + nameCheck, document.getElementById("skillRadio77").checked);
    localStorage.setItem("skillRadio78" + nameCheck, document.getElementById("skillRadio78").checked);
    localStorage.setItem("skillRadio79" + nameCheck, document.getElementById("skillRadio79").checked);
    localStorage.setItem("skillRadio80" + nameCheck, document.getElementById("skillRadio80").checked);
    localStorage.setItem("skillRadio81" + nameCheck, document.getElementById("skillRadio81").checked);
    localStorage.setItem("skillRadio82" + nameCheck, document.getElementById("skillRadio82").checked);
    localStorage.setItem("skillRadio83" + nameCheck, document.getElementById("skillRadio83").checked);
    localStorage.setItem("skillRadio84" + nameCheck, document.getElementById("skillRadio84").checked);
    localStorage.setItem("skillRadio85" + nameCheck, document.getElementById("skillRadio85").checked);
    localStorage.setItem("skillRadio86" + nameCheck, document.getElementById("skillRadio86").checked);
    localStorage.setItem("skillRadio87" + nameCheck, document.getElementById("skillRadio87").checked);
    localStorage.setItem("skillRadio88" + nameCheck, document.getElementById("skillRadio88").checked);
    localStorage.setItem("skillRadio89" + nameCheck, document.getElementById("skillRadio89").checked);
    localStorage.setItem("skillRadio90" + nameCheck, document.getElementById("skillRadio90").checked);
    localStorage.setItem("skillRadio91" + nameCheck, document.getElementById("skillRadio91").checked);
    localStorage.setItem("skillRadio92" + nameCheck, document.getElementById("skillRadio92").checked);
    localStorage.setItem("skillRadio93" + nameCheck, document.getElementById("skillRadio93").checked);
    localStorage.setItem("skillRadio94" + nameCheck, document.getElementById("skillRadio94").checked);
    localStorage.setItem("skillRadio95" + nameCheck, document.getElementById("skillRadio95").checked);
    localStorage.setItem("skillRadio96" + nameCheck, document.getElementById("skillRadio96").checked);
    localStorage.setItem("unskillRadio1" + nameCheck, document.getElementById("unskillRadio1").checked);
    localStorage.setItem("unskillRadio2" + nameCheck, document.getElementById("unskillRadio2").checked);
    localStorage.setItem("unskillRadio3" + nameCheck, document.getElementById("unskillRadio3").checked);
    localStorage.setItem("unskillRadio4" + nameCheck, document.getElementById("unskillRadio4").checked);
    localStorage.setItem("unskillRadio5" + nameCheck, document.getElementById("unskillRadio5").checked);
    localStorage.setItem("unskillRadio6" + nameCheck, document.getElementById("unskillRadio6").checked);
    localStorage.setItem("unskillRadio7" + nameCheck, document.getElementById("unskillRadio7").checked);
    localStorage.setItem("unskillRadio8" + nameCheck, document.getElementById("unskillRadio8").checked);
    localStorage.setItem("unskillRadio9" + nameCheck, document.getElementById("unskillRadio9").checked);
    localStorage.setItem("unskillRadio10" + nameCheck, document.getElementById("unskillRadio10").checked);
    localStorage.setItem("unskillRadio11" + nameCheck, document.getElementById("unskillRadio11").checked);
    localStorage.setItem("unskillRadio12" + nameCheck, document.getElementById("unskillRadio12").checked);
    localStorage.setItem("unskillRadio13" + nameCheck, document.getElementById("unskillRadio13").checked);
    localStorage.setItem("unskillRadio14" + nameCheck, document.getElementById("unskillRadio14").checked);
    localStorage.setItem("unskillRadio15" + nameCheck, document.getElementById("unskillRadio15").checked);
    localStorage.setItem("unskillRadio16" + nameCheck, document.getElementById("unskillRadio16").checked);
    localStorage.setItem("unskillRadio17" + nameCheck, document.getElementById("unskillRadio17").checked);
    localStorage.setItem("unskillRadio18" + nameCheck, document.getElementById("unskillRadio18").checked);
    localStorage.setItem("unskillRadio19" + nameCheck, document.getElementById("unskillRadio19").checked);
    localStorage.setItem("unskillRadio20" + nameCheck, document.getElementById("unskillRadio20").checked);
    localStorage.setItem("unskillRadio21" + nameCheck, document.getElementById("unskillRadio21").checked);
    localStorage.setItem("unskillRadio22" + nameCheck, document.getElementById("unskillRadio22").checked);
    localStorage.setItem("unskillRadio23" + nameCheck, document.getElementById("unskillRadio23").checked);
    localStorage.setItem("unskillRadio24" + nameCheck, document.getElementById("unskillRadio24").checked);
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
    localStorage.setItem("skill24" + nameCheck, document.getElementById("skill24").value);
    localStorage.setItem("skill25" + nameCheck, document.getElementById("skill25").value);
    localStorage.setItem("skill26" + nameCheck, document.getElementById("skill26").value);

    // SALVAR COMBAT
    localStorage.setItem("editableArea3" + nameCheck, document.getElementById("editableArea3").innerHTML);
    localStorage.setItem("editableArea4" + nameCheck, document.getElementById("editableArea4").innerHTML);
    localStorage.setItem("editableArea6" + nameCheck, document.getElementById("editableArea6").innerHTML);
    localStorage.setItem("editableArea7" + nameCheck, document.getElementById("editableArea7").innerHTML);
    localStorage.setItem("editableArea8" + nameCheck, document.getElementById("editableArea8").innerHTML);
    localStorage.setItem("editableArea9" + nameCheck, document.getElementById("editableArea9").innerHTML);
    localStorage.setItem("editableArea10" + nameCheck, document.getElementById("editableArea10").innerHTML);
    localStorage.setItem("editableArea11" + nameCheck, document.getElementById("editableArea11").innerHTML);
    localStorage.setItem("editableArea12" + nameCheck, document.getElementById("editableArea12").innerHTML);

    // SALVAR INVENTORY
    localStorage.setItem("coin1" + nameCheck, document.getElementById("coin1").value);
    localStorage.setItem("coin2" + nameCheck, document.getElementById("coin2").value);
    localStorage.setItem("coin3" + nameCheck, document.getElementById("coin3").value);
    localStorage.setItem("weight1" + nameCheck, document.getElementById("weight1").value);
    localStorage.setItem("weight2" + nameCheck, document.getElementById("weight2").value);
    localStorage.setItem("editableArea1" + nameCheck, document.getElementById("editableArea1").innerHTML);
    localStorage.setItem("editableArea2" + nameCheck, document.getElementById("editableArea2").innerHTML);

    // SALVAR NOTES
    localStorage.setItem("editableArea" + nameCheck, document.getElementById("editableArea").innerHTML);

    window.alert("O ID da Sua Ficha Foi Alterado Para: " + nameCheck.toUpperCase());
    getInputValues()
    location.reload();
};