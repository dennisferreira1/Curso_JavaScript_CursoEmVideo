function contar(){
    var inicio = Number(document.querySelector("#txtIni").value)
    var fim = Number(document.querySelector('#txtFim').value)
    var passo = Number(document.querySelector('#txtPasso').value)
    var res = document.querySelector('#res')

    if(passo > 0){ 

        res.innerHTML = '<br/>Contando:<br/>'
        if(inicio < fim){ 
            for(var cont = inicio; cont <= fim; cont+=passo){
                res.innerHTML += `${cont} \u{1F449} `
            }

        }else{
            for(var cont = inicio; cont >= fim; cont-=passo){
                res.innerHTML += `${cont} \u{1F449} `
            }
        }    
        
        res.innerHTML += `\u{1F3C1}`

    }else{
        res.innerHTML = '<br/>Impossível contar!<br/> '
        alert('O passo deve ser maior que zero!')
    }
}