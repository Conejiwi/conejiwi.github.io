import validator from './validator.js';

// console.log(validator.isValid("4083952015263"));

/* for, crea una variable con valor 0. Condicion que si es true, hace lo que está dentro del for.
El i++ le suma 1 a la variable i. 
*/

// Poder ingresar el texto en el recuadro + boton con funcionalidad
const boton = document.getElementById("boton")
const text = document.getElementById("text")
let tarjetaSinGato = ""
boton.addEventListener("click", function(){
  const input = document.getElementById("text");
  const isValid = validator.isValid(input.value);
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

text.addEventListener("focusout", function(){
  tarjetaSinGato = text.value
  text.value = validator.maskify(text.value)
})

text.addEventListener("focusin", function(){
  text.value = tarjetaSinGato
})



