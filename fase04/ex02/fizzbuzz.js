function fizzbuzz(num1, num2){
    var c = num1
    while ( c <= num2){
        if ( c % 3 === 0 && c % 5 === 0){
            console.log(c + " FizzBuzz")
        } else if (c % 5 === 0){
            console.log(c + " Buzz")
        } else if ( c % 3 === 0){
            console.log(c + " Fizz")
        } else {
            console.log(c)
        }
        c++
    }
}
