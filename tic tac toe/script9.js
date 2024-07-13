let boxes= document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let gamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let winner=document.querySelector("#msg");

let turnO = true;
let count =0;

const winnerpattern=[
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
    turnO = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
  };

boxes.forEach((box) =>{
    box.addEventListener("click", () =>
        {
            console.log("box was clicked");
            if(turnO)
                {
                    box.innerText="O";
                    turnO=false;

                }
                else{
                    box.innerText="X";
                    turnO=true;
                }
                box.disabled=true;

                checkwinner();
        });
    });
    const disabledboxes =() =>{
        for (let box of boxes){
         box.disabled=true;
        }
     };
     const enableboxes =() =>{
        for (let box of boxes){
         box.disabled=false;
         box.innerText = "";
        }
     };
    const showwinner =(winner) =>{
        msg.innerText=`congratulations,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disabledboxes();


    }

    const checkwinner= () =>{
        for(let pattern of winnerpattern){
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val= boxes[pattern[2]].innerText;

            if(pos1val!=""&& pos2val!="" && pos3val!=""){
                if(pos1val==pos2val&& pos2val==pos3val){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
            }
        
        }
        
    }
    };
    newbtn.addEventListener("click",resetGame);
    reset.addEventListener("click",resetGame);


