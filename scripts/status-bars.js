const charStatus = {
    life: {
      current: 0,
      max: 0,
    },

    sanity: {
      current: 0,
      max: 0,
    },

    energy: {
      current: 0,
      max: 0,
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
function updateBar(barId, current, max) {
    const bar = document.getElementById(barId);
    const percentage = calculateBar(current, max);
    bar.style.width = `${percentage}%`;
    bar.innerText = `${current} / ${max}`;
}

// Eventos para editar Vida Atual e Máxima
document.getElementById("currentLifeBtn").addEventListener("click", () => {
    let current = Number(prompt("VIDA ATUAL:"));
    charStatus.life.current = current;
    updateBar('lifeBar', charStatus.life.current, charStatus.life.max);
});

document.getElementById("maxLifeBtn").addEventListener("click", () => {
    let max = Number(prompt("VIDA MÁXIMA:"));
    charStatus.life.max = max;
    updateBar('lifeBar', charStatus.life.current, charStatus.life.max);
});

// Eventos para editar Energia Atual e Máxima
document.getElementById("currentEnergyBtn").addEventListener("click", () => {
    let current = Number(prompt("ENERGIA ATUAL:"));
    charStatus.energy.current = current;
    updateBar('energyBar', charStatus.energy.current, charStatus.energy.max);
});

document.getElementById("maxEnergyBtn").addEventListener("click", () => {
    let max = Number(prompt("ENERGIA MÁXIMA:"));
    charStatus.energy.max = max;
    updateBar('energyBar', charStatus.energy.current, charStatus.energy.max);
});

// Eventos para editar Sanidade Atual e Máxima
document.getElementById("currentSanityBtn").addEventListener("click", () => {
    let current = Number(prompt("SANIDADE ATUAL:"));
    charStatus.sanity.current = current;
    updateBar('sanityBar', charStatus.sanity.current, charStatus.sanity.max);
});

document.getElementById("maxSanityBtn").addEventListener("click", () => {
    let max = Number(prompt("SANIDADE MÁXIMA:"));
    charStatus.sanity.max = max;
    updateBar('sanityBar', charStatus.sanity.current, charStatus.sanity.max);
});