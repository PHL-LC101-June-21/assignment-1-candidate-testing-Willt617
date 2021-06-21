const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let correctAnswer = [ `Sally Ride`,
                      `true`,
                      `40`,
                      `Trajectory`,
                      `3` ];
const question = [ `Who was the first American woman in space? `,
                     `True or false: 5 kilometer == 5000 meters? `,
                     `(5 + 3)/2 * 10 = ? `,
                     `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `,
                     `What is the minimum crew size for the ISS? ` ];
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;


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
  candidateAnswer = input.question(question[i]);
  console.log();
  if(candidateAnswer == correctAnswer[i])
    console.log(`Your answer was ${candidateAnswer}, That is Correct`);
    else
    console.log(`Your answer was ${candidateAnswer}, That is Incorrect`);
}

correctAnswer = "Sally Ride";


console.log();

if(candidateAnswer == correctAnswer)
  console.log("That is correct!");
  else
  console.log("That is incorrect...")
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade;
  

  return grade;
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