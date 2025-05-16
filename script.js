const soma = document.getElementById('adicionar')
const subtracao = document.getElementById('subtrair')
const reset = document.getElementById('resetar')
const contador = document.getElementById('contador')
const incrDecr = document.getElementById('incr-decr')

let cont = 0;

soma.addEventListener('click', () => {
    
    let inputValue = parseInt(incrDecr.value)
    cont = cont + inputValue
    
    contador.innerHTML = cont
})

subtracao.addEventListener('click', () => {
    
    let inputValue = parseInt(incrDecr.value)
    if(cont <= 0){
        cont = 0
    }else{
        cont = cont - inputValue
    }

    contador.innerHTML = cont
})

reset.addEventListener('click', () => {
    cont = 0

    contador.innerHTML = 0
})