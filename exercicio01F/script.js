let divRes = document.getElementById('res')
let selNumeros = document.querySelector('#selNumeros')
let txtNum = document.querySelector('#txtNum')
let numeros = []

function adicionar(){
    
    if(Number(txtNum.value) < 1 || Number(txtNum.value) > 100){
        alert('[ERRO] Verifique se o número está no intervalo indicado!')
    }else{
        
        if(numeros.indexOf(Number(txtNum.value)) == -1){
            numeros.push(Number(txtNum.value))
            let opt = document.createElement('option')
            opt.innerHTML = `Número ${txtNum.value} adicionado`
            selNumeros.appendChild(opt)
            divRes.innerHTML= ''
        }else{
            alert('Número já adicionado!')
        }
        
    }
    txtNum.value = ''
    txtNum.focus()
}

function limpar(){
    while(numeros.length > 0){
        numeros.pop()
    }
    selNumeros.innerHTML = ''
    divRes.innerHTML= ''
    txtNum.focus()
}

function finalizar(){

    let qntNumeros = numeros.length
    let maior = numeros[0]
    let menor = numeros[0]
    let soma = 0

    for(let pos in numeros){
        if (numeros[pos] > maior){
            maior = numeros[pos]
        }
        if(numeros[pos] < menor){
            menor = numeros[pos]
        }
        soma += numeros[pos]
    }

    divRes.innerHTML = ''
    divRes.innerHTML += `<p>Ao todo, foram adicionados ${qntNumeros} números!</p>`
    divRes.innerHTML += `<p>O maior número informado foi ${maior}!</p>`
    divRes.innerHTML += `<p>O menor número informado foi ${menor}!</p>`
    divRes.innerHTML += `<p>A soma de todos os números informados é ${soma}!</p>`
    divRes.innerHTML += `<p>A média é ${soma/qntNumeros}!</p>`
}