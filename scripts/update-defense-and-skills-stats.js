function calculateDefense() {
    // Coletando os valores dos campos
    const armorDef = parseFloat(document.getElementById('armorDef').value) || 0;
    const agiInput = parseFloat(document.getElementById('agiInput').value) || 0;
    const energyPointsLimitInput = parseFloat(document.getElementById('energyPointsLimitInput').value) || 0;
    const extraDef = parseFloat(document.getElementById('extraDef').value) || 0;

    // Somando 10 aos valores coletados
    const totalDefense = 10 + armorDef + agiInput + energyPointsLimitInput + extraDef;

    // Atribuindo o valor da somatória ao ID defense
    document.getElementById('defense').value = totalDefense;
}

// Função para adicionar o evento de mudança aos campos
function addEventListeners() {
    const ids = ['armorDef', 'agiInput', 'energyPointsLimitInput', 'extraDef'];

    ids.forEach(id => {
        document.getElementById(id).addEventListener('input', calculateDefense);
    });
}

function convertCharExpToNumber() {
    // Obtém o valor do campo charExp
    const charExpValue = document.getElementById('charExp').value;

    // Remove o símbolo '%' e converte a string em número
    const numericValue = parseFloat(charExpValue.replace('%', ''));

    // Verifica se o valor é um número válido
    if (!isNaN(numericValue)) {
        // Armazena o valor convertido em uma variável
        const energyPointsValue = numericValue/5;

        // Atribui o valor ao campo energyPointsLimitInput
        document.getElementById('energyPointsLimitInput').value = energyPointsValue;
    } else {
        return 0;
    }
}

// Adiciona o evento de alteração no campo charExp
function addCharExpListener() {
    document.getElementById('charExp').addEventListener('input', convertCharExpToNumber);
}

// Executa o código assim que a página carrega
window.onload = function() {
    addEventListeners();
    addCharExpListener();
};

//let updateAttMods = () => {
//   let strInput = document.getElementById("strInput").value;
//    document.getElementById("strModInput").value = Math.floor((strInput - 10) / 2);
//    if (document.getElementById("strModInput").value > 0) {
//        document.getElementById("strModInput").value = "+" + document.getElementById("strModInput").value;
//    }
//
//    let agiInput = document.getElementById("agiInput").value;
//    document.getElementById("agiModInput").value = Math.floor((agiInput - 10) / 2);
//    if (document.getElementById("agiModInput").value > 0) {
//        document.getElementById("agiModInput").value = "+" + document.getElementById("agiModInput").value;
//    }
//
//    let conInput = document.getElementById("conInput").value;
//    document.getElementById("conModInput").value = Math.floor((conInput - 10) / 2);
//    if (document.getElementById("conModInput").value > 0) {
//        document.getElementById("conModInput").value = "+" + document.getElementById("conModInput").value;
//    }
//
//    let intInput = document.getElementById("intInput").value;
//    document.getElementById("intModInput").value = Math.floor((intInput - 10) / 2);
//    if (document.getElementById("intModInput").value > 0) {
//        document.getElementById("intModInput").value = "+" + document.getElementById("intModInput").value;
//    }
//
//    let wisInput = document.getElementById("wisInput").value;
//    document.getElementById("wisModInput").value = Math.floor((wisInput - 10) / 2);
//    if (document.getElementById("wisModInput").value > 0) {
//        document.getElementById("wisModInput").value = "+" + document.getElementById("wisModInput").value;
//    }
//
//    let chaInput = document.getElementById("chaInput").value;
//    document.getElementById("chaModInput").value = Math.floor((chaInput - 10) / 2);
//    if (document.getElementById("chaModInput").value > 0) {
//        document.getElementById("chaModInput").value = "+" + document.getElementById("chaModInput").value;
//    }
//}; updateAttMods()
