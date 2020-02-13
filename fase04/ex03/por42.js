function por42 (num1, num2){
    var result = null
    var contador = 0
    while ( num1 <= num2){
        if ( num1 % 42===0){
            contador = contador + 1
        }
        if (contador===2){
            return (num1)
        }
        num1++
    }if (!result){
        console.log("Nào Encontrado")
        return false
    }
}
