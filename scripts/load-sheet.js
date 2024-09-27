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

// Função para calcular a largura da barra com base nos valores current e max
function calculateBar(current, max) {
    if (max === 0) return 0; // Para evitar divisão por zero
    return (current / max) * 100; // Retorna a porcentagem
}

function importData(content) {
    const lines = content.split('\n\n'); // Divide o conteúdo em linhas
    lines.forEach(line => {
        const [key, value] = line.split(':: '); // Divide chave e valor
        if (!key || !value) {
            console.warn(`Linha mal formada: "${line}"`);
            return; // Ignora linhas mal formadas
        }

        const element = document.getElementById(key.trim());
        console.log(`Tentando preencher: ${key.trim()} com valor: ${value.trim()}`);

        if (element) {
            if (element.type === 'checkbox') {
                // Para checkboxes, definir como checado ou não
                element.checked = (value.trim() === 'true');
            } else if (element.type === 'radio') {
                // Para radio buttons, definir o estado checado baseado em true/false
                element.checked = (value.trim() === 'true');
            } else if (key.trim() === 'charImg') {
                // Para charImg, definir o src corretamente
                const imgElement = document.getElementById('charImg');
                imgElement.src = value.trim(); // Atribui o src da imagem
                imgElement.style.display = 'block'; // Exibe a imagem se estiver oculta
            } else if (key.trim().startsWith('editableArea')) {
                // Para editableArea, definir innerHTML
                console.log(element);
                element.innerHTML = value.trim(); // Usar innerHTML para preservar a formatação
            } else if (key.trim() === 'lifeBar' || key.trim() === 'sanityBar' || key.trim() === 'energyBar') {
                // Para lifeBar, sanityBar e energyBar, atribuir innerText
                const [current, max] = value.trim().split('/').map(Number); // Assume que o valor está no formato "current/max"
                element.innerText = `${current}/${max}`; // Exibe o texto atual
                element.style.width = `${calculateBar(current, max)}%`; // Define a largura da barra
            } else {
                // Para outros inputs, definir o valor
                element.value = value.trim();
            }
        } else {
            console.warn(`Elemento com ID "${key.trim()}" não encontrado.`);
        }
    });
}
