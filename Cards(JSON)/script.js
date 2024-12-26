var arr = [
    {
        name : 'Dhruv',
        age : 25,
        city : 'Bhopal',
        salary : 10000
    },
    {
        name : 'Prashant',
        age : 30,
        city : 'delhi',
        salary : 3000
    },
    {
        name : 'Betu',
        age : 28,
        city : 'jhanshi',
        salary : 2000
    },
    {
        name : 'Himanshu',
        age : 26,
        city : 'indore',
        salary : 20000
    },
    {
        name : 'Yashwant',
        age : 24,
        city : 'nowgong',
        salary : 1000
    }
];

var sum = ``

arr.forEach(function(elem){
    sum += `<div class="card">
    <h1>${elem.name}</h1>
    <h4>${elem.age} , ${elem.city}</h4>
    <h5>${elem.salary}</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam in.</p>
</div>`
})

var body = document.querySelector('body')
body.innerHTML = sum
