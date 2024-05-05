let num = document.getElementById('caixan')
let lista = document.getElementById('list')
let res = document.getElementById('res')
let valores =[]

function isNumero(n){
if (Number(n)>=1 && Number(n)<=100){
    return true
}else{
    return false
}
}
function inLista(n, l){
if(l.indexOf(Number(n)) !=-1){
    return true
}else{
    return false
}
}
function add(){
    if(isNumero(num.value)&& !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} adicionado.`
        lista.appendChild(item)

    }else{
        alert('Numero ja encontrado na lista ou insistente')

    }
          
}
function fim(){
    if(valores.length===0){
        alert('Adicione um valor !')
    }else{
    let tot= valores.length
    let menor =valores[0]
    let maior=valores[0]
    let soma = 0

    for( let pos in valores){
        soma +=valores[pos]
        media =soma/tot
        res.innerHTML=` A soma entre eles é ${soma}<br>`
        res.innerHTML+=`O numero total de elementos é ${tot}<br>`
        res.innerHTML+= `O maior número é ${Math.max(...valores)}<br>`
        res.innerHTML+=`O menor número é ${Math.min(...valores)}<br> `
        res.innerHTML+= `A média deles é ${media}`

    }
    
   

   
}
    
}