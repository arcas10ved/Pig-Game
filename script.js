'use strict';

var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  //1.Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2.Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png'; //add's src dice photo according to random dice value
  //3.Update the round score If the rolled number was NOT a 1

  if (dice !== 1) {
    //Add score   
    roundScore += dice; //current score keeps adding up until it hits 1 to the ·current of the current player
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }

  document.querySelector(".btn--hold").addEventListener("click", function () {
    //Add CURRENT score to the GLOBAL score
    scores[activePlayer] += roundScore;

    //Update the UI 
    document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer];

    //Check if player won the game

    if (scores[activePlayer] >= 20) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";

      document.querySelector(".player--" + activePlayer).classList.add("player--winner")
      document.querySelector(".player--" + activePlayer).classList.remove("player--active")

    } else {
      //Next player
      nextPlayer();

    }



  })
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //if activePlayer ===0 then(?) activePlayer===1 else(:) active player ===0;
  roundScore = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  document.querySelector(".player--0").classList.toggle("player--active"); //add a class if it's not there or remove it if it's there 
  document.querySelector(".player--1").classList.toggle("player--active");//toggles the background of the who is current player 
  // document.querySelector(".player--0").classList.remove("player--active");
  // document.querySelector(".player--1").classList.add("player--active");

  document.querySelector(".dice").style.display = "none";
}




// document.querySelector('#current--' + activePlayer).innerHTML = dice;
