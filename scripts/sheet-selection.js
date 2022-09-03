let chooseSheetValidation = () => {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Carregar ou Criar: ");

    if ((nameCheck === null) || (nameCheck === " ") || (nameCheck === undefined)) {
        alert("Nenhum Personagem Selecionado. Digite o Nome do Personagem Para Continuar ou Clique em Cancelar.");
    }

    if (nameCheck !== localStorage.getItem("charName" + nameCheck)) {
        alert("Este Personagem Ainda Não Existe. Salve Apenas se Quiser Criá-lo.");
    }

    nameCheck = localStorage.setItem("nameCheck", nameCheck);
    location.reload();
}