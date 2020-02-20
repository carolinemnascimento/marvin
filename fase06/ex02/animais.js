function animais (array) {  
    var  obj = array;
    var novaIdade = 5;
    var i = 0;
   
    while (i< array.length) {
        var posicao = obj[i];
        delete posicao.altura;
        if (posicao.idade !== null) {
            posicao.idade = novaIdade}
            novaIdade++;
            i++;
        }
    return array;
}