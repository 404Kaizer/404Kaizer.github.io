let setSkills = () => {
    let trainedSkillBonus = parseInt(document.getElementById("trainedSkillBonus").value);
    let nTrainedSkillBonus = parseInt(document.getElementById("nTrainedSkillBonus").value);
    let strModInput = parseInt(document.getElementById("strModInput").value);
    let agiModInput = parseInt(document.getElementById("agiModInput").value);
    let conModInput = parseInt(document.getElementById("conModInput").value);
    let intModInput = parseInt(document.getElementById("intModInput").value);
    let wisModInput = parseInt(document.getElementById("wisModInput").value);
    let chaModInput = parseInt(document.getElementById("chaModInput").value);

    if (document.getElementById("skillCheck2").checked == true) {
        document.getElementById("skill2").value = trainedSkillBonus + strModInput;
        if (document.getElementById("skill2").value > 0) {
            document.getElementById("skill2").value = "+" + document.getElementById("skill2").value;
        }
    } else {
        document.getElementById("skill2").value = nTrainedSkillBonus + strModInput;
        if (document.getElementById("skill2").value > 0) {
            document.getElementById("skill2").value = "+" + document.getElementById("skill2").value;
        }
    }

    if (document.getElementById("skillCheck3").checked == true) {
        document.getElementById("skill3").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill3").value > 0) {
            document.getElementById("skill3").value = "+" + document.getElementById("skill3").value;
        }
    } else {
        document.getElementById("skill3").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill3").value > 0) {
            document.getElementById("skill3").value = "+" + document.getElementById("skill3").value;
        }
    }

    if (document.getElementById("skillCheck4").checked == true) {
        document.getElementById("skill4").value = trainedSkillBonus + conModInput;
        if (document.getElementById("skill4").value > 0) {
            document.getElementById("skill4").value = "+" + document.getElementById("skill4").value;
        }
    } else {
        document.getElementById("skill4").value = nTrainedSkillBonus + conModInput;
        if (document.getElementById("skill4").value > 0) {
            document.getElementById("skill4").value = "+" + document.getElementById("skill4").value;
        }
    }

    if (document.getElementById("skillCheck5").checked == true) {
        document.getElementById("skill5").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill5").value > 0) {
            document.getElementById("skill5").value = "+" + document.getElementById("skill5").value;
        }
    } else {
        document.getElementById("skill5").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill5").value > 0) {
            document.getElementById("skill5").value = "+" + document.getElementById("skill5").value;
        }
    }

    if (document.getElementById("skillCheck6").checked == true) {
        document.getElementById("skill6").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill6").value > 0) {
            document.getElementById("skill6").value = "+" + document.getElementById("skill6").value;
        }
    } else {
        document.getElementById("skill6").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill6").value > 0) {
            document.getElementById("skill6").value = "+" + document.getElementById("skill6").value;
        }
    }

    if (document.getElementById("skillCheck7").checked == true) {
        document.getElementById("skill7").value = trainedSkillBonus + strModInput;
        if (document.getElementById("skill7").value > 0) {
            document.getElementById("skill7").value = "+" + document.getElementById("skill7").value;
        }
    } else {
        document.getElementById("skill7").value = nTrainedSkillBonus + strModInput;
        if (document.getElementById("skill7").value > 0) {
            document.getElementById("skill7").value = "+" + document.getElementById("skill7").value;
        }
    }

    if (document.getElementById("skillCheck8").checked == true) {
        document.getElementById("skill8").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill8").value > 0) {
            document.getElementById("skill8").value = "+" + document.getElementById("skill8").value;
        }
    } else {
        document.getElementById("skill8").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill8").value > 0) {
            document.getElementById("skill8").value = "+" + document.getElementById("skill8").value;
        }
    }

    if (document.getElementById("skillCheck9").checked == true) {
        document.getElementById("skill9").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill9").value > 0) {
            document.getElementById("skill9").value = "+" + document.getElementById("skill9").value;
        }
    } else {
        document.getElementById("skill9").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill9").value > 0) {
            document.getElementById("skill9").value = "+" + document.getElementById("skill9").value;
        }
    }

    if (document.getElementById("skillCheck10").checked == true) {
        document.getElementById("skill10").value = trainedSkillBonus + agiModInput;
        if (document.getElementById("skill10").value > 0) {
            document.getElementById("skill10").value = "+" + document.getElementById("skill10").value;
        }
    } else {
        document.getElementById("skill10").value = nTrainedSkillBonus + agiModInput;
        if (document.getElementById("skill10").value > 0) {
            document.getElementById("skill10").value = "+" + document.getElementById("skill10").value;
        }
    }

    if (document.getElementById("skillCheck11").checked == true) {
        document.getElementById("skill11").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill11").value > 0) {
            document.getElementById("skill11").value = "+" + document.getElementById("skill11").value;
        }
    } else {
        document.getElementById("skill11").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill11").value > 0) {
            document.getElementById("skill11").value = "+" + document.getElementById("skill11").value;
        }
    }

    if (document.getElementById("skillCheck12").checked == true) {
        document.getElementById("skill12").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill12").value > 0) {
            document.getElementById("skill12").value = "+" + document.getElementById("skill12").value;
        }
    } else {
        document.getElementById("skill12").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill12").value > 0) {
            document.getElementById("skill12").value = "+" + document.getElementById("skill12").value;
        }
    }

    if (document.getElementById("skillCheck13").checked == true) {
        document.getElementById("skill13").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill13").value > 0) {
            document.getElementById("skill13").value = "+" + document.getElementById("skill13").value;
        }
    } else {
        document.getElementById("skill13").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill13").value > 0) {
            document.getElementById("skill13").value = "+" + document.getElementById("skill13").value;
        }
    }

    if (document.getElementById("skillCheck14").checked == true) {
        document.getElementById("skill14").value = trainedSkillBonus + intModInput;
       if ( document.getElementById("skill14").value > 0) {
        document.getElementById("skill14").value = "+" + document.getElementById("skill14").value;
        }
    } else {
        document.getElementById("skill14").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill14").value > 0) {
            document.getElementById("skill14").value = "+" + document.getElementById("skill14").value;
        }
    }

    if (document.getElementById("skillCheck15").checked == true) {
        document.getElementById("skill15").value = trainedSkillBonus + intModInput;
        if (document.getElementById("skill15").value > 0) {
            document.getElementById("skill15").value = "+" + document.getElementById("skill15").value;
        }
    } else {
        document.getElementById("skill15").value = nTrainedSkillBonus + intModInput;
        if (document.getElementById("skill15").value > 0) {
            document.getElementById("skill15").value = "+" + document.getElementById("skill15").value;
        }
    }

    if (document.getElementById("skillCheck16").checked == true) {
        document.getElementById("skill16").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill16").value > 0) {
            document.getElementById("skill16").value = "+" + document.getElementById("skill16").value;
        }
    } else {
        document.getElementById("skill16").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill16").value > 0) {
            document.getElementById("skill16").value = "+" + document.getElementById("skill16").value;
        }
    }

    if (document.getElementById("skillCheck17").checked == true) {
        document.getElementById("skill17").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill17").value > 0) {
            document.getElementById("skill17").value = "+" + document.getElementById("skill17").value;
        }
    } else {
        document.getElementById("skill17").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill17").value > 0) {
            document.getElementById("skill17").value = "+" + document.getElementById("skill17").value;
        }
    }

    if (document.getElementById("skillCheck19").checked == true) {
        document.getElementById("skill19").value = trainedSkillBonus + wisModInput;
        if (document.getElementById("skill19").value > 0) {
            document.getElementById("skill19").value = "+" + document.getElementById("skill19").value;
        }
    } else {
        document.getElementById("skill19").value = nTrainedSkillBonus + wisModInput;
        if (document.getElementById("skill19").value > 0) {
            document.getElementById("skill19").value = "+" + document.getElementById("skill19").value;
        }
    }

    if (document.getElementById("skillCheck20").checked == true) {
        document.getElementById("skill20").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill20").value > 0) {
            document.getElementById("skill20").value = "+" + document.getElementById("skill20").value;
        }
    } else {
        document.getElementById("skill20").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill20").value > 0) {
            document.getElementById("skill20").value = "+" + document.getElementById("skill20").value;
        }
    }

    if (document.getElementById("skillCheck21").checked == true) {
        document.getElementById("skill21").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill21").value > 0) {
            document.getElementById("skill21").value = "+" + document.getElementById("skill21").value;
        }
    } else {
        document.getElementById("skill21").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill21").value > 0) {
            document.getElementById("skill21").value = "+" + document.getElementById("skill21").value;
        }
    }

    if (document.getElementById("skillCheck22").checked == true) {
        document.getElementById("skill22").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill22").value > 0) {
            document.getElementById("skill22").value = "+" + document.getElementById("skill22").value;
        }
    } else {
        document.getElementById("skill22").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill22").value > 0) {
    document.getElementById("skill22").value = "+" + document.getElementById("skill22").value;            
        }
    }

    if (document.getElementById("skillCheck23").checked == true) {
        document.getElementById("skill23").value = trainedSkillBonus + chaModInput;
        if (document.getElementById("skill23").value > 0) {
            document.getElementById("skill23").value = "+" + document.getElementById("skill23").value;
        }
    } else {
        document.getElementById("skill23").value = nTrainedSkillBonus + chaModInput;
        if (document.getElementById("skill23").value > 0) {
            document.getElementById("skill23").value = "+" + document.getElementById("skill23").value;
        }
    }
};

setSkills()