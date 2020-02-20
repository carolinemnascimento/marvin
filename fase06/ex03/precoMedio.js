function precoMedio (arroz){
    let med=0;
    let max= -1;
    let resp= "";
    let i = 0;
    
    whille (i<arguments.length){
        med += arguments[i].preco;
        if( arguments[i].preco>max){
            max=arguments[i].preco;
            resp=arguments[i].nome;
        }
        i++;
    }
    
    console.log("O produto mais caro se chama \"" + resp + "\"")
    return med/arguments.length;
}
