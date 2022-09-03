let changeTitle = (name) => {
    let changeTitleNamePersonagem = name;  
    let newTitlePersonagem = document.getElementById("title").innerText = changeTitleNamePersonagem.value;
    localStorage.setItem("titlePersonagem", newTitlePersonagem);
};