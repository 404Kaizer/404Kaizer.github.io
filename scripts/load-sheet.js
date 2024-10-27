document.getElementById('loadSheet').addEventListener('click', function() {
    document.getElementById('fileInput').click(); // Simula um clique no input de arquivo
});

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            const content = event.target.result;
            importData(content); // Importa os dados assim que o arquivo é lido
        };

        reader.readAsText(file);
    } else {
        alert('Por favor, selecione um arquivo para importar.');
    }
});

function importData(content) {
    const lines = content.split('\n\n'); // Divide o conteúdo em linhas
    const itemTable = document.getElementById('itemTable').getElementsByTagName('tbody')[0]; // Obter tbody da tabela
    
    // Remove todas as linhas, exceto o cabeçalho
    const totalRows = itemTable.rows.length;
    for (let i = totalRows - 1; i >= 0; i--) { // Remover todas as linhas do tbody
        itemTable.deleteRow(i);
    }

    lines.forEach(line => {
        const [key, value] = line.split(':: '); // Divide chave e valor
        if (!key || !value) {
            console.warn(`Linha mal formada: "${line}"`);
            return; // Ignora linhas mal formadas
        }

        console.log(`Tentando preencher: ${key.trim()} com valor: ${value.trim()}`);

        if (key.trim() === 'items') {
            let items = JSON.parse(value.trim()); // Parseia o JSON
            
            items.forEach((item) => {
                let newRow = itemTable.insertRow(); // Adiciona nova linha ao tbody
                newRow.innerHTML = `
                    <td class="tdName">${item.name}</td>
                    <td class="tdQuant">${item.quantity}</td>
                    <td class="tdWeight">${item.weight}</td>
                    <td class="tdPrice">${item.price}</td>
                    <td class="tdDesc">${item.description}</td>
                `;
                updateButtonState();
            });        
        } else {
            const element = document.getElementById(key.trim());
            console.log(`Tentando preencher: ${key.trim()} com valor: ${value.trim()}`);

            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = (value.trim() === 'true');
                } else if (element.type === 'radio') {
                    element.checked = (value.trim() === 'true');
                } else if (key.trim() === 'charImg') {
                    const imgElement = document.getElementById('charImg');
                    imgElement.src = value.trim();
                    imgElement.style.display = 'block';
                } else if (key.trim().startsWith('editableArea')) {
                    console.log(element);
                    element.innerHTML = value.trim();
                } else if (key.trim() === 'lifeStatusText') {
                    const [current, max] = value.trim().split(' / ').map(Number);
                    let lifeBar = document.getElementById('lifeBar');
                    element.innerText = `${current} / ${max}`;
                    lifeBar.style.width = `${calculateBar(current, max)}%`;
                    charStatus.life.current = current;
                    charStatus.life.max = max;
                } else if (key.trim() === 'sanityStatusText') {
                    const [current, max] = value.trim().split(' / ').map(Number);
                    let sanityBar = document.getElementById('sanityBar');
                    element.innerText = `${current} / ${max}`;
                    sanityBar.style.width = `${calculateBar(current, max)}%`;
                    charStatus.sanity.current = current;
                    charStatus.sanity.max = max;
                } else if (key.trim() === 'energyStatusText') {
                    const [current, max] = value.trim().split(' / ').map(Number);
                    let energyBar = document.getElementById('energyBar');
                    element.innerText = `${current} / ${max}`;
                    energyBar.style.width = `${calculateBar(current, max)}%`;
                    charStatus.energy.current = current;
                    charStatus.energy.max = max;
                } else {
                    element.value = value.trim();
                }
            } else {
                console.warn(`Elemento com ID "${key.trim()}" não encontrado.`);
            }
        }
    });

    updateButtonState();
    sumThirdColumn();
}
