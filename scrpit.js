let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let cissor = document.querySelector(".cissor");
let winer = document.querySelector(".winer");
let US = document.querySelector(".userScore"); // US => userScore
let CS = document.querySelector(".comScore");  // CS => computerScore
let userImg = document.querySelector(".userImg");
let comImg = document.querySelector(".compImg");

rock.addEventListener("click",()=>{calcus(1)});
paper.addEventListener("click",()=>{calcus(2)});
cissor.addEventListener("click",()=>{calcus(3)});

let userScore = 0;
let comScore = 0;


function calcus(U) {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  let C = Math.floor(Math.random() * (max - min + 1)) + min;

  if (U === C) {
    if(U === 1){
      userImg.setAttribute("src","/img/rock.png");
      comImg.setAttribute("src","/img/rock.png");
    }else if(U === 2){
      userImg.setAttribute("src","/img/paper.png");
      comImg.setAttribute("src","/img/paper.png");
    }else{
      userImg.setAttribute("src","/img/cissor.png");
      comImg.setAttribute("src","/img/cissor.png");
    }
    return ScoreResult("tie");
  } else if (U === 1 && C === 2) {
    userImg.setAttribute("src","/img/rock.png");
    comImg.setAttribute("src","/img/paper.png");
    return ScoreResult("computer");
  } else if (U === 1 && C === 3) {
    userImg.setAttribute("src","/img/rock.png");
    comImg.setAttribute("src","/img/cissor.png");
    return ScoreResult("user");
  } else if (U === 2 && C === 1) {
    userImg.setAttribute("src","/img/paper.png");
    comImg.setAttribute("src","/img/rock.png");
    return ScoreResult("user");
  } else if (U === 2 && C === 3) {
    userImg.setAttribute("src","/img/paper.png");
    comImg.setAttribute("src","/img/cissor.png");
    return ScoreResult("computer");
  } else if (U === 3 && C === 1) {
    userImg.setAttribute("src","/img/cissor.png");
    comImg.setAttribute("src","/img/rock.png");
    return ScoreResult("computer");
  } else if (U === 3 && C === 2) {
    userImg.setAttribute("src","/img/cissor.png");
    comImg.setAttribute("src","/img/paper.png");
    return ScoreResult("user");
  }
}


function ScoreResult(whoWin){
  if(whoWin === "tie"){
    winer.textContent = "Game Tie!";
  }else if(whoWin === "computer"){
    winer.textContent = "Computer Win!"
    comScore++;
    CS.textContent = comScore;
  }else{
    winer.textContent = "User Win!"
    userScore++;
    US.textContent = userScore;
  }
}