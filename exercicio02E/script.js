function gerarTabuada(){
    let txtNum = document.querySelector('#txtNum')
    let selTabuada = document.querySelector('#selTabuada')

    if(txtNum.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        selTabuada.innerHTML = ''
        let num = Number(txtNum.value)
        let c = 0
        while(c <= 10){
            let opt = document.createElement("option")
            opt.value = `tab${c}`
            opt.text = `${num} x ${c} = ${num*c}`
            selTabuada.appendChild(opt)
            c++
        }
    }


}