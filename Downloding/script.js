var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var card = document.querySelector('card')
var growth = document.querySelector('#growth')

var grow = 0
btn.addEventListener('click',function(){
    var growInterval = setInterval(function(){
        grow++
        h1.innerHTML = grow +'%'
        growth.style.width = grow +'%'
        
    },50)

    setTimeout(function(){
        clearInterval(growInterval)
        btn.innerHTML = 'Downloded'
        btn.style.opacity = 0.4
        btn.style.pointerEvents = 'none'
        card.style.color = 'red'
    },5000)

})