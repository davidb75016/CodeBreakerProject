let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
  var answer = Math.floor(Math.random() * 1000);
  var answer = answer.toString();
  while (answer.length < 4) {
    var answer = "0"+ answer;
  }
}
