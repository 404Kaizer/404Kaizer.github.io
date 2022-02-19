document.getElementById("imgSelectBtn").addEventListener("change", e => {
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
        document.getElementById("charImg").src = reader.result;
        upload.value = "";
    }
    reader.readAsDataURL(file);
});

perInfoBtn = document.getElementById("perInfoBtn");
perInfoBtnFake = document.getElementById("perInfoBtnFake");
infoInput = document.getElementById("infoInput");

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