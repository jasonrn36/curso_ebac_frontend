const btn  = document.querySelector('#somar');

let num1 = document.getElementById('num-1');
let num2 = document.getElementById('num-2');


btn.addEventListener('click', function() {

    
    var num1 = parseInt(document.querySelector("#num-1").value);
    var num2 = parseInt(document.querySelector("#num-2").value);
    let campoA = document.getElementById('#campoA');
    let campoB = document.getElementById('#campoB');
    const mensagemErro = `Este bloco soma dois campos: \ncampoA + campoB, \nTente novamente`;

    var resultado = num1+num2;

    if (resultado){
        alert(`A soma do ${"campoA"} mais o ${"campoB"} é igual a: ${resultado}`);
    }else{
        alert(mensagemErro);

    }

});

/*############################################################################*/
/* Área dO BLOCO SUBTRAÇÃO */
const subtracao  = document.querySelector('#subtrair');

let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');


subtracao.addEventListener('click', function() {

    
    var num3 = parseInt(document.querySelector("#num-3").value);
    var num4 = parseInt(document.querySelector("#num-4").value);
    let caixa1 = document.getElementById('#caixa1');
    let caixa2 = document.getElementById('#caixa2');
    const mensagemErro1 = `Este bloco soma dois campos: \ncampoA + campoB, \nTente novamente`;

    var subtraido = num4-num3;

    if (num3-num4){
        alert(`A subtração do ${"caixa1"} menos o ${"caixa1"} é igual a: ${subtraido}`);
    }else   {

        alert(mensagemErro1);
    }


});

