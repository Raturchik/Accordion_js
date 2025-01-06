let label = document.body.querySelector(".container");
let title = document.body.querySelector(".box-title");
let text = document.body.querySelector(".box-text");
label.addEventListener("click", function(event){
    const targetElement = event.target.closest(".box");    
    if(targetElement){
        targetElement.classList.toggle("open"); 
    }
    
});
