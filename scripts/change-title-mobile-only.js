let changeTitle = () => {
    let newTitlePersonagem = document.getElementById("title").innerHTML;
    newTitlePersonagem = localStorage.getItem("nameCheck")
    localStorage.setItem("titlePersonagem", newTitlePersonagem);
};