

const btn  = document.querySelector('#send');

let name = document.getElementById('name')
let pessoas = document.getElementById('pessoas')


btn.addEventListener('click', function(e) {

    let campoA = document.getElementById('#campoA')
    const num1 = document.querySelector("#num-1");
    let campob = document.getElementById('#campoB')
    const num2 = document.querySelector("#num-2");
    const mensagemErro = `O valor do campo: ${"campoB"} não é maior que o valor do: ${"campoA"}`; /* Esta mensagem é feita com Aspas SHIFT + ` */
    const mensagemSucesso = `=-=-=- Correto!! -=-=-= \nO valor do campo: ${"campoB"} É maior que o valor do: ${"campoA"}`; /* Esta mensagem é feita com Aspas SHIFT + `*/
    e.preventDefault();
    


    if (value = num2.value >>= num1.value){
        alert(mensagemSucesso);

        num1.value = ' ';
        num2.value = ' ';

    }else{
        alert(mensagemErro);
        num1.value = ' ';
        num2.value = ' ';

    }

});