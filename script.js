let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
let msgShow = document.querySelector("#msg");
let usshow = document.querySelector("#user-score");
let csshow = document.querySelector("#computer-score");
let resetbtn = document.querySelector("#reset");

resetbtn.addEventListener("click",()=>{
    userScore = 0;
    computerScore = 0;
    msgShow.innerText = "Play your move";
    msgShow.classList.remove("changeWin", "changeLose", "changeDraw");
    usshow.innerText = userScore;
    csshow.innerText = computerScore;
})

const draw = (uc,cc) =>{
    msgShow.classList.remove("changeWin", "changeLose", "changeDraw");
    msgShow.innerText = `Draw as your choice and computer choice are same i.e ${uc}.`
    msgShow.classList.add("changeDraw");

};

const win = (uc,cc) =>{
    msgShow.classList.remove("changeWin", "changeLose", "changeDraw");
    userScore +=1;
    usshow.innerText = userScore;
    msgShow.classList.add("changeWin");
    msgShow.innerText = `You win as ${uc} beats ${cc}.`
};

const lose = (uc,cc) =>{
    msgShow.classList.remove("changeWin", "changeLose", "changeDraw");
    computerScore +=1;
    csshow.innerText = computerScore;
    msgShow.classList.add("changeLose");
    msgShow.innerText = `You lose as ${cc} beats ${uc}.`
};


const computerChoice = () =>{
    //generate computer choice
    let choices = ['rock','paper','scissor'];
    let randChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer choice was ${randChoice}.`);
    return randChoice;
};

const playgame = (uc) => {
    let cc = computerChoice();
    if(uc==cc)
        draw(uc,cc);
    else if (uc == 'rock' && cc == 'paper')
        lose(uc,cc);
    else if (uc == 'rock' && cc == 'scissor')
        win(uc,cc);
    else if (uc == 'paper' && cc == 'rock')
        win(uc,cc);
    else if (uc == 'paper' && cc == 'scissor')
        lose(uc,cc);
    else if (uc == 'scissor' && cc == 'rock')
        lose(uc,cc);
    else if (uc == 'scissor' && cc == 'paper')
        win(uc,cc);
};

choices.forEach((indChoice)=>{
    indChoice.addEventListener("click",()=>{
        let choiceID = indChoice.getAttribute("id");                             //choice id or user choice
        console.log(`User choice was ${choiceID} .`);       
        playgame(choiceID);                                                          
    })
});
