console.log("Script loaded");

// Create an array to store the images for the rotator
var rotator_images = new Array();
rotator_images[0] = "Assets/Images/600px-813Scorbunny.png";
rotator_images[1] = "Assets/Images/600px-814Raboot.png";
rotator_images[2] = "Assets/Images/600px-815Cinderace.png";

var rotator_text = new Array();
rotator_text[0] = "Scorbunny";
rotator_text[1] = "Raboot";
rotator_text[2] = "Cinderance";

var Height = new Array();
Height[0] = "0.3m";
Height[1] = "0.6m";
Height[2] = "1.4m";

var Weight = new Array();
Weight[0] = "4.5kgs";
Weight[1] = "9kg";
Weight[2] = "33kg";

// create a counter variable to remember the current image
var counter = 0;

// Declare the functions for previous and next
function prev_image() {
	if(counter == 2)
	{
		counter = 1;
		document.getElementById("rotator_image").src = rotator_images[counter];
		document.getElementById("demo").innerHTML = rotator_text[counter];
		document.getElementById("Height").innerHTML = Height[counter];
		document.getElementById("Weight").innerHTML = Weight[counter];
		document.getElementById("next").style.display = "block";
	}
	else{
		counter = 0;
		document.getElementById("rotator_image").src = rotator_images[counter];
		document.getElementById("demo").innerHTML = rotator_text[counter];
		document.getElementById("Height").innerHTML = Height[counter];
		document.getElementById("Weight").innerHTML = Weight[counter];
		document.getElementById("prev").style.display = "none";
		document.getElementById("next").style.display = "block";
	}
}

function next_image() {
	if(counter == 0)
	{
		counter =  1;
		document.getElementById("rotator_image").src = rotator_images[counter];
		document.getElementById("demo").innerHTML = rotator_text[counter];
		document.getElementById("Height").innerHTML = Height[counter];
		document.getElementById("Weight").innerHTML = Weight[counter];
		document.getElementById("prev").style.display = "block";
	}
	else{
		counter = 2;
		document.getElementById("rotator_image").src = rotator_images[counter];
		document.getElementById("demo").innerHTML = rotator_text[counter];
		document.getElementById("Height").innerHTML = Height[counter];
		document.getElementById("Weight").innerHTML = Weight[counter];
		document.getElementById("next").style.display = "none";
		document.getElementById("mini").src = "none";
	}
}
// Set the click events for the buttons
document.getElementById("prev").onclick = function() { prev_image()};
document.getElementById("next").onclick = function() { next_image()};

var questions = [];
var answers = [];

questions[0] = "What type is Scorbunny?";
answers[0] = "Fire";

questions[1] = "How tall is Rabbot?";
answers[1] = "0.6m";

questions[2] = "How heavy is Cinderance?";
answers[2] = "33kg";

var currentQuestion;

function setQuestion(questionNumber) {
	currentQuestion = questionNumber;
	document.getElementById("question").innerHTML = questions[questionNumber];
	document.getElementById("answers").style.display = "block";
}

function checkAnswer(){
	var tmpAnswer = document.getElementById("answer").value;
	alert("Is "+tmpAnswer+" your final answer?!");
	if (tmpAnswer == answers[currentQuestion]){
		document.getElementById("correct").innerHTML = 'Correct, well done!!!';
	} else {
		document.getElementById("correct").innerHTML = 'Wrong!';
	}
}

function validate(){
	if(document.regForm.fullname.value == ""){
		document.getElementById("fullname").innerHTML = ('This field is required!');
		return false;
		}

	else if(document.regForm.country.value == ""){
		document.getElementById("country").innerHTML = ('This field is required!');
		return false;
		}

	else if(document.regForm.email.value == ""){
		document.getElementById("email").innerHTML = ('This field is required!');
		return false;
		}

	else if(document.regForm.tel.value == ""){
		document.getElementById("tel").innerHTML = ('This field is required!');
		return false;
		}

		else if(document.regForm.rate.value == ""){
			document.getElementById("rate").innerHTML = ('This field is required!');
			return false;
			}

	return true;

}
