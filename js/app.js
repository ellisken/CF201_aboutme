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



/************************************************************
 *                     Interaction Start
 * ******************************************************* */

//Prompt visitor for name
var username = prompt('Hello visitor, what\'s your name?');
console.log('visitor name entered: ' + username);

//Add user welcome message to page
alert('Welcome, ' + username + '!');
console.log('Welcome message displayed.');

//Variable definitions
var response; //Stores response
var correct_ct; //Tracks number of questions the user gets correct
var question_ct = 7; //Number of total questions asked
var guess_ct = 4; //Number of guesses allowed for question 6
var correct = false; //Used for question 7 loop control
var i, j; //for indexing


//For each question and answer pair
  //If response is valid, display congrats and the answer
  //Else if response is incorrect, notify user
  //Else reprompt until a valid answer is given
correct_ct = 0;
for(i = 0; i < 5; i++){
  do{
    //Get user response
    console.log('Question #' + (i+1) + ': ' + questions[i]);
    response = prompt(questions[i]).toLowerCase()[0];
    console.log('User answer: ' + response);
    if(response === answers[i][0]){
      alert(answers[i]);
      //increment correct_ct
      correct_ct++;
    }
    else if(response !== answers[i][0] && (response === 'y' || response === 'n')){
      alert('Wrong!');
    }
  }while(response !== 'y' && response !== 'n');
}

//Ask sixth question, reprompting exactly four times,
//indicating whether the user's guess was too high or too low
while(guess_ct > 0){
  //Get user response
  console.log('Question #6: ' + q6);
  response = Number(prompt(q6));
  console.log('User answer: ' + response);
  if(response === a6){
    alert('Correct!');
    //increment correct_ct
    correct_ct++;
    guess_ct = 0;
  }
  else{
    guess_ct--;
    if(response < a6){
      alert('Too low! You have ' + guess_ct + ' more guesses.');
    }
    else{
      alert('Too high! You have ' + guess_ct + ' more guesses.');
    }
  }
}

//Ask seventh question, reprompting exactly six times,
//indicating whether the user's guess was too high or too low
guess_ct = 6;
while(guess_ct > 0 && correct === false){
  //Get user response
  console.log('Question #7: ' + q7);
  response = prompt(q7).toLowerCase();
  console.log('User answer: ' + response);
  //Check if response is in answer array
  for(j=0; j < a7.length; j++){
    if(response === a7[j]){
      alert('Correct!');
      //increment correct_ct
      correct_ct++;
      correct = true;
    }
  }
  //If answer was not correct, alert user and decrement 
  //remaining guess count
  if(correct === false){
    guess_ct--;
    alert('Wrong! You have ' + guess_ct + ' more guesses.');
  }
}


//Tally and present user quiz score
if(correct_ct === question_ct){
  alert('You got all the questions correct! Good job, ' + username + '!');
}
else{
  alert('You got ' + correct_ct + ' out of ' + question_ct + ' correct. Better luck next time.');
}

