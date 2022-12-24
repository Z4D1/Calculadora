const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const botao4 = document.querySelector('.botao4');
const botao5 = document.querySelector('.botao5');
const botao6 = document.querySelector('.botao6');
const botao7 = document.querySelector('.botao7');
const botao8 = document.querySelector('.botao8');
const botao9 = document.querySelector('.botao9');
const botao10 = document.querySelector('.botao10');
const botao11 = document.querySelector('.botao11');
const botao12 = document.querySelector('.botao12');
const botao13 = document.querySelector('.botao13');
const botao14 = document.querySelector('.botao14');
const botao15 = document.querySelector('.botao15');
const botao16 = document.querySelector('.botao16');
const resultado = document.querySelector('.resultado');


function insert(num) {
    let numero = resultado.innerHTML;
    resultado.innerHTML = numero + num;
}

function clear() {
    resultado.innerHTML = " "
}

botao1.addEventListener('click', function(e) {
    clear()
})

function calcular() {
    if (resultado) {
        resultado.innerHTML = eval(resultado)
    }
}

botao16.addEventListener('click', function(e) {
    calcular()
})