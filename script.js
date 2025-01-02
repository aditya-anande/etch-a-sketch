const container = document.querySelector(".container");
let num=0;
function createGrid(num) {
    container.innerHTML=" ";
    for(i=0;i<num*num;i++) {
        const square=document.createElement("div");
        square.style=`border:2px solid black; min-height:10px; min-width:10px; flex:auto;`;
        container.appendChild(square);
    }
}

createGrid(16);