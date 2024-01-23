let boxes = document.querySelectorAll(".box");
let resetbutton =  document.querySelector("#ret");
let newbtnGame = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnX = true;
    enbleBoxes();
    msgcontainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    }) 
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enbleBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () =>{
    for(let pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
       }
    }
}
newbtnGame.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);