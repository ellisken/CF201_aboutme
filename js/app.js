//Check JavaScript is working
console.log('JS is working');

//Prompt visitor for name
var username = prompt('Hello visitor, what\'s your name?');
console.log('username: ' + username);

//Add user welcome message to page
document.getElementById('welcome').innerHTML += 'Welcome to my page, ' + username + '!';