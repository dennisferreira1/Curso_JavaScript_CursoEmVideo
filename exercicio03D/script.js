function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anof = document.querySelector("#txtano")
    var res = document.querySelector("#res")

    if(anof.value.length == 0 || Number(anof.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var sexf = document.getElementsByName('radsex')
        var idade = ano - Number(anof.value)
        var fase = ""
        var img = document.createElement("img")

        if(sexf[0].checked){ // sexo masculino
            if(idade < 10){
                fase = "bebê"
                img.setAttribute("src", "bebemenino.png")
            }else if(idade < 20){
                fase = "jovem"
                img.setAttribute("src", "jovemhomem.png")
            }else if(idade < 60){
                fase = "adulto"
                img.setAttribute("src", "adultohomem.png")
            }else{
                fase = "idoso"
                img.setAttribute("src", "idosohomem.png")
            }

        }else{ // sexo feminino
            if(idade < 10){
                fase = "bebê"
                img.setAttribute("src", "bebemenina.png")
            }else if(idade < 20){
                fase = "jovem"
                img.setAttribute("src", "jovemmulher.png")
            }else if(idade < 60){
                fase = "adulto"
                img.setAttribute("src", "adultamulher.png")
            }else{
                fase = "idosa"
                img.setAttribute("src", "idosamulher.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${fase} com ${idade} anos de idade!</p>`
        res.appendChild(img)
    }
}