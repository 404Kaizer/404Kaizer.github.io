let sheetDeletionValidation = () => {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Deletar ou Digite *** Para Deletar TODAS as Fichas: ");

    deleteSheet()
}

let deleteSheet = () => {
    if (nameCheck !== localStorage.getItem("charName" + nameCheck)) {
        alert("Nenhum Personagem Selecionado ou Não Existe. Digite o Nome do Personagem Para Continuar ou Clique em Cancelar.");
        sheetDeletionValidation();
    }

    if (nameCheck === "***") {
        confirm("Você Quer Apagar TODAS as Fichas Salvas Neste Navegador?");
        localStorage.clear();
        confirm("Todas as Fichas Foram Deletadas!");
        location.reload();
    }
    
    if (nameCheck === localStorage.getItem("charName" + nameCheck)) {
        // INDEX
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

        // ATRIBUTES & PLAYER STATUS
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
        localStorage.removeItem("strInput" + nameCheck);
        localStorage.removeItem("strModInput" + nameCheck);
        //localStorage.removeItem("agiInput" + nameCheck);
        localStorage.removeItem("agiModInput" + nameCheck);
        //localStorage.removeItem("vigInput" + nameCheck);
        localStorage.removeItem("vigModInput" + nameCheck);
        //localStorage.removeItem("intInput" + nameCheck);
        localStorage.removeItem("intModInput" + nameCheck);
        //localStorage.removeItem("wisInput" + nameCheck);
        localStorage.removeItem("wisModInput" + nameCheck);
        //localStorage.removeItem("chaInput" + nameCheck);
        localStorage.removeItem("chaModInput" + nameCheck);
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

        // COMBAT
        localStorage.removeItem("editableArea3" + nameCheck);
        localStorage.removeItem("editableArea4" + nameCheck);
        localStorage.removeItem("editableArea6" + nameCheck);
        localStorage.removeItem("editableArea7" + nameCheck);
        localStorage.removeItem("editableArea8" + nameCheck);
        localStorage.removeItem("editableArea9" + nameCheck);
        localStorage.removeItem("editableArea10" + nameCheck);
        localStorage.removeItem("editableArea11" + nameCheck);
        localStorage.removeItem("editableArea12" + nameCheck);

        // INVENTORY
        localStorage.removeItem("coin1" + nameCheck);
        localStorage.removeItem("coin2" + nameCheck);
        localStorage.removeItem("coin3" + nameCheck);
        localStorage.removeItem("weight1" + nameCheck);
        localStorage.removeItem("weight2" + nameCheck);
        localStorage.removeItem("editableArea1" + nameCheck);
        localStorage.removeItem("editableArea2" + nameCheck);

        // NOTES
        localStorage.removeItem("editableArea" + nameCheck);

        window.alert("Ficha DELETADA com Sucesso: " + nameCheck.toUpperCase());

        location.reload();
    } 
}