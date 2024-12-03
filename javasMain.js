const btn  = document.querySelector('#send');

let name = document.getElementById('name')
let pessoas = document.getElementById('pessoas')


btn.addEventListener('click', function(e) {

    e.preventDefault();
    
    const name = document.querySelector("#name");
    const pessoas = document.querySelector("#pessoas");
    let campoA = document.getElementById('#campoA')
    let campob = document.getElementById('#campoB')
    const mensagemErro = `O valor do campo: ${"campoB"} não é maior que o valor do: ${"campoA"}`; /* Esta mensagem é feita com Aspas SHIFT + `*/
    const mensagemSucesso = `=-=-=- Correto!! -=-=-= \nO valor do campo: ${"campoB"} É maior que o valor do: ${"campoA"}`; /* Esta mensagem é feita com Aspas SHIFT + `*/
    if (value = pessoas.value >>= name.value){
        alert(mensagemSucesso);
    }else{
        alert(mensagemErro);

    }

});