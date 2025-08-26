function suma(){
    const elemento1 = document.getElementById("suma1");
    const elemento2 = document.getElementById("suma2");
   const resultado = document.getElementById("resultadosuma");
   resultado.innerHTML = parseInt(elemento1.value) + parseInt(elemento2.value);

}