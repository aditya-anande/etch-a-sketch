const container = document.querySelector(".container");
let num=0;
function createGrid(num) {
    container.innerHTML=" ";
    for(i=0;i<num;i++) {
        const square=document.createElement("div");
        square.setAttribute("style","display:flex;");
        square.style.height=container.clientHeight/num+"px"
        container.appendChild(square);
        for(let j=0;j<num;j++) {
            const div=document.createElement("div");
            div.classList.add("grid");
            div.setAttribute("style","background-color:white;opacity:1;border:1px solid black;flex:1;");
            square.appendChild(div);
        }
    }
}

createGrid(16);

//hover colour

function hoverColor() {
const div1 = document.querySelectorAll(".grid");
div1.forEach((div) =>{
    div.addEventListener("mouseover",() =>{
        div.setAttribute("style","background-color:black;opacity:1;border:1px solid black;flex:1;");
    })
}) 
}
hoverColor();

button=document.querySelector("button");
button.addEventListener("click",()=>{
    let num1=prompt("Enter a value between 2-100");
    if(num1>=0&&num1<=100) {
    createGrid(num1);
    hoverColor();
    }
    else {
        alert("Please enter value less than 100")
    }
})