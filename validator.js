const validator = {
  isValid(numeroTarjeta) {

    // pasar string a array
    const arrayTarjeta = numeroTarjeta.split("")

    // dar vuelta los numeros del array
    const reversaArrayTarjeta = arrayTarjeta.reverse()

    const arrayMultiplicado = []

    // recorrer el array
    for (let i = 0; i < reversaArrayTarjeta.length; i++) {
      // verificar si la posición del número es impar (numero impar porque es un array y empieza en 0)
      if (i % 2 === 0) {
        arrayMultiplicado.push(Number(reversaArrayTarjeta[i]))
      } else {
        // multiplicar por 2 el numero impar
        arrayMultiplicado.push(reversaArrayTarjeta[i] * 2)
      }
    }

    // recorrer el array
    for (let i = 0; i < arrayMultiplicado.length; i++) {
      // verificar si tiene 2 digitos
      if (arrayMultiplicado[i] > 9) {
        // separar el numero, se suma y se asigna a la posicion correspondiente
        const separarNumero = arrayMultiplicado[i].toString().split("")
        arrayMultiplicado[i] = Number(separarNumero[0]) + Number(separarNumero[1])
      }
    }

    // declarar una nueva variable para sumar los valores del array
    let acumulado = 0
    for (let i = 0; i < arrayMultiplicado.length; i++) {
      acumulado = acumulado + arrayMultiplicado[i]
    }

    // retorna verdadero cuando es un multiplo de 10
    return acumulado % 10 === 0
  }, 
  maskify(numeroTarjeta){
    numeroTarjeta = numeroTarjeta.split("").reverse()
    const acumulador = []
    for(let i = 0; i < numeroTarjeta.length; i++){
      if(i<4){
        acumulador.push(numeroTarjeta[i])
      }else{
        acumulador.push("#")
      }
    }
    return acumulador.reverse().join("")
  }
};

export default validator;

// 12345
// [1,2,3,4,5] --> [5,4,3,2,1]
// [5,4,3,2,#] --> [#,2,3,4,5] --> va a devolver string #2345