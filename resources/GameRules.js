const scoreChecks = [
    setUnitary,
    setThreeOfAKind,
    setFourOfAKind,
    setFullHouse,
    setShortStraight,
    setLargeStraight,
    setChance,
    setYahtzee
];

var sumTop = 0;
var sumBottom = 0;

function setScore() {
    for (var i = 0; i < scoreChecks.length; i++) {
        scoreChecks[i]();
    }
}

function setUnitary() {

    // Check all sides of the dice for a sequence of numbers
    for (var i = 1; i < 6 + 1; i++) {
        var matchCounter = 0;

        // Check the dice for a value 
        for(var j = 0; j < dice.length; j++) {
            if (dice[j].value + 1 == i) matchCounter++;
        }
        
        // Display the available score
        if (!scores[i - 1].flag) {
            scores[i - 1].elementReference.innerHTML = "";
            if (matchCounter != 0) setScoreElement(i - 1, matchCounter * i);
        }
    }
}

function setThreeOfAKind() {
    if (!scores[6].flag) {

        var sortedValues = [];
        var threeOfAKind = false;
        var threeOfAKindCounter = 1;

        // Extract and sort the die values
        for (var i = 0; i < dice.length; i++) {
            sortedValues.push(dice[i].value);
        }
    
        sortedValues.sort();

        for (var i = 0; i < dice.length - 1; i++) {
            // Increment counter and reset if a three of a kind is broken
            threeOfAKindCounter++;
            if (sortedValues[i] != sortedValues[i + 1]) threeOfAKindCounter = 1;

            // If the three of a kind exists, flag true and exit the loop
            if (threeOfAKindCounter >= 3) {
                threeOfAKind = true;
                break;
            }
        }

        // Set score if there are 3 matching dice
        scores[6].elementReference.innerHTML = "";
        if (threeOfAKind) {
            var threeOfAKindScore = 0;

            // Sum up the score on all the dice
            for (var i = 0; i < dice.length; i++) {
                threeOfAKindScore += dice[i].value + 1;
            }

            setScoreElement(6, threeOfAKindScore);
        }  
    }
}

function setFourOfAKind() {
    if (!scores[7].flag) {
        var sortedValues = [];
        var fourOfAKind = false;
        var fourOfAKindCounter = 1;

        // Extract values from the dice and sort them
        for (var i = 0; i < dice.length; i++) {
            sortedValues.push(dice[i].value);
        }
    
        sortedValues.sort();

        for (var i = 0; i < dice.length - 1; i++)
        {
            // Increment the four of a kind counter and reset if the four of a kind is broken
            fourOfAKindCounter++;
            if (sortedValues[i] != sortedValues[i + 1]) fourOfAKindCounter = 1;

            // If a 4 of a kind is detected, flag true and exit the loop
            if (fourOfAKindCounter >= 4) {
                fourOfAKind = true;
                break;
            }
        }

        // Set score if there are 4 matching dice
        scores[7].elementReference.innerHTML = "";
        if (fourOfAKind) {
            var fourOfAKindScore = 0;

            // Sum up the score on all the dice
            for (var i = 0; i < dice.length; i++) {
                fourOfAKindScore += dice[i].value + 1;
            }

            setScoreElement(7, fourOfAKindScore);
        }      
    }
}

function setFullHouse() {
    if (!scores[8].flag) {
        var sortedValues = [];
        var fullHouse = false;
        
        for (var i = 0; i < dice.length; i++) {
            sortedValues.push(dice[i].value);
        }

        sortedValues.sort();

        // Check for the full house pattern
        if (sortedValues[0] == sortedValues[1] && sortedValues[0] == sortedValues[2] && sortedValues[3] == sortedValues[4] && sortedValues[2] != sortedValues[3]) fullHouse = true;
        if (sortedValues[2] == sortedValues[3] && sortedValues[2] == sortedValues[4] && sortedValues[0] == sortedValues[1] && sortedValues[1] != sortedValues[2]) fullHouse = true;
        
        // Set score to 25 if a full house is detected
        scores[8].elementReference.innerHTML = "";
        if (fullHouse) setScoreElement(8, 25);
    }
}

function setShortStraight() {
    if (!scores[9].flag) {

        var sortedValues = [];
        var shortStraight = false;
        var straightCounter = 0;
        
        for (var i = 0; i < dice.length; i++) {
            sortedValues.push(dice[i].value);
        }
        
        sortedValues.sort();
        
        // Remove duplicates
        for (var i = 0; i < sortedValues.length - 1; i++) {
            if (sortedValues[i] == sortedValues[i + 1]) {
                sortedValues[i] = -2;
            }
        }

        sortedValues.sort();

        // Check for a short straight
        for (var i = 0; i < sortedValues.length; i++) {
            
            // Increment straight counter or reset it if applicable
            if (sortedValues[i] + 1 == sortedValues[i + 1]) straightCounter++;
            else if (sortedValues[i] != sortedValues[i + 1]) straightCounter = 0;
            
            // Check if the short straight actually exists
            if (straightCounter >= 3) {
                 shortStraight = true;
                 break;
            }
        }

        // Set score if a short straight occurs
        scores[9].elementReference.innerHTML = "";
        if (shortStraight) setScoreElement(9, 30);
    }
}

function setLargeStraight() {
    if (!scores[10].flag) {

        // Get the values from the dice values and sort them
        var sortedValues = [];
        var largeStraight = true;
        for (var i = 0; i < dice.length; i++) {
            sortedValues.push(dice[i].value);
        }

        sortedValues.sort();

        // Check for a large straight
        for (var i = 0; i < sortedValues.length - 1; i++) {
            if (sortedValues[i] + 1 != sortedValues[i + 1]) {
                largeStraight = false;
                break;
            }
        }

        // Set score if a large straight occurs
        scores[10].elementReference.innerHTML = "";
        if (largeStraight) setScoreElement(10, 40);
    }
}

function setChance() {
    if (!scores[11].flag) {

        // Sum up the score on all the dice
        var chanceScore = 0;
        for (var i = 0; i < dice.length; i++) {
            chanceScore += dice[i].value + 1;
        }

        // Set score
        scores[11].elementReference.innerHTML = "";
        setScoreElement(11, chanceScore);
    }
}

function setYahtzee() {
    if (!scores[12].flag) {
        
        var diceMatch = true;
        for (var i = 0; i < dice.length; i++) {
            if (dice[i].value != dice[0].value) {
                diceMatch = false;
                break;
            }
        }

        // Set score if dice match
        scores[12].elementReference.innerHTML = "";
        if (diceMatch) setScoreElement(12, 50);
    }
}


function updateTotals() {

    sumTop = 0;
    sumBottom = 0;

    // TOP ------------------------------------------------------------------------------------
    
    for (var i = 0; i < dice.length + 1; i++) {
        if (scores[i].flag) sumTop += scores[i].value;
    }

    // Set bonus if it applies
    if (sumTop >= 63) {
        document.getElementById("bonus-score").innerHTML = 35;
        sumTop += 35;
    }

    // Set styling and display the top total
    document.getElementById("top-total-score").innerHTML = "";
    if (sumTop > 0) {
        document.getElementById("top-total-score").innerHTML = String(sumTop);
    }

    // BOTTOM ---------------------------------------------------------------------------------

    for (var i = dice.length + 1; i < scores.length; i++) {
        if (scores[i].flag) sumBottom += scores[i].value;
    }

    // Set styling and display the bottom total
    if (sumBottom > 0) {
        document.getElementById("bottom-total-score").innerHTML = "";
        document.getElementById("bottom-total-score").innerHTML = String(sumBottom);
    }
}

function setScoreElement(index, score) {

    // Display the available score
    scores[index].elementReference.innerHTML = score;
    scores[index].elementReference.style.color = "#cc0000";
}