document.getElementById("boton-tema").addEventListener("click",()=>{
    const body = document.body
    body.classList.toggle("tema-oscuro");
    body.classList.toggle("tema-claro")
})