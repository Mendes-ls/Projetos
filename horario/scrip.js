function carregar(){

var msg=document.getElementById("msg")
var img=document.getElementById("foto")
var data= new Date()
var hora=data.getHours()



msg.innerHTML=`Agora é ${hora} horas.`
if(hora>=5 && hora<12){
    //BOM DIA!!
    img.src="manha.png"
    document.body.style.background="#a16b33"
} else if(hora>=12 && hora<18){
    //BOA TARDE
    img.src="tarde.png" 
    document.body.style.background="#fe7f29"
} else {
    //BOA NOITE
    img.src="noite.png" 
    document.body.style.background="#3c3b35"
}
}