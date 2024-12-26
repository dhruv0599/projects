var istatus = document.querySelector('h5')
var btn = document.querySelector('button')
var img = document.querySelector('img')

var flag = 0

btn.addEventListener('click',function(){

    if (flag == 0) {
        setTimeout(function(){
            istatus.innerHTML = 'Friend'
            istatus.style.color = 'green'
            btn.innerHTML = 'Remove Friend'
        },3000)

        istatus.innerHTML = 'Request Sending...'
        istatus.style.color = 'lightgreen' 
        btn.innerHTML = 'sending...'
        flag = 1
    }
       
    else {
        setTimeout(function(){
            istatus.innerHTML = 'Stranger'
            istatus.style.color = 'red'
            btn.innerHTML = 'Add Friend'
            btn.style.color = 'green'
        },2000)
        istatus.innerHTML = 'Request Cancling...'
        istatus.style.color = 'red'
        btn.innerHTML = 'Cancleing...'
        btn.style.color = 'red'
        flag = 0
    }

})

