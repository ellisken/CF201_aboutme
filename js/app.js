//Check JavaScript is working
console.log('JS is working');

//Prompt visitor for name
var username = prompt('Hello visitor, what\'s your name?');
console.log('visitor name entered: ' + username);

//Add user welcome message to page
document.getElementById('welcome').innerHTML += 'Welcome to my page, ' + username + '!';

//Global question strings
var q1, q2, q3, q4, q5;

//Define question prompt action
function prompt_action(question, answer){
  var response = prompt(question);
  //Process response
  if(response.toLowerCase() === answer){
    alert('Correct!');
  }
  else{
    alert('Wrong!');
  }
  return;
}

//Define button action
function start_questions(){
    //loop 5 times through questions
    //
}

//Add button action
var start_game = document.getElementById('start_game');
