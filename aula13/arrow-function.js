/*           ---     conceito básico    ---

    só pode fazer uma arrow function sem () 
    quando só tem um parametro

*/

//           ---   exemplo que funciona   ---

const sum = number => number * 2

console.log(sum(5))

//           ---   exemplo que não funciona   ---

// const sumDois = number1, number2 => number1 + number2





// neste caso o arrow function teria que ficar assim

const sumTres = (num1, num2) => num1 + num2

console.log(sumTres(2, 2))