// Função para formatar a data e hora
function formatDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const month = months[now.getMonth()]; // Obtém o nome do mês
    
    return `${day} de ${month} de ${year} às ${hours}h ${minutes}min ${seconds}sec`; // Formato: DD-MM-YYYY às HH.MM.SS
}

// Função para baixar o conteúdo como um arquivo .txt
function downloadFile(filename, content, format = 'txt') {
    const element = document.createElement('a');
    const file = new Blob([content], { type: `text/${format}` });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.${format}`; // Nome do arquivo
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// IDs fornecidos (incluído 'charImg')
const ids = [
    "charName", "charImg", "charExp", "charRaceSex", "charExpert", "charAge", "charAlignment", 
    "charStature", "charLangs", "backgroundArea", "textArea1", "textArea2", "textArea3", 
    "textArea4", "exhaustSelect", "woundedCheck", "dyeingCheck", "fail1", "fail2", "fail3", 
    "fail4", "fail5", "fail6", "terrorizedCheck", "traumatizedCheck", 
    "insaneCheck", "trainedSkillBonus", "nTrainedSkillBonus", "defense", "block", "dodge", 
    "armorDef", "extraDef", "physicalRDMG", "magicalRDMG", "velocity", "textArea5", "textArea6", 
    "strInput", "strModInput", "agiInput", "agiModInput", "vigInput", "vigModInput", 
    "intInput", "intModInput", "wisInput", "wisModInput", "chaInput", "chaModInput", 
    "energyPointsLimitInput", "skillRadio1", "skillRadio2", "skillRadio3", "skillRadio4", 
    "skillRadio5", "skillRadio6", "skillRadio7", "skillRadio8", "skillRadio9", "skillRadio10", 
    "skillRadio11", "skillRadio12", "skillRadio13", "skillRadio14", "skillRadio15", 
    "skillRadio16", "skillRadio17", "skillRadio18", "skillRadio19", "skillRadio20", 
    "skillRadio21", "skillRadio22", "skillRadio23", "skillRadio24", "skillRadio25", 
    "skillRadio26", "skillRadio27", "skillRadio28", "skillRadio29", "skillRadio30", 
    "skillRadio31", "skillRadio32", "skillRadio33", "skillRadio34", "skillRadio35", 
    "skillRadio36", "skillRadio37", "skillRadio38", "skillRadio39", "skillRadio40", 
    "skillRadio41", "skillRadio42", "skillRadio43", "skillRadio44", "skillRadio45", 
    "skillRadio46", "skillRadio47", "skillRadio48", "skillRadio49", "skillRadio50", 
    "skillRadio51", "skillRadio52", "skillRadio53", "skillRadio54", "skillRadio55", 
    "skillRadio56", "skillRadio57", "skillRadio58", "skillRadio59", "skillRadio60", 
    "skillRadio61", "skillRadio62", "skillRadio63", "skillRadio64", "skillRadio65", 
    "skillRadio66", "skillRadio67", "skillRadio68", "skillRadio69", "skillRadio70", 
    "skillRadio71", "skillRadio72", "skillRadio73", "skillRadio74", "skillRadio75", 
    "skillRadio76", "skillRadio77", "skillRadio78", "skillRadio79", "skillRadio80", 
    "skillRadio81", "skillRadio82", "skillRadio83", "skillRadio84", "skillRadio85", 
    "skillRadio86", "skillRadio87", "skillRadio88", "skillRadio89", "skillRadio90", 
    "skillRadio91", "skillRadio92", "skillRadio93", "skillRadio94", "skillRadio95", 
    "skillRadio96", "unskillRadio1", "unskillRadio2", "unskillRadio3", "unskillRadio4", 
    "unskillRadio5", "unskillRadio6", "unskillRadio7", "unskillRadio8", "unskillRadio9", 
    "unskillRadio10", "unskillRadio11", "unskillRadio12", "unskillRadio13", "unskillRadio14", 
    "unskillRadio15", "unskillRadio16", "unskillRadio17", "unskillRadio18", "unskillRadio19", 
    "unskillRadio20", "unskillRadio21", "unskillRadio22", "unskillRadio23", "unskillRadio24", 
    "skill0", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8", 
    "skill9", "skill10", "skill11", "skill12", "skill13", "skill14", "skill15", "skill16", 
    "skill17", "skill19", "skill20", "skill21", "skill22", "skill23", "skill24", 
    "skill25", "skill26", "ritualSkill1", "ritualSkill2", "ritualSkill3", "dtBonus", "skillBonus2", 
    "skillBonus3", "skillBonus4", "skillBonus5", "skillBonus6", "skillBonus7", "skillBonus8", "skillBonus9", 
    "skillBonus10", "skillBonus11", "skillBonus12", "skillBonus13", "skillBonus14", "skillBonus15", 
    "skillBonus16", "skillBonus17", "skillBonus19", "skillBonus20", "skillBonus21", "skillBonus22", 
    "skillBonus23", "skillBonus24", "skillBonus25", "skillBonus26", "editableArea3", "editableArea4", 
    "editableArea6", "editableArea7", "editableArea8", "editableArea9", "editableArea10", "editableArea11", 
    "editableArea12", "coin1", "coin2", "coin3", "weight1", "weight2", "editableArea1", "editableArea2", 
    "editableArea", "lifeStatusText", "sanityStatusText", "energyStatusText", "backpackType1",
    "backpackType2", "backpackType3"
];

// Função para capturar o valor dos elementos de diferentes tipos
function gatherData() {
    let data = '';

    // Captura os dados da tabela
    const items = [];
    const rows = itemTable.rows; // Supondo que itemTable seja o ID da tabela

    for (let i = 0; i < rows.length; i++) {
        const itemData = {};
        const cells = rows[i].cells;

        // Supondo que você tenha 4 colunas, ajuste conforme necessário
        itemData.name = cells[0].innerHTML; // Nome do item
        itemData.quantity = cells[1].innerHTML; // Valor 1
        itemData.weight = cells[2].innerHTML; // Valor 2
        itemData.price = cells[3].innerHTML; // Valor 3
        itemData.description = cells[4].innerHTML; // Valor 4

        items.push(itemData);
    }

    // Adiciona os dados do array como JSON
    data += `items:: ${JSON.stringify(items)}\n\n`;

    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id.startsWith('editableArea')) {
                // Para áreas editáveis, usar innerHTML
                data += `${id}:: ${element.innerHTML}\n\n`;
            } else if (element.type === 'checkbox') {
                // Para checkboxes, armazenar se estão checadas
                data += `${id}:: ${element.checked}\n\n`;
            } else if (element.type === 'radio') {
                // Para radio buttons, armazenar se estão checadas
                data += `${id}:: ${element.checked}\n\n`;
            } else if (['lifeStatusText', 'sanityStatusText', 'energyStatusText'].includes(id)) {
                // Para barras de status, salvar innerText
                data += `${id}:: ${element.innerText}\n\n`;
            } else if (id === 'charImg') {
                // Para charImg, armazenar o src da imagem
                data += `${id}:: ${element.src}\n\n`;
            } else {
                // Para inputs e áreas editáveis normais, usar o valor
                data += `${id}:: ${element.value}\n\n`;
            }
        }
    });

    return data;
}

// Função principal para ser executada ao clicar no botão
function saveCharacterSheet() {
    const charNameElement = document.getElementById('charName');
    if (charNameElement) {
        const charName = charNameElement.value;
        const data = gatherData();
        
        // Formata a data e hora
        const formattedDate = formatDate();
        
        // Chama a função para baixar o arquivo com o nome e conteúdo
        downloadFile(`${charName} (${formattedDate})`, data);
    } else {
        console.error("Elemento com ID 'charName' não encontrado.");
    }
}

const textAreaIDs = ["textArea1", "textArea2", "textArea3", "textArea4", "textArea5", "textArea6", "backgroundArea"];

// Função que insere o hífen em uma linha vazia ao pressionar Enter
function handleEnterWithDash(event) {
    if (event.key === "Enter") {
        const textarea = event.target;
        const cursorPos = textarea.selectionStart;

        // Obtém o conteúdo da linha antes do cursor
        const textBefore = textarea.value.substring(0, cursorPos);
        const lastLine = textBefore.split("\n").pop();

        // Se a linha anterior está vazia, insere "-"
        if (lastLine.trim() === "") {
            event.preventDefault();
            const textAfter = textarea.value.substring(cursorPos);

            // Insere "-" antes da quebra de linha e move o cursor
            textarea.value = textBefore + "-\n" + textAfter;
            textarea.selectionStart = textarea.selectionEnd = cursorPos + 2;
        }
    }
}

// Adiciona o evento keydown para cada textarea pelo ID
textAreaIDs.forEach(id => {
    const textarea = document.getElementById(id);
    if (textarea) {
        textarea.addEventListener("keydown", handleEnterWithDash);
    }
});

// Adiciona um evento de clique ao botão com ID 'saveSheet'
document.getElementById('saveSheet').addEventListener('click', saveCharacterSheet);
