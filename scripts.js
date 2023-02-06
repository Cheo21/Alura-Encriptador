const text_entrada = document.getElementsByClassName("text-entrada").item(0);
const text_salida = document.getElementsByClassName("text-resultado").item(0);
const btn_encriptar = document.getElementsByClassName("btn-encriptar").item(0);




function encriptar(texto){
    return texto
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");

} 


btn_encriptar.addEventListener('click', ()=>{
    text_salida.value ="";
    if(text_entrada.value == ""){
        text_salida.style.backgroundImage = "url('asset/Muñeco.png')";
    }
    else{
    text_salida.style.backgroundImage = "none";
    text_salida.value = encriptar(text_entrada.value);
    }
})