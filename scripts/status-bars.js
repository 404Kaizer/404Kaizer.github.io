let statusLifeText = document.getElementById('lifeStatusText').innerText;
let statusSanityText = document.getElementById('sanityStatusText').innerText;
let statusEnergyText = document.getElementById('energyStatusText').innerText;

// Função para separar os valores de status
function getStatusValues(statusText) {
    let [current, max] = statusText.split('/').map(value => value.trim());
    return { currentStatus: current, maxStatus: max };
}

// Obtendo os status separados para cada variável
let lifeStatus = getStatusValues(statusLifeText);
let sanityStatus = getStatusValues(statusSanityText);
let energyStatus = getStatusValues(statusEnergyText);

const charStatus = {
    life: {
      current: lifeStatus.currentStatus,
      max: lifeStatus.maxStatus,
    },

    sanity: {
      current: sanityStatus.currentStatus,
      max: sanityStatus.maxStatus,
    },

    energy: {
      current: energyStatus.currentStatus,
      max: energyStatus.maxStatus,
    }
}   

let calculateBar = (current, max) => {
    if (current > max) {
        return 100;
    } else if (current <= 0) {
        return "zero";
    } else {
        const value = (100 / max) * current;
        const string = value.toString().split('.')[0];
        const percentage = Number(string);
        return percentage;
    }
}

// Função para atualizar a barra de progresso
function updateBar(barId, statusTextId, current, max) {
    const statusText = document.getElementById(statusTextId);
    const statusBar = document.getElementById(barId);
    const percentage = calculateBar(current, max);

    // Define a transição de 2 segundos para a largura
    statusBar.style.transition = 'width 2s';

    // Adiciona um ouvinte para o fim da transição de largura
    statusBar.addEventListener('transitionend', () => {
        // Verifica se a largura é 1% e esconde a barra
        if (statusBar.style.width <= '1%') {
            statusBar.style.display = 'none';
        }
    });

    if (percentage === 0) {
        // Se percentage for 0, faz a transição para 1% e depois oculta a barra
        statusBar.style.width = '1%';
    } else {
        // Torna a barra visível e faz a transição de 1% para o valor correto
        statusBar.style.display = 'block';
        statusBar.style.width = '1%';

        // Pequeno atraso para garantir que a transição ocorra suavemente
        setTimeout(() => {
            statusBar.style.width = `${percentage}%`;
        }, 50);
    }

    // Atualiza o texto da barra
    statusText.innerText = `${current} / ${max}`;
}

// Eventos para editar Vida Atual e Máxima
document.getElementById("currentLifeBtn").addEventListener("click", () => {
    let current = Number(prompt("VIDA ATUAL:"));

    charStatus.life.current = current;
    updateBar('lifeBar', 'lifeStatusText', charStatus.life.current, charStatus.life.max);

    if (current <= 0) {
        document.getElementById("dyeingCheck").checked = true;
        alert('VOCÊ ESTÁ MORRENDO!\n\nVocê recebe a condição Inconsciente e tem 3 chances pra sobreviver. Em cada turno seu, você deve rolar um teste de Vigor (DT 10), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
    } else {
        document.getElementById("dyeingCheck").checked = false;
    }
});

document.getElementById("maxLifeBtn").addEventListener("click", () => {
    let max = Number(prompt("VIDA MÁXIMA:"));
    charStatus.life.max = max;
    updateBar('lifeBar', 'lifeStatusText', charStatus.life.current, charStatus.life.max);
});

// Eventos para editar Energia Atual e Máxima
document.getElementById("currentEnergyBtn").addEventListener("click", () => {
    let current = Number(prompt("ENERGIA ATUAL:"));
    charStatus.energy.current = current;
    updateBar('energyBar', 'energyStatusText', charStatus.energy.current, charStatus.energy.max);
});

document.getElementById("maxEnergyBtn").addEventListener("click", () => {
    let max = Number(prompt("ENERGIA MÁXIMA:"));
    charStatus.energy.max = max;
    updateBar('energyBar', 'energyStatusText', charStatus.energy.current, charStatus.energy.max);
});

// Eventos para editar Sanidade Atual e Máxima
document.getElementById("currentSanityBtn").addEventListener("click", () => {
    let current = Number(prompt("SANIDADE ATUAL:"));
    charStatus.sanity.current = current;
    updateBar('sanityBar', 'sanityStatusText', charStatus.sanity.current, charStatus.sanity.max);
    if (current <= 0) {
        document.getElementById("insaneCheck").checked = true;
        alert('VOCÊ ESTÁ ENLOUQUECENDO!\n\nVocê recebe a condição Aterrorizado e tem 3 chances pra não enlouquecer. Em cada turno seu, você deve rolar um teste de Vontade (DT 25), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
    } else {
        document.getElementById("insaneCheck").checked = false;
    }
});

document.getElementById("maxSanityBtn").addEventListener("click", () => {
    let max = Number(prompt("SANIDADE MÁXIMA:"));
    charStatus.sanity.max = max;
    updateBar('sanityBar', 'sanityStatusText', charStatus.sanity.current, charStatus.sanity.max);
});

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
    setupCheckboxAlert('woundedCheck', 'VOCÊ ESTÁ GRAVEMENTE FERIDO!\n\nVocê recebe 3 níveis de exaustão até que seja tratado. Além disso, deve ser bem sucedido em um teste de Fortitude (DT 20) ou recebe a condição Sangrando.');
    setupCheckboxAlert('dyeingCheck', 'VOCÊ ESTÁ MORRENDO!\n\nVocê recebe a condição Inconsciente e tem 3 chances pra sobreviver. Em cada turno seu, você deve rolar um teste de Vigor (DT 10), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
    setupCheckboxAlert('terrorizedCheck', 'VOCÊ ESTÁ ATERRORIZADO!\n\nPor 1d4 rodadas você tem -1d em testes de perícia e rolagens de ataque enquanto estiver perto da sua fonte de medo, se houver alguma, e não pode se mover conscientemente para perto da mesma.');
    setupCheckboxAlert('traumatizedCheck', 'VOCÊ ESTÁ TRAUMATIZADO!\n\nO personagem adquire um trauma, fobia, compulsão ou amnésia temporariamente. Os efeitos causados duram por 1d10 dias.');
    setupCheckboxAlert('insaneCheck', 'VOCÊ ESTÁ ENLOUQUECENDO!\n\nVocê recebe a condição Aterrorizado e tem 3 chances pra não enlouquecer. Em cada turno seu, você deve rolar um teste de Vontade (DT 25), e deve ter 1 sucesso antes de 3 falhas, sendo cada falha é permanente.');
}

window.onload = function() {
    initCheckboxAlerts();
    addSelectOptionsListener();
};