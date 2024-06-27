const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [];
questions.push(question, "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? ");
let correctAnswers = [];
correctAnswers.push(correctAnswer, "true", "40", "Trajectory", "3");
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  let numQuestion = 0;

  while (numQuestion < 5) {
    console.log(questions[numQuestion]);
    candidateAnswer = input.question("Answer: ");
    candidateAnswers[numQuestion] = candidateAnswer;
    numQuestion++;
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let i = 0;
  let result = '';
  let correct = 0;

  console.log("\n--------------------------------------------------------------------------------\n" + "RESULTS\n" + "--------------------------------------------------------------------------------\n");

  while (i < 5) {
    if (candidateAnswers[i].trim().toLowerCase() === correctAnswers[i].trim().toLowerCase()) {
      result = 'Correct!';
      correct++;
    } else {
      result = 'Incorrect!';
    }
    console.log(`${questions[i]}
${result}
${candidateName}'s answer: ${candidateAnswers[i]}
Correct answer: ${correctAnswers[i]}
`);
    i++;
  }

  let grade = (correct / 5) * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  return grade;
}

function passFail(grade) {
  console.log(`${candidateName} recieved a score of ${grade}%.`);
  if (grade >= 80) {
    console.log(`Congratulations! ${candidateName} passed the quiz! :)`);
  } else {
    console.log(`Sorry! ${candidateName} failed the quiz! :(`);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}!`);
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);
  passFail(grade);
}

// ----------- Don't write any code or change any code below this line ---------- //
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