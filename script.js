// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').innerHTML = 'fdnfjdknfkdjnf'
// document.querySelector('.score').innerHTML = "50"
// console.log(document.querySelector('.score').textContent)
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*21);
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})

let highscore = 0;
let secretnumber = Math.trunc(Math.random()*21);
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = parseInt(document.querySelector('.guess').value);
    console.log(guess , typeof guess)
    if (!guess) {
        document.querySelector('.message').textContent = "No Numbers 🚫"
    }
    else if (guess === secretnumber) {
        document.querySelector('.message').textContent = "Correct Number 💚"
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretnumber
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess > secretnumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Greater Number 👇"
            score = score - 1;
            document.querySelector('.score').textContent = score   
        }
        else{
            document.querySelector('.score').textContent = "You Loss 🤣🤣🤣"
            document.querySelector('.message').textContent = "You Loss 🤣🤣🤣"
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = secretnumber
        }
    }
    else if (guess < secretnumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Lower Number ☝️"
            score = score - 1;
            document.querySelector('.score').textContent = score   
        }
        else{
            document.querySelector('.score').textContent = "You Loss 🤣🤣🤣"
            document.querySelector('.message').textContent = "You Loss 🤣🤣🤣"
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = secretnumber
        }
    }
});