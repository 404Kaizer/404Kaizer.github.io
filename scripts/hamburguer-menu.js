let openHamburguer = () => {
    hamburguerMenu.style.display = "none";
    xHamburguerMenu.style.display = "block";
    saveLoadDelBtns.style.display = "flex";
    headerTitle.style.display = "none";
};

let closeHamburguer = () => {
    hamburguerMenu.style.display = "";
    xHamburguerMenu.style.display = "none";
    saveLoadDelBtns.style.display = "none";
    headerTitle.style.display = "block";
};