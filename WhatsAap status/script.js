var arr = [
    {
        dp:'https://images.unsplash.com/photo-1730238103847-89a39888ffe3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1730941343980-5d81ce7c768b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D',
        username:'devil'
    },
    {
        dp:'https://images.unsplash.com/photo-1734126801303-06da3e3f2db6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734282432994-064de2eb1d25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        username:'black lover'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1726743697632-5790d2ebf36b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D',
        story:'https://plus.unsplash.com/premium_photo-1674147605306-7192b6208609?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
        username:'angel priya'
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
    sum = sum + ` <div class="status" id=${idx}>
                <img src="${elem.dp}" alt="">
                <div class="status-in">
                    <h4>${elem.username}</h4>
                    <h6>5 min ago</h6>
                </div>
            </div>`
})

var allstatus = document.querySelector('#allstatus')
var full = document.querySelector('#full')

allstatus.innerHTML = sum

allstatus.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(inter)
    },3000)
})
