/**
 *  + -> Adição
 *  - -> subtração
 *  * -> mutiplicação
 *  / -> divisão
 *  ** -> Potenciação
 *  % -> Modulo
 *  ++ -> incremento
 *  -- -> decremento
 *  += -> pega o valor atual da variavel e soma com outro valor
 *  -= -> idem so que vai subtrair
 *  *= -> idem so que vai multiplicar
 *  /= -> item so que vai dividir
 *  **= -> idem
 *  %= -> idem
 *  -------Precedencia 
 *  () 1°
 *  ** 2°
 *  * ou / ou % 3°
 *  + ou - 4°
 */

let cont = 1 
let cont2 = 1
console.log(cont++, ++cont2) // a diferença é a posição do incremento

const n1 = 10
const n2 = parseFloat('5.2') //parseInt ou //Number
console.log(typeof n2)
console.log(n1 + n2)