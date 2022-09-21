`use strict`

function adicao (){
    const primeiroNumero = document.getElementById('numero').value
    const segundoNumero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    const conta = 'O resultado é: $(primeiroNumero) $(segundoNumero)'

    resultado.textContent = somarCalculadora
    
}
function subtracao (){
    const primeiroNumero = document.getElementById('numero').value
    const segundoNumero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    const conta = 'O resultado é: $(primeiroNumero) $(segundoNumero)'

    resultado.textContent = somarCalculadora
    
}
function multiplicacao (){
    const primeiroNumero = document.getElementById('numero').value
    const segundoNumero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    const conta = 'O resultado é: $(primeiroNumero) $(segundoNumero)'

    resultado.textContent = somarCalculadora
    
}
function divisao (){
    const primeiroNumero = document.getElementById('numero').value
    const segundoNumero = document.getElementById('numero').value
    const resultado = document.getElementById('resultado')

    const conta = 'O resultado é: $(primeiroNumero) $(segundoNumero)'

    resultado.textContent = somarCalculadora
    
}

document.getElementById('somar').addEventListener('click', somar)
