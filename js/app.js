//Check Javascript is working
'use strict';

//Check JavaScript is working
console.log('JS is working');

/************************************************************
 *              Container/String Definitions
 * ******************************************************* */

//Global question/answer strings
var q1, q2, q3, q4, q5, q6, q7;
q1 = 'Can I jump higher than a house?';
q2 = 'Is Python my favorite computer language?';
q3 = 'Do I have a dog?';
q4 = 'Did I study Math in college?';
q5 = 'Do I prefer back end work?';
q6 = 'Guess my favorite number: ';
q7 = 'Can you guess a European country I have visited?';



var a1, a2, a3, a4, a5, a6, a7;
a1 = 'yes, because houses can\'t jump!';
a2 = 'no, but it\'s fast becoming my favorite. I\'m more familiar with C.';
a3 = 'no, but I have a Maine Coon cat named Phillip';
a4 = 'yes, but it was not during my first degree! I love math!';
a5 = 'yes! I am a terrible designer!';
a6 = 7;
a7 = ['norway', 'germany', 'france', 'italy', 'england'];

//Question and answer arrays
var questions = [q1, q2, q3, q4, q5];
var answers = [a1, a2, a3, a4, a5];

//Variable definitions
var correctCt=0; //Tracks number of questions the user gets correct
var questionCt = 7; //Number of total questions asked
var guessCt = 4; //Number of guesses allowed for question 6


//For each question and answer pair
//If response is valid, display congrats and the answer
//Else if response is incorrect, notify user
//Else reprompt until a valid answer is given

function askquestions1to5 (questions, answers){
  for (var i = 0; i < questions.length; i++){
    do{
      //Get user response
      console.log('Question #' + (i+1) + ': ' + questions[i]);
      var response = prompt(questions[i]).toLowerCase()[0];
      console.log('User answer: ' + response);
      if(response === answers[i][0]){
        alert(answers[i]);
        //increment correct_ct
        correctCt++;
      }
      else if(response !== answers[i][0] && (response === 'y' || response === 'n')){
        alert('Wrong!');
      }
    }while(response !== 'y' && response !== 'n');
  }
}


//Ask sixth question, reprompting exactly four times,
//indicating whether the user's guess was too high or too low
function askNumberGuess(guessCt, question, answer) {
  while(guessCt > 0){
    //Get user response
    console.log('Question #6: ' + question);
    var response = Number(prompt(question));
    console.log('User answer: ' + response);
    if(response === answer){
      alert('Correct!');
      //increment correct_ct
      correctCt++;
      guessCt = 0;
    }
    else{
      guessCt--;
      if(response < answer){
        alert('Too low! You have ' + guessCt + ' more guesses.');
      }
      else{
        alert('Too high! You have ' + guessCt + ' more guesses.');
      }
    }
  }
}

//Ask seventh question, reprompting exactly six times,
//Indicating places I have visited

function placesVisited(numberOfGuesses, question, answers){
  var correct = false;
  while(numberOfGuesses > 0 && correct === false){
    //Get user response
    console.log('Question #7: ' + question);
    var response = prompt(question).toLowerCase();
    console.log('User answer: ' + response);
    //Check if response is in answer array
    for(var j=0; j < answers.length; j++){
      if(response === a7[j]){
        alert('Correct!');
        //increment score
        correctCt++;
        correct = true;
      }
    }

    //If answer was not correct, alert user and decrement
    //remaining guess count
    if(correct === false){
      numberOfGuesses--;
      alert('Wrong! You have ' + numberOfGuesses + ' more guesses.');
    }
  }

  //Display all possible answers to question 7
  answers = answers.join(', ');
  alert('All possible answers: ' + answers);
}

/************************************************************
 *                     Interaction Start
 * ******************************************************* */

//Prompt visitor for name
var username = prompt('Hello visitor, what\'s your name?');
console.log('visitor name entered: ' + username);

//Add user welcome message to page
alert('Welcome, ' + username + '!');
console.log('Welcome message displayed.');

//Function calls
askquestions1to5 (questions, answers);
askNumberGuess (guessCt, q6, a6);
guessCt = 6; // can guess up to 6 times
placesVisited (guessCt, q7, a7);

//Tally and present user quiz score
if(correctCt === questionCt){
  alert('You got all the questions correct! Good job, ' + username + '!');
}
else{
  alert('You got ' + correctCt + ' out of ' + questionCt + ' correct. Better luck next time.');
}

