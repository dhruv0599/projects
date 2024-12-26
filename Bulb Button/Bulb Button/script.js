var btn = document.querySelector('.switch'); 
const bulb = document.querySelector('.bulb'); 
var flag = 1; 
btn.addEventListener('click',function(){ 
   if(flag==1){ 
    bulb.style.backgroundColor='yellow' 
    flag=0; 
    btn.innerHTML='ON' 
   } 
   else{ 
    bulb.style.backgroundColor='black' 
    btn.innerHTML='OFF' 
    flag=1; 
   } 
});