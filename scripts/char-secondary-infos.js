perInfoBtn.addEventListener("click", ()=> {
    infoInput.style.display = "grid";
    perInfoBtn.style.display = "none";
    perInfoBtnFake.style.display = "block"
});

perInfoBtnFake.addEventListener("click", ()=> {
    infoInput.style.display = "none";
    perInfoBtn.style.display = "block";
    perInfoBtnFake.style.display = "none"
});