import validator from './validator.js';

// console.log(validator.isValid("4083952015263"));

/* for, crea una variable con valor 0. Condicion que si es true, hace lo que está dentro del for.
El i++ le suma 1 a la variable i. 
*/

// Poder ingresar el texto en el recuadro + boton con funcionalidad
const boton = document.getElementById("boton")
const numTarjeta = document.getElementById("num-tarjeta")
let tarjetaSinGato = ""
boton.addEventListener("click", function(){
  const isValid = validator.isValid(tarjetaSinGato);
  if (isValid) {
    const alerta = document.getElementsByClassName("valida")
    alerta[0].classList.remove("hidden")
    const alerta1 = document.getElementsByClassName("invalida")
    alerta1[0].classList.add("hidden")
  }else{
    const alerta = document.getElementsByClassName("invalida")
    alerta[0].classList.remove("hidden")
    const alerta1 = document.getElementsByClassName("valida")
    alerta1[0].classList.add("hidden")
  }
  /* console.log(validator.isValid(input.value))
  console.log(validator.maskify(input.value)) */
})

numTarjeta.addEventListener("focusout", function(){
  tarjetaSinGato = numTarjeta.value
  numTarjeta.value = validator.maskify(numTarjeta.value)
})

numTarjeta.addEventListener("focusin", function(){
  numTarjeta.value = tarjetaSinGato
})



