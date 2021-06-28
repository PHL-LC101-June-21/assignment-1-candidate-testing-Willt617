const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let correctAnswer = [ `sally ride`,
                      `true`,
                      `40`,
                      `trajectory`,
                      `3` ];
const question = [ `Who was the first American woman in space? `,
                     `True or false: 5 kilometer == 5000 meters? `,
                     `(5 + 3)/2 * 10 = ? `,
                     `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `,
                     `What is the minimum crew size for the ISS? ` ];
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers = [];


function askForName() 
{
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Please Enter Your Name: ");
 console.log();
 console.log("Hello " + candidateName + "! Please answer the following questions...");
 console.log();

}

function askQuestion() 
{
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
	for( let i = 0; i < question.length; i++)
	{
		console.log();
		candidateAnswers.push(input.question(question[i]));
		console.log();
	}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = 0;
  for(let i = 0; i < candidateAnswers.length; i++)
	{
		if(candidateAnswers[i].toLowerCase() == correctAnswer[i])
		{
			console.log(`Your answer for question ${i+1} was "${candidateAnswers[i]}"`);
			console.log("That was Correct");
			console.log();
			grade = grade + 1;
		}
			else
			{
				console.log(`Your answer for question ${i+1} was "${candidateAnswers[i]}"`);
				console.log("That was Incorrect");
				console.log(`The correct answer is ${correctAnswer[i]}`)
				console.log();
			}
	}
	if(grade >= 4)
	{
		grade = (grade/5)*100
		console.log();
		console.log(`Your grade is ${grade}%`);
		console.log("YOU PASSED!!!");
	}
		else
		{
			grade = (grade/5)*100
			console.log();
			console.log(`Your grade is ${grade}%`);
			console.log("YOU FAILED...");
		}
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};