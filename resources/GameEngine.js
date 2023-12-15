const { json } = require("body-parser");

var rollDiceButton;
var rollCounter;
var dice;
var scores;
var lastSelectedScore;
var redoButton;
var oldRollCounter;
var oldSelectedDice;

function init() {
    rollCounter = 3;

    dice = [
        new GameElement(document.getElementById("die1")),
        new GameElement(document.getElementById("die2")),
        new GameElement(document.getElementById("die3")),
        new GameElement(document.getElementById("die4")),
        new GameElement(document.getElementById("die5"))
    ];

    scores = [ 
        new GameElement(document.getElementById("ones-button")),
        new GameElement(document.getElementById("twos-button")),
        new GameElement(document.getElementById("threes-button")),
        new GameElement(document.getElementById("fours-button")),
        new GameElement(document.getElementById("fives-button")),
        new GameElement(document.getElementById("sixes-button")),
        
        new GameElement(document.getElementById("three-of-a-kind-button")),
        new GameElement(document.getElementById("four-of-a-kind-button")),
        new GameElement(document.getElementById("full-house-button")),
        new GameElement(document.getElementById("short-straight-button")),
        new GameElement(document.getElementById("large-straight-button")),
        new GameElement(document.getElementById("chance-button")),
        new GameElement(document.getElementById("yahtzee-button")),
    ];

         
    for (var i = 0; i < scores.length; i++) {
        scores[i].elementReference.disabled = true;
    }

    for (var i = 0; i < dice.length; i++) {
        dice[i].elementReference.innerHTML.disabled = true;
    }

    oldSelectedDice = [false, false, false, false, false];

    rollDiceButton = document.getElementById("roll-button");
    redoButton = document.getElementById("redo-button");
}

function rollDice() {

    // Check to see if there are any dice to roll
    var diceToRoll = false;
    for (var i = 0; i < dice.length; i++) {
        if (dice[i].flag == false) diceToRoll = true;
    }
    
    if (diceToRoll && rollCounter > 0) {

        // Roll dice
        rollCounter--;
        document.getElementById("roll-count-label").innerHTML = "Rolls left : " + rollCounter;
        for (var i = 0; i < dice.length; i++) {
            setAnimation(dice[i].elementReference);
        }
    }

    redoButton.disabled = true;
    redoButton.style.display = "none";
}

function setAnimation() {

    // Set dice roll animation for all dice that are rollable (not flagged)
    for (var i = 0; i < dice.length; i++) {
        if (!dice[i].flag) dice[i].elementReference.style.animation = "roll 1s steps(6) infinite";
    }

    rollDiceButton.disabled = true;

    setTimeout(finishAnimation, 1000);
}

async function finishAnimation() {

    for (var i = 0; i < scores.length; i++) {
        if (!scores[i].flag) scores[i].elementReference.disabled = false;
    }
    
    for (var i = 0; i < dice.length; i++) {
        dice[i].value = Math.floor(Math.random() * 6) + 1;
        dice[i].elementReference.style.animation = "none";
        dice[i].elementReference.style.backgroundPosition = -100 * (dice[i].value) + '% 0';
    }

    rollDiceButton.disabled = false;

    setScore();
}

function clickDie(dieID) { 
    if (rollCounter != 3) dice[dieID].flag = !dice[dieID].flag;
    oldSelectedDice[dieID] = false;

    // Set background of selected dice
    if (dice[dieID].flag) dice[dieID].elementReference.style.backgroundColor = "#00000040"
    else dice[dieID].elementReference.style.backgroundColor = "#00000000";
}

function clickScore(scoreID) { 
    var value = parseInt(scores[scoreID].elementReference.innerHTML);
    rollCounter.innerHTML;

    redoButton.disabled = false;
    redoButton.style.display = "block";
    lastSelectedScore = scoreID;
    oldRollCounter = rollCounter;

    // Set styling data and flags for the clicked position
    scores[scoreID].flag = true;
    scores[scoreID].elementReference.style.color = "black";
    scores[scoreID].elementReference.style.backgroundColor = "#00000000"
    
    // Disable the scorecard
    for (var i = 0; i < scores.length; i++) {
        if (!scores[i].flag) {
            scores[i].elementReference.innerHTML = "";
            scores[i].elementReference.disabled = true;
        } 
    }

    // Reset rolling and dice selection
    rollCounter = 3;
    for (var i = 0; i < dice.length; i++) {
        dice[i].flag = false;
    }

    // Check if the action is a scratch or a selected score and set the score accordingly
    if (value > 0) scores[scoreID].value = value;
    else {
        scores[scoreID].elementReference.innerHTML = "-";
        scores[scoreID].elementReference.style.backgroundColor = "#00000015";
    }

    for (var i = 0; i < dice.length; i++) {
        dice[i].elementReference.style.backgroundColor = "#00000000";
    }

    updateTotals();

    // Check if the game has been won
    var gameWon = true;
    for (var i = 0; i < scores.length; i++) {
        if(scores[i].flag == false) gameWon = false;
    }

    if (gameWon) {
        alert("Game WON!\nScore : " + (sumTop + sumBottom));
        
        redoButton.disabled = true;
        rollDiceButton.disabled = true;

        for (var i = 0; i < dice.length; i++) {
            dice[i].elementReference.disabled = true;
        }

        for (var i = 0; i < scores.length; i++) {
            scores[i].elementReference.disabled = true;
        }
    }
}

function revertScore() {
    redoButton.disabled = true;
    redoButton.style.display = "none";
    rollCounter = oldRollCounter;

    // Remove selected score
    scores[lastSelectedScore].elementReference.innerHTML = "";
    scores[lastSelectedScore].flag = false;

    // Reselect previously selected dice
    for (var i = 0; i < dice.length; i++) {
        dice[i].flag = oldSelectedDice[i];
    }

    // Enable scores available
    for (var i = 0; i < scores.length; i++) {
        if (!scores[i].flag) {
            scores[i].elementReference.innerHTML = "";
            scores[i].elementReference.disabled = false;
        }
    }

    setScore();
    updateTotals();
}

class GameElement {
    flag;
    value;
    elementReference;

    constructor(elementReference) {
        this.elementReference = elementReference;
        this.flag = false;
        this.value = 0;
    }
}