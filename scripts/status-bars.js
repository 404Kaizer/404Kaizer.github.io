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
    } else if (current < 0) {
        return 0;
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
    statusBar.style.width = `${percentage}%`;
    statusText.innerText = `${current} / ${max}`;
}

// Eventos para editar Vida Atual e Máxima
document.getElementById("currentLifeBtn").addEventListener("click", () => {
    let current = Number(prompt("VIDA ATUAL:"));
    charStatus.life.current = current;
    updateBar('lifeBar', 'lifeStatusText', charStatus.life.current, charStatus.life.max);
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
});

document.getElementById("maxSanityBtn").addEventListener("click", () => {
    let max = Number(prompt("SANIDADE MÁXIMA:"));
    charStatus.sanity.max = max;
    updateBar('sanityBar', 'sanityStatusText', charStatus.sanity.current, charStatus.sanity.max);
});