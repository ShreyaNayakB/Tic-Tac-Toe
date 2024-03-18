let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let newGame=document.querySelector(".new-game");

let turn0=true;

const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            turn0=false;
            box.innerText='0';
        }
        else{
            turn0=true;
            box.innerText='X';
        }
        box.disabled=true;
        checkWinner();
    })
});
const showWinner=(winner)=>{
        msg.innerHTML='Congratulations'+' '+ winner+'!';
        msgContainer.classList.remove("hide");
        disableBoxes();
}
const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!="")
        {
        if(pos1Val===pos2Val&&pos2Val===pos3Val)
        {
            console.log('winner');
            showWinner(pos1Val);
        }
    }
        
    }
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
