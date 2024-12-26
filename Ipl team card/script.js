var names = ['Ms Dhoni','Ravindra Jadeja','Shivam Dube','Rahul Tripathi','Gurjapneet Singh','Devon Conway','Ravichandran Ashwin','Rahul Tripathi','Deepak Hooda','Ruturaj Gaikwad','Vijay Shankar']

var btn = document.querySelector('button')
var h2 = document.querySelector('h2')

btn.addEventListener('click',function() {
    var num = Math.floor(Math.random()*names.length)

    h2.innerHTML = names[num]



})