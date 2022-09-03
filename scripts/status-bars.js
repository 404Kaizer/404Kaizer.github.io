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

energyBar.addEventListener("click", ()=> {
    let current = Number(prompt("ENERGIA ATUAL:"));
    let max = Number(prompt("ENERGIA MÁXIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    energyBar.style.width = `${calculateBar(current, max)}%`;
    energyBar.innerText = `${current} / ${max}`;
});

lifeBar.addEventListener("click", ()=> {
    let current = Number(prompt("VIDA ATUAL:"));
    let max = Number(prompt("VIDA MÁXIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    lifeBar.style.width = `${calculateBar(current, max)}%`;
    lifeBar.innerText = `${current} / ${max}`;
});

sanityBar.addEventListener("click", ()=> {
    let current = Number(prompt("SANIDADE ATUAL:"));
    let max = Number(prompt("SANIDADE MÁXIMA:"));
  
    charStatus.energy.current = current;
    charStatus.energy.max = max;
    sanityBar.style.width = `${calculateBar(current, max)}%`;
    sanityBar.innerText = `${current} / ${max}`;
});