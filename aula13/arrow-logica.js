

//       ---   Arrow com Lógica   ---

const sum = (year) => {
    if (year >= 18 ) {
        return 'Maior idade'
    } else { 
        return 'Menor Idade'
    }
}

console.log(sum(20))