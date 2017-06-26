window.onload = function() {
  document.getElementById('login').style.display = 'none';
};

var machineChoices = ['covfefe', 'spraytan', 'mailorderbrides', 'hairclub', 'ilovemoscow'];
var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
var letterInMachineGuess = [machineGuess[0], machineGuess[1], machineGuess[2], machineGuess[3], machineGuess[4], machineGuess[5], machineGuess[6], machineGuess[7], machineGuess[8], machineGuess[9], machineGuess[10], machineGuess[11], machineGuess[12], machineGuess[13], machineGuess[14]];
var wrongAnswer = -1;


window.onkeyup = function() {
  document.getElementById('instructions').style.display = 'none';
  document.getElementById('login').style.display = 'block';
  var humanGuess = event.key;
  console.log(machineGuess);
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
  
  /* THIS SUCCESSFULLY SHOWED WHATEVER LETTER A USER GUESSED INTO THE INPUT AREA.
  var input = document.getElementById('input');
  document.onkeyup = function() {
  	input.textContent = event.key;
  }*/

//FOR LOOP COPY IN CASE I NEED IT
//for (var i = 0; i < 6; i++) {
	//document.onkeyup = event.key;}
	

	



