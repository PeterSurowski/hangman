window.onload = function() {
  document.getElementById('login').style.display = 'none';
};

window.onkeyup = function() {
	document.getElementById('instructions').style.display = 'none';
	document.getElementById('login').style.display = 'block';

function setup() {
        /* start config options */
    var machineChoices = ['covfefe', 'spraytan', 'mailorderbrides', 'hairclub', 'ilovemoscow'];
	var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
	var letterInMachineGuess = [machineGuess[0], machineGuess[1], machineGuess[2], machineGuess[3], machineGuess[4], machineGuess[5], machineGuess[6], machineGuess[7], machineGuess[8], machineGuess[9], machineGuess[10], machineGuess[11], machineGuess[12], machineGuess[13], machineGuess[14]];
	var availableLetters = ["abcdefghijklmnopqrstuvwxyz"];
	var wrongAnswer = -1;
	var messages = {win: 'You got it!', lose: 'The FBI is coming for you!', guessed: 'You already guessed '};
	var lettersGuessed, lettersMatched;
	lettersGuessed = lettersMatched = '';
	var numLettersMatched = 0;
	console.log(machineGuess);
	var output = document.getElementById("output");
	output.innerHTML = '';
	var humanGuess = event.key;
};
/* end config options */

/* set up display of letters in current word */
    availableLetters = document.getElementById("letters");
    availableLetters.innerHTML = '<li class="current-word">Current word:</li>';

    var letter, i;
    for (i = 0; i < machineGuess.length; i++) {
        letter = '<li class="letter letter' + machineGuess.charAt(i).toUpperCase() + '">' + machineGuess.charAt(i).toUpperCase() + '</li>';
        availableLetters.insertAdjacentHTML('beforeend', letter);
    }

//Copied from: https://jsfiddle.net/phollott/x29ym2ag/
/* Checks whether humanGuess has a value. If true, continue. If false, return an error. */
	if (humanGuess) {
/* Checks whether humanGuess is a valid letter. If true, carry on. If not, return an error.*/
        if (availableLetters.indexOf(humanGuess) > -1) {  
/* Checks whether humanGuess has been missed or matched already.*/
  			if ((lettersMatched && lettersMatched.indexOf(humanGuess) > -1) || (lettersGuessed && lettersGuessed.indexOf(humanGuess) > -1)) {
            	output.innerHTML = messages.guessed + '"' + humanGuess.toUpperCase() + '"';
			} else if (machineGuess.indexOf(humanGuess) > -1) {
    			var lettersToShow = document.querySelectorAll(".letter" + humanGuess.toUpperCase());
                for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                }
/* check to see if letter appears multiple times */
                for (var j = 0; j < machineGuess.length; j++) {
                    if (machineGuess.charAt(j) === humanGuess) {
                            numLettersMatched += 1;
                    }
                }
				lettersMatched += humanGuess;
                if (numLettersMatched === machineGuess.length) {
                    gameOver(true);
                }
            } else {
/* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user */
                lettersGuessed += humanGuess;
                wrongAnswer--;
                wrongAnswer.innerHTML = 'You have ' + wrongAnswer + ' lives remaining';
                if (wrongAnswer === 0) gameOver();
            }
        } else {
/* not a valid letter, error */
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
    } else {
/* no letter entered, error */
        output.classList.add('error');
        output.innerHTML = messages.validLetter;
    }
    return false;
}


  








/* My code commented out to test borrowed code.
  if (humanGuess == machineGuess[0] || humanGuess == machineGuess[1] || humanGuess == machineGuess[2] || humanGuess == machineGuess[3] || humanGuess == machineGuess[4] || humanGuess == machineGuess[5] || humanGuess == machineGuess[6] || humanGuess == machineGuess[7] || humanGuess == machineGuess[8] || humanGuess == machineGuess[9] || humanGuess == machineGuess[10] || humanGuess == machineGuess[11] || humanGuess == machineGuess[12] || humanGuess == machineGuess[13] || humanGuess == machineGuess[14]) {
  	var appearInInput = document.getElementById('input');
  	document.onkeyup = function(event) {
  		appearInInput.textContent = event.key;
  	}
  } else {
  		wrongAnswer = wrongAnswer + 1;
  		var html = wrongAnswer;
  		document.querySelector("#wrong-guesses").innerHTML = html;
  	}
} 
 */

	



