// yazinin gorunmesi

// let p=document.querySelectorAll('p')
let li=document.querySelectorAll('li')
li.forEach((element)=> {
    element.addEventListener('mouseover',()=>{
       let p=element.querySelector('p')
       p.style.display='block'
        })   
});


// yazinin gorunmemesi
li.forEach(element => {
    element.addEventListener('mouseout',()=>{
        let p=element.querySelector('p')
        p.style.display='none'   
    }) 
});

