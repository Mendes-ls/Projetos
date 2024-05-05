function verificar(){
    var data = new Date()
    var ano= data.getFullYear()
    var fano = document.getElementById('txtano')
    var  res= document.getElementById('res')
    if(fano.value.length==0||Number (fano.value)>ano){
        alert('Verifique os Dados e Tente Novamente!')
    }else{
        var fsex = document.getElementsByName('rsex')
        var idade = ano-Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','pic')

        if(fsex[0].checked){
            gênero='Homem'
            if(idade>=0 && idade<=10){
                img.setAttribute('src','menino.png')

            }else if(idade<18){
                img.setAttribute('src','jovem.png')

            }
            else if(idade<50){
                img.setAttribute('src','homem.png')
            }
            else if(idade<100){
                img.setAttribute('src','senhor.png')

            }

        }else if (fsex[1].checked){
            gênero= 'Mulher'
            if(idade>=0 && idade<=10){
                 img.setAttribute('src','menina.png')

            }else if(idade<18){
                 img.setAttribute('src','mina.png')

            }
            else if(idade<50){
                 img.setAttribute('src','mulher.png')

            }
            else if(idade<100){
                 img.setAttribute('src','senhora.png')

            }
        
        
        }

    res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
    res.style.textAlign='center'
    res.appendChild(img)
}

    
}
