button=document.querySelector(".btn-darkmode");
body=document.querySelector(".body");
paragraf=document.querySelector(".text");


button.addEventListener("click",changeMode=()=>{
    if(button.classList.contains("light")){
        button.classList.remove("light");button.classList.add("dark");
        body.classList.remove("light");body.classList.add("dark");
        paragraf.classList.remove("light");paragraf.classList.add("dark");
        button.textContent="Activar light mode"
    }
    else if(button.classList.contains("dark")){
        button.classList.remove("dark");button.classList.add("light");
        body.classList.remove("dark");body.classList.add("light");
        paragraf.classList.remove("dark");paragraf.classList.add("light");
        button.textContent="Activar dark mode"

    }
})