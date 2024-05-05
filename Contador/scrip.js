function contar(){
    var e1= document.getElementById('pnumero')
    var e2=document.getElementById('fnumero')
    var e3=document.getElementById('saltador')
    var res=document.getElementById('result')
    if(e1.value.length==0||e2.value.length==0||e3.value.length==0){
        //alert('VERIFIQUE OS DADOS.')
        res.innerHTML='impossível contar'
    }else{
        res.innerHTML='Calculando:<br>'
        var d1= Number(e1.value)
        var d2=Number(e2.value)
        var d3 =Number(e3.value)
        if(d3<=0){
            res.innerHTML='Passo invalido'
            d3=1
        }
        if(d1<d2){
            //crescente
              for(var e4=d1;e4<=d2;e4+=d3){
        res.innerHTML+=`${e4} \u{1F4A8}`
        
    }
    res.innerHTML+=`\u{1f3c1}`
}else{
    //regressivo
    for(var e4=d1; e4>=d2; e4-=d3){
        res.innerHTML+=`${e4} \u{1F4A8}`
    }
    res.innerHTML+=`\u{1f3c1}`
}
    }
}