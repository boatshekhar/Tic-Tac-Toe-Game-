let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let contain = document.querySelector(".msg-cont");
let msg = document.querySelector(".message");
let newGame = document.querySelector(".new-game")
let turnO = true;
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
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box clicked");
        if (turnO) {
            box.innerText = "0";
            turnO = false;
        }else{
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});
const checkWinner = () =>{
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 != "" && val2 != "" && val3 != "" ) {
            if(val1===val2 && val2 === val3){
                disabledboxes();
                displaywinner(val1);
            }
        }

    }
};
const displaywinner = (winner) =>{
    msg.innerText = "Congratulations, the winner is "+winner;
    msg.classList.remove("hidden");
}
const disabledboxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const resetGame = () => {
    turnO = true;
    enableboxes();
    msg.classList.add("hidden");

}
newGame.addEventListener("click",resetGame);