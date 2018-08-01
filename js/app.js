'use strict';

//Check JavaScript is working
console.log('JS is working');

//Define question prompt action
function prompt_question(question, answer){
  var response = prompt(question);
  //Process response
  if(response.toLowerCase()[0] === answer[0]){
    alert('Correct!');
  }
  else{
    alert('Wrong!');
  }
  return response;
}

//Global question strings
var q1, q2, q3, q4, q5;
q1 = 'Can I jump higher than a house?';
q2 = 'Can I speak Korean?';
q3 = 'Do I have a dog?';
q4 = 'Did I study Math in college?';
q5 = 'Do I prefer back end work?';

//Question and answer arrays
var questions = [q1, q2, q3, q4, q5];
var answers = ['yes', 'no', 'no', 'yes', 'yes'];


/************************************************************
 *                     Interaction Start
 * ******************************************************* */

//Prompt visitor for name
var username = prompt('Hello visitor, what\'s your name?');
console.log('visitor name entered: ' + username);

//Add user welcome message to page
document.getElementById('welcome').innerHTML += 'Welcome to my page, ' + username + '!';
console.log('Welcome message displayed.');

//Add button action
var start_button = document.getElementById('start_game');
start_button.onclick = function start_questions(){
  var i;
  for(i = 0; i < 5; i++){
    console.log('Question #' + (i+1) + ': ' + questions[i]);
    var response = prompt_question(questions[i], answers[i]);
    console.log('User answer: ' + response);
  }
  return;
};



