function tabuada(){
    var e1 = document.getElementById('num')
    var tab= document.getElementById('stab')
   // var res=document.getElementById('res')
   if(e1.value.length==0){
       alert('Digite um numero!')
    }else{
       var d1=Number(e1.value)
       var e2=1
       tab.innerHTML=''//Limpa o conteúdo
       for(var e2=1;e2<=10;e2++){
        let item=document.createElement('option')
        item.text=`${d1}x${e2}=${d1*e2}`
        tab.appendChild(item)//Adicionar um elemento filho
       }
       
   }
}