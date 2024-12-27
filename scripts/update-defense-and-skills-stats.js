function calculateDefense() {
    const armorDef = parseFloat(document.getElementById('armorDef')?.value) || 0;
    const agiInput = parseFloat(document.getElementById('agiInput')?.value) || 0;
    const extraDef = parseFloat(document.getElementById('extraDef')?.value) || 0;

    const totalDefense = 10 + armorDef + agiInput + extraDef;

    const defenseElement = document.getElementById('defense');
    if (defenseElement) {
        defenseElement.value = totalDefense;
    } else {
        console.error("Elemento 'defense' não encontrado no DOM.");
    }
}

function convertCharExpToNumber() {
    const charExpInput = document.getElementById('charExp');
    if (!charExpInput) {
        console.error("Elemento 'charExp' não encontrado.");
        return;
    }

    const charExpValue = charExpInput.value.trim();
    const numericValue = parseFloat(charExpValue.replace('%', ''));

    if (!isNaN(numericValue)) {
        const energyPointsValue = numericValue / 5;
        const energyPointsInput = document.getElementById('energyPointsLimitInput');
        if (energyPointsInput) {
            energyPointsInput.value = energyPointsValue;
        } else {
            console.error("Elemento 'energyPointsLimitInput' não encontrado no DOM.");
        }
    } else {
        console.warn("Valor inválido em 'charExp'.");
    }
}

function addDefEventListeners() {
    const ids = ['armorDef', 'agiInput', 'energyPointsLimitInput', 'extraDef', 'charExp'];

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', calculateDefense);
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado.`);
        }
    });
}

function addExpEventListeners() {
    const expElement = document.getElementById('charExp');
    if (expElement) {
        expElement.addEventListener('input', convertCharExpToNumber);
    } else {
        console.warn("Elemento 'charExp' não encontrado no DOM.");
    }
}

let currentWeightValue = 0; // Variável global para armazenar o valor
const strInput = document.getElementById('strInput');
// Listener para o campo de entrada de peso
strInput.addEventListener('change', function(e) {
    let supportedWeight = document.getElementById('weight2');
    let strAtt = parseInt(e.target.value); // Acessa e converte o valor do input corretamente

    // Atualiza currentWeightValue e o valor de supportedWeight
    if (strAtt === 0) {
        supportedWeight.value = 5; // Se strAtt for 0, supportedWeight será 5
        currentWeightValue = 5; // Atualiza a variável global
    } else {
        supportedWeight.value = strAtt * 5; // Faz o cálculo e atualiza o campo de peso
        currentWeightValue = strAtt * 5; // Atualiza a variável global
    }
    
    // Atualiza weight2 com o peso atual mais o peso adicional
    updateTotalWeight();
});

// Listener para o tipo de mochila
document.querySelectorAll('input[name="backpack1"]').forEach(function(element) {
    element.addEventListener('change', updateTotalWeight);
});

// Função para atualizar o peso total
function updateTotalWeight() {
    let weight2 = document.getElementById('weight2');
    const backpack2 = document.getElementById('backpackType2');
    const backpack3 = document.getElementById('backpackType3');
    let plusWeight = 0;

    // Determina o peso adicional com base na mochila selecionada
    if (backpack2.checked) {
        plusWeight = 5;
    } else if (backpack3.checked) {
        plusWeight = 10;
    } else {
        plusWeight = 0;
    }

    // Atualiza o valor de weight2
    weight2.value = currentWeightValue + plusWeight;

    sumThirdColumn();
}

function sumThirdColumn() {
    let table = document.getElementById('itemTable');
    let total = 0;

    // Verifica se há apenas o cabeçalho na tabela
    if (table.rows.length <= 1) {
        total = 0; // Define total como 0
        document.getElementById('weight1').value = total; // Exibe 0 no campo com o ID weight1
        checkOverload(total); // Verifica se está sobrecarregado com o total sendo 0
        return; // Sai da função
    }

    // Soma os valores da 3ª coluna
    for (let i = 1; i < table.rows.length; i++) {
        let cellValue = parseFloat(table.rows[i].cells[2].innerText);
        if (!isNaN(cellValue)) {
            total += parseInt(cellValue);
        }
    }

    console.log(total); // Você pode atribuir esse valor onde precisar
    document.getElementById('weight1').value = total; // Exibe o valor no campo com o ID weight1

    // Verifica se está sobrecarregado
    checkOverload(total);
}

// Função que verifica se está sobrecarregado
function checkOverload(total) {
    let weight2 = parseInt(document.getElementById('weight2').value);
    let openModal = document.getElementById('openModal'); // Certifique-se de que o botão correto está sendo referenciado
    let weight1Element = document.getElementById('weight1'); // Referência ao elemento para alterar o estilo (não o valor)
    let weightDisplayOverload = document.getElementById('weightDisplayOverload');

    // Verifica sobrecarga extrema (>= strAtt * 10)
    if (total > weight2 * 2) {
        openModal.disabled = true; // Desabilita o modal para impedir mais itens
        weight1Element.style.color = "red"; // Cor de aviso extremo
        weightDisplayOverload.innerText = "Você Está Sobrecarregado";
        weightDisplayOverload.style.color = "red"
        alert('Você não consegue carregar mais itens até que diminua seu peso!');
        return; // Interrompe a execução para não passar para as outras verificações
    }

    // Verifica sobrecarga moderada (>= strAtt * 5)
    if (total > weight2) {
        weight1Element.style.color = "orange"; // Cor de alerta
        weightDisplayOverload.innerText = "Você Está Pesado";
        weightDisplayOverload.style.color = "orange";
        alert('Você está sobrecarregado!\nVocê possui -2d em testes de Agilidade, -5 de defesa e seu deslocamento é reduzido pela metade até que seu peso diminua.');
        openModal.disabled = false; // Habilita o modal
        return; // Interrompe a execução para não passar para a próxima condição
    }

    // Sem sobrecarga (menor que strAtt * 5)
    weightDisplayOverload.style.color = "white";
    weightDisplayOverload.innerText = "Peso Atual";
    openModal.disabled = false; // Habilita o modal
    weight1Element.style.color = "white"; // Cor normal
}

// Executa o código assim que a página carrega
document.addEventListener('DOMContentLoaded', function () {
    console.log("Página carregada. Adicionando eventos...");
    calculateDefense();
    addDefEventListeners();
    addExpEventListeners();
});

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
