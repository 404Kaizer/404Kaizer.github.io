let chooseSheetValidation = () => {
    nameCheck = prompt("Digite o Nome do Personagem Que Deseja Carregar ou Criar: ");

    if ((nameCheck == null) || (nameCheck === "") || (nameCheck === undefined)) {
        alert("Nenhum Personagem Selecionado. Digite o Nome do Personagem Para Continuar ou Clique em Cancelar.");
        return;
    }

    if (nameCheck !== localStorage.getItem("charName" + nameCheck)) {
        alert("Este Personagem Ainda Não Existe.");
        alert("Para Criar um Novo Personagem, Digite o Mesmo Nome Que Escolheu no Campo '* Nome' e Salve. Faça Isso Antes de Preencher Quaisquer Outras Informações do Personagem.");
    }

    nameCheck = localStorage.setItem("nameCheck", nameCheck);
    location.reload();
}