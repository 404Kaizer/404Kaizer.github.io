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

function showAlertBasedOnSelection() {
    // Obtém o valor selecionado
    const selectElement = document.getElementById('exhaustSelect');
    const selectedValue = selectElement.value;

    // Verifica o valor e exibe o alerta correspondente
    switch (selectedValue) {
        case '1':
            alert('Você tem -2d em testes de perícia.');
            break;
        case '2':
            alert('Você tem -2d em testes de perícia e deslocamento reduzido pela metade.');
            break;
        case '3':
            alert('Você tem -2d em testes de perícia e em testes de ataque, e deslocamento reduzido pela metade.');
            break;
        case '4':
            alert('Você tem -2d em testes de perícia e em testes de ataque, deslocamento e PV máximos reduzidos pela metade.');
            break;
        case '5':
            alert('Você tem -2d em testes de perícia e em testes de ataque, deslocamento reduzido a 0 e PV máximos reduzidos pela metade.');
            break;
        case '6':
            alert('Você está morto (Não há necessidade de teste contra a morte).');
            break;
        default:
            // Nenhuma ação se for a opção 0 ou outro valor inválido
            break;
    }
}

// Adiciona o evento ao campo select para detectar a mudança de valor
function addSelectOptionsListener() {
    document.getElementById('exhaustSelect').addEventListener('change', showAlertBasedOnSelection);
}

function initCheckboxAlerts() {
    // Função para exibir o alerta
    function showAlert(message) {
        alert(message);
    }

    // Função para adicionar os alertas a cada checkbox
    function setupCheckboxAlert(checkboxId, message) {
        const checkbox = document.getElementById(checkboxId);
        
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                showAlert(message);
            }
        });
    }

    // Adicionando os alertas para cada checkbox
    setupCheckboxAlert('woundedCheck', 'Você recebe 3 níveis de exaustão até que seja tratado. Além disso, deve ser bem sucedido em um teste de Fortitude (DT 20) ou recebe a condição Sangrando.');
    setupCheckboxAlert('dyeingCheck', 'Você recebe a condição Inconsciente e tem 3 chances pra sobreviver. Em cada turno seu, você deve rolar um teste de Vigor (DT 10), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
    setupCheckboxAlert('terrorizedCheck', 'Por 1d4 rodadas você tem -1d em testes de perícia e rolagens de ataque enquanto estiver perto da sua fonte de medo, se houver alguma, e não pode se mover conscientemente para perto da mesma.');
    setupCheckboxAlert('traumatizedCheck', 'O personagem adquire um trauma, fobia, compulsão ou amnésia temporariamente. Os efeitos causados duram por 1d10 dias.');
    setupCheckboxAlert('insaneCheck', 'Você recebe a condição Aterrorizado e tem 3 chances pra não enlouquecer. Em cada turno seu, você deve rolar um teste de Vontade (DT 25), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
}

// Executa o código assim que a página carrega
window.onload = function() {
    initCheckboxAlerts();
    addSelectOptionsListener();
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
