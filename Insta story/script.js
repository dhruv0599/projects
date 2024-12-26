var arr = [
    {
        dp:'https://yt3.googleusercontent.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s900-c-k-c0x00ffffff-no-rj',
        story:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIrvsbiKXKL1R4PqXaIzSxR49kPmTqubKag&s',
        username:'Sheryians coading school'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdykjXpz7F7AuRJLx1_vbXlHRutZi3MpSCoA&s',
        story:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR592f0p-74ZjpdHNSx2VLTGzX_5iCC808IbA&s',
        username:'Sarthak sharma'
    },
    {
        dp:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoeHeWLUXaTMx6lexz8Fy8I2Usaf9tC2VYRw&s',
        story:'https://media.licdn.com/dms/image/v2/D4D03AQG_2E9DMYnDRg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706865413542?e=2147483647&v=beta&t=zIBgwj5FGE2gRP4bCvVbbc5IeQxIOwZhYoDheOWB78o',
        username:'Harsh sharma'
    },
    {
        dp:'https://images.unsplash.com/photo-1733175697085-aa500b61ac74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDd8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1732492211739-16eea9575e84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D',
        username:'Mr. varun'
    },
    {
        dp:'https://images.unsplash.com/photo-1731484636405-35018e2a8a86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1720048171419-b515a96a73b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D',
        username:'Its chapri'
    },
    {
        dp:'https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNzZ8fHxlbnwwfHx8fHw%3D',
        story:'https://plus.unsplash.com/premium_photo-1673239605865-bfcab01dca06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNTN8fHxlbnwwfHx8fHw%3D',
        username:'The boss'
    },
]

var sum = ``
arr.forEach(function(elem,idx){
    sum = sum + `<div class="story">
                <img id=${idx} src="${elem.dp}" alt="">
             </div>`
})

var storiyan = document.querySelector('#storiyan')
var full = document.querySelector('#full')
var fullUser = document.querySelector('#full h2')
var growth = document.querySelector('#growth')

storiyan.innerHTML = sum

storiyan.addEventListener('click',function(dets){
    var grow = 0

    var gold = arr[dets.target.id]

    var inter = setInterval(function(){
        grow++

        growth.style.width = grow+'%'
    },30)
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
    fullUser.innerHTML = gold.username
    

    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },3000)
})
