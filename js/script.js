  // Author     : Biswajit Sarkar || 991589760
 //Description: java script for a trivia question card


//Initialise questions1 with 4 options with the option a correct answer
var questions = [];
questions[0] = {
	question : " What song is Canada's national anthem?",
	a : "A) O Canada",
	b : "B) Amazing Grace",
	c : "C) God Save the Queen",
	d : "D) Star Spangled Banner",
	correct : "a",
	answer : null
};
//Initialise questions2 with 4 options with option b correct answer
questions[1] = {
	question : "What is the capital city of Canada?",
	a : "A) Toronto",
	b : "B) Ottawa",
	c : "C) Montreal",
	d : "D) Vancouver",
	correct : "b",
	answer : null
};
//Initialise questions3 with 4 options with the option a correct answer
questions[2] = {
	question : "The Canadian flag first appearance on which date?",
	a : "A) Feb 15, 1965",
	b : "B) Feb 15, 1865",
	c : "C) Sep 15, 1965",
	d : "D) Sep 15, 1865",
	correct : "a",
	answer : null
};
//Initialise questions4 with 4 options with the option b correct answer
questions[3] = {
	question : "In Canada what percentage of populations are European?",
	a : "A) 78.2",
	b : "B) 74.3",
	c : "C) 84.6",
	d : "D) 68.4",
	correct : "b",
	answer : null
};
//Initialise questions5 with 4 options with the option d correct answer
questions[4] = {
	question : "What is the percentage of Christianity in Canada?",
	a : "A) 75.2",
	b : "B) 64.3",
	c : "C) 84.7",
	d : "D) 67.2",
	correct : "d",
	answer : null
};
//Initialise questions6 with 4 options with the option c correct answer
questions[5] = {
	question : "Which province granted first voting rights to women?",
	a : "A) Ontario",
	b : "B) Quebec",
	c : "C) Manitoba",
	d : "D) Nova Scotia",
	correct : "c",
	answer : null
};
//Initialise questions7 with 4 options with the option a correct answer
questions[6] = {
	question : "On which year Canadian law declare women as “Persons”?",
	a : "A) 1929",
	b : "B) 1957",
	c : "C) 1892",
	d : "D) 1938",
	correct : "a",
	answer : null
};
//Initialise questions8 with 4 options with the option a correct answer
questions[7] = {
	question : "Till now Canada hosted how many Olympics?",
	a : "A) 4 times",
	b : "B) 2 times",
	c : "C) 7 times",
	d : "D) 1 time",
	correct : "a",
	answer : null
};
//Initialise questions9 with 4 options with the option d correct answer
questions[8] = {
	question : "What is the total height of Niagara Fall?",
	a : "A) 172ft",
	b : "B) 195ft",
	c : "C) 185ft",
	d : "D) 167ft",
	correct : "d",
	answer : null
};
//Initialise questions10 with 4 options with the option c correct answer
questions[9] = {
	question : "In which year Canada’s first railway line was opened?",
	a : "A) 1828",
	b : "B) 1855",
	c : "C) 1836",
	d : "D) 1902",
	correct : "c",
	answer : null
};

// Initialise the current question
var currentQuestion = null;

// Initialise everything
let initialise = ()=>{
	
	// Reset the answers
	questions.forEach((question, index, array)=>{
		question.answer = null;
	});
	
	// Add event listeners to the question navigation
	document.querySelectorAll(".navigation").forEach((navigation, index, array)=>{
		navigation.classList.remove("right");
		navigation.classList.remove("wrong");
		navigation.addEventListener("click", showQuestion, false);
	});
	
	// Add click event for Enter Answer button
	document.getElementById("SubmitButton").onclick = submitAnswer;
	
	// Add click event for Next Question button
	document.getElementById("NextButton").onclick = showQuestion;
	
	// Add click event for Help button
	document.getElementById("Help").onclick = showHelp;
	
	// Add click event to Restart button
	document.getElementById("Restart").onclick = initialise;
	
	// Add click event to X of the help popup
	document.getElementById("CloseHelp").onclick = hideHelp;
	
	// Add click event to Close Help button
	document.getElementById("HelpClose").onclick = hideHelp;

	// reset current question if any
	document.querySelectorAll(".navigation.current").forEach((current, index, array)=>{
		current.classList.remove("current");
	});
	
	// reset the current question
	currentQuestion = null;
	
	showQuestion();
};

let showQuestion = (event)=>{
	let previousQuestion = null;
	if(currentQuestion == null){
		currentQuestion = 0;
	}else{
		if(event.currentTarget.id == "NextButton"){
			if(currentQuestion == 9){
				return;
			}
			previousQuestion = currentQuestion;
			currentQuestion = previousQuestion+1;
		}else{
			previousQuestion = currentQuestion;
			currentQuestion = parseInt(event.currentTarget.dataset.question);
		}
	}
	document.querySelectorAll("#Question"+previousQuestion).forEach((question, index, array)=>{
		question.classList.remove("current");
		question.addEventListener("click", showQuestion, false);
	});
	document.querySelectorAll("#Question"+currentQuestion).forEach((question, index, array)=>{
		question.classList.add("current");
		question.removeEventListener("click", showQuestion, false);
	});
	show();
};

let submitAnswer = (event)=>{
	if(questions[currentQuestion].answer != null){
		alert("You have already answered the question");
		return;
	}
	let checked = null;
	document.querySelectorAll(".option input[type=radio]").forEach((option, index, array)=>{
		if(option.checked){
			checked = option.value;
		}
	});
	if (checked == null){
		alert("You have to select an answer before you submit answer");
		return;
	}
	questions[currentQuestion].answer = checked;
	if(questions[currentQuestion].answer == questions[currentQuestion].correct){
		document.getElementById("Question"+currentQuestion).classList.add("right");
	}else{
		document.getElementById("Question"+currentQuestion).classList.add("wrong");
	}
	show();
};

let show = ()=>{
	document.querySelectorAll(".option.right").forEach((option,index,array)=>{
		option.classList.remove("right");
	});
	document.querySelectorAll(".option.wrong").forEach((option,index,array)=>{
		option.classList.remove("wrong");
	});
	let question = questions[currentQuestion];
	document.getElementById("QuestionNo").innerHTML = (currentQuestion + 1) + ".";
	document.getElementById("Question").innerHTML = question.question;
	document.getElementById("LabelA").innerHTML = question.a;
	document.getElementById("LabelB").innerHTML = question.b;
	document.getElementById("LabelC").innerHTML = question.c;
	document.getElementById("LabelD").innerHTML = question.d;
	if(question.answer != null){
		document.getElementById("SubmitButton").onclick = undefined;		
		document.getElementById(question.correct.toUpperCase()).parentNode.classList.add("right");
		document.getElementById(question.answer.toUpperCase()).checked = true;
		if(question.answer != question.correct){
			document.getElementById(question.answer.toUpperCase()).parentNode.classList.add("wrong");
		}
	}else{
		document.getElementById("SubmitButton").onclick = submitAnswer;		
		document.querySelectorAll(".option input[type=radio]").forEach((option, index, array)=>{
			option.checked = false;
		});
	}
}

// help button pop up page fuctionality validation
let showHelp = ()=>{
	document.getElementById("HelpPopup").classList.remove("hidden");
};

let hideHelp = ()=>{
	document.getElementById("HelpPopup").classList.add("hidden");
};

document.onload = initialise();