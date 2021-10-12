//const myRequest = fetch("https://jsonplaceholder.typicode.com/todos/1")
//console.log(myRequest); //promise
//pending //resolved

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json)
})

const getData = ()=>{
    const body= document.querySelector("body")
    fetch(route)
    .then(response=> response.json())
    .then(json=>{
        const divs = json.map(object=>{
            let description="<div>"
        })
       for(const key in json){
           content += `<p>this is my ${key}: $json[key]} </p>`


       }
        body.innerHTML=divs.join("")


    })
}
const route="https://jsonplaceholder.typicode.com/todos/1"

const getData=()=>{
     fetch(route).then (response=>response.json())
     .then(json=>{
         for(const objects of json){
             let description=""
            for (const key in object){
                desctiptiom += `<p>${key}: ${objecy[key]}</p>`
                console.log(description)
            }
            description='<div>'+description+'<div>'
            body.innerHTML=divs.join("")
        }
            const persons = document.querySelectorAll("div")
            persons.forEach(person=>persons.style.border = ("1px solid black")

         }
     })

}
}
