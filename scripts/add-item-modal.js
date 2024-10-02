const editButton = document.getElementById('edit-btn');
const saveItemButton = document.getElementById('saveItem');
const cancelEditButton = document.getElementById('closeModal');
const editModal = document.getElementById('modal');
const openModalButton = document.getElementById("openModal");
const itemTable = document.getElementById("itemTable").getElementsByTagName('tbody')[0];
const deleteButton = document.getElementById('delete-btn');
let deleteEnabled = false; // Variável para controlar o modo de exclusão
let editEnabled = false; // Variável para controlar o modo de edição
let selectedRow = null; // Armazena a linha selecionada

// O estado original dos botões
const originalEditButtonText = editButton.textContent;
const originalDeleteButtonText = deleteButton.textContent;

openModalButton.addEventListener('click', openModal);
cancelEditButton.addEventListener('click', closeModal);

// Função para abrir o modal
function openModal() {
    editModal.style.display = "block";
    saveItemButton.hidden = false;
    itemName.disabled = false;
    itemQuantity.disabled = false;
    itemWeight.disabled = false;
    itemValue.disabled = false;
    itemDescription.contentEditable = true;
}

// Função para fechar o modal
function closeModal() {
    editModal.style.display = "none";
}

// Função para limpar os campos do modal
function clearModalInputs() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemWeight").value = "";
    document.getElementById("itemValue").value = "";
    document.getElementById("itemDescription").innerHTML = "";
}

// Função para adicionar ou editar um item
function saveItem(event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemQuantity = document.getElementById("itemQuantity").value;
    const itemWeight = document.getElementById("itemWeight").value;
    const itemValue = document.getElementById("itemValue").value;
    const itemDescription = document.getElementById("itemDescription").innerHTML;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!itemName || !itemQuantity || !itemDescription) {
        alert("Por favor, preencha os campos Nome, Quantidade e Descrição.");
        return;
    }

    if (selectedRow) {
        // Se uma linha está selecionada, atualiza a linha existente
        const cells = selectedRow.getElementsByTagName('td');
        cells[0].innerText = itemName;
        cells[1].innerText = itemQuantity;
        cells[2].innerText = itemWeight;
        cells[3].innerText = itemValue;
        cells[4].innerHTML = itemDescription;

        selectedRow = null; // Limpa a seleção após editar
    } else {
        // Caso contrário, adiciona uma nova linha
        const newRow = itemTable.insertRow();
        newRow.innerHTML = `
            <td class="tdName">${itemName}</td>
            <td class="tdQuant">${itemQuantity}</td>
            <td class="tdWeight">${itemWeight}</td>
            <td class="tdPrice">${itemValue}</td>
            <td class="tdDesc">${itemDescription}</td>
        `;
    }

    // Limpa os campos do modal
    clearModalInputs();

    // Fecha o modal
    closeModal();

    // Atualiza o estado dos botões
    resetButtonState();
    updateButtonState();
}

// Preenche o modal com os dados da linha selecionada
function populateModal(row) {
    const cells = row.getElementsByTagName('td');
    document.getElementById('itemName').value = cells[0].innerText;
    document.getElementById('itemQuantity').value = cells[1].innerText;
    document.getElementById('itemWeight').value = cells[2].innerText;
    document.getElementById('itemValue').value = cells[3].innerText;
    document.getElementById('itemDescription').innerHTML = cells[4].innerHTML;
}

// Cancela a edição e oculta o modal
cancelEditButton.addEventListener('click', function() {
    editModal.style.display = 'none'; 
    selectedRow = null;
    clearModalInputs(); 
});

// Salva as alterações da edição ou adiciona um novo item
saveItemButton.addEventListener('click', saveItem);

// Ativa/desativa o modo de exclusão ao clicar no botão
deleteButton.addEventListener('click', function() {
    if (!editEnabled) { 
        deleteEnabled = !deleteEnabled; 
        deleteButton.textContent = deleteEnabled ? 'Cancel Delete' : 'Del';
        if (!deleteEnabled) {
            removeHighlight(); // Remove destaque ao sair do modo delete
        }
        updateButtonState(); // Atualiza estado dos botões após deletar
    }
});

editButton.addEventListener('click', function() {
    if (!deleteEnabled) { 
        editEnabled = !editEnabled; 
        editButton.textContent = editEnabled ? 'Cancel Edit' : 'Edit';
        updateButtonState(); // Atualiza estado dos botões após editar
    }
});

// Delegação de eventos para seleção, edição e exclusão de linhas
itemTable.addEventListener('click', function(event) {
    const row = event.target.closest('tr');

    // Preenche o modal ao clicar na linha
    if (!editEnabled && !deleteEnabled && row) {
        selectedRow = row;
        populateModal(selectedRow);
        editModal.style.display = 'block';
        saveItemButton.hidden = true;
        itemName.disabled = true;
        itemQuantity.disabled = true;
        itemWeight.disabled = true;
        itemValue.disabled = true;
        itemDescription.contentEditable = false;
    }

    // Verifica se o botão Editar foi clicado
    if (event.target.classList.contains('edit-btn')) {
        const row = event.target.closest('tr');
        populateModal(row); // Função para preencher o modal com os dados da linha
        openModal(); // Função para abrir o modal
    }

    // Seleciona a linha para edição
    if (editEnabled && !deleteEnabled && row) {
        selectedRow = row;
        populateModal(selectedRow);
        openModal();
    }

    // Verifica se o botão Excluir foi clicado
    if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        const confirmDelete = confirm('Você tem certeza que deseja excluir esta linha?');
        if (confirmDelete) {
            itemTable.deleteRow(row.rowIndex - 1); // Remove a linha da tabela
            updateButtonState(); // Atualiza o estado dos botões após deletar
        }
    }

    // Confirma e exclui a linha ao clicar no modo de exclusão
    if (deleteEnabled && !editEnabled && row) {
        const confirmDelete = confirm('Você tem certeza que deseja excluir esta linha?');
        if (confirmDelete) {
            itemTable.deleteRow(row.rowIndex - 1); // Remove a linha da tabela
            updateButtonState(); // Atualiza o estado dos botões após deletar
        }
        resetButtonState();
    }
});

// Adiciona destaque nas linhas no modo de edição
itemTable.addEventListener('mouseover', function(event) {
    const row = event.target.closest('tr');
    if (editEnabled && row) {
        row.classList.add('highlightEdit'); // Adiciona a classe de destaque para edição
    } else if (deleteEnabled && row) {
        row.classList.add('highlight'); // Adiciona a classe de destaque para exclusão
    } else if (!deleteEnabled && !editEnabled && row) {
        row.classList.add('highlightDefault'); // Adiciona a classe de destaque padrão
    }
});

// Remove o destaque ao sair da linha
itemTable.addEventListener('mouseout', function(event) {
    const row = event.target.closest('tr');
    if (row) {
        row.classList.remove('highlightEdit', 'highlight', 'highlightDefault'); // Remove todas as classes de destaque
    }
});

// Remove destaque de todas as linhas
function removeHighlight() {
    const highlightedRows = itemTable.querySelectorAll('.highlight, .highlightEdit');
    highlightedRows.forEach(row => {
        row.classList.remove('highlight', 'highlightEdit'); // Remove ambas as classes de destaque
    });
}

// Função para atualizar os números das linhas
function updateRowNumbers() {
    const rows = itemTable.rows;
    for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].getElementsByTagName('td')[0]; // Seleciona a primeira célula (número da linha)
        cell.innerText = i + 1; // Atualiza o texto com a contagem
    }
    console.log(`Updated row numbers: ${rows.length}`);
}

// Atualiza o estado dos botões de edição e exclusão
function updateButtonState() {
    const rowCount = itemTable.rows.length;

    // Desabilita os botões se não houver linhas na tabela
    editButton.hidden = rowCount === 0;
    deleteButton.hidden = rowCount === 0;
    editButton.disabled = rowCount === 0;
    deleteButton.disabled = rowCount === 0;

    // Reseta os botões quando ambos editEnabled e deleteEnabled são false
    if (!editEnabled && !deleteEnabled) {
        resetButtonState();
    }
}

// Reseta o estado dos botões
function resetButtonState() {
    editEnabled = false; // Redefine o modo de edição
    deleteEnabled = false; // Redefine o modo de exclusão

    editButton.textContent = originalEditButtonText; // Restaura o texto original do botão de edição
    deleteButton.textContent = originalDeleteButtonText; // Restaura o texto original do botão de exclusão
    
    // Habilita os botões
    editButton.disabled = false;
    deleteButton.disabled = false;
}

// Inicializa o estado dos botões na primeira execução
updateButtonState();
