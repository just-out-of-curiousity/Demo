"use strict";
const number = Math.trunc(Math.random() * 20) + 1;
let Score = 20;
let high_score = 0;
console.log(number);

function check_score(Score) {
    if (Score === 0) {
        document.querySelector('.message').textContent = 'You lost';
        document.querySelector('body').style.backgroundColor = '#e91100';
        document.querySelector('h1').textContent = 'Try Again.....';
    }

};

function resetting() {


};

const game_logic =
    function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        if (!guess) {
            document.querySelector('.message').textContent = 'No number';

        } else if (guess === number) {
            document.querySelector('body').style.backgroundColor = '#cff32c';
            document.querySelector('.number ').textContent = number;
            document.querySelector('.message').textContent = 'Correct Number';;
            if (Score > high_score) {
                high_score = Score;
                document.querySelector('.highscore').textContent = high_score;
            }
        } else if (guess > number) {
            document.querySelector('.message').textContent = 'Too High';
            Score--;
            document.querySelector('.score').textContent = Score;
            check_score(Score);
        } else if (guess < number) {
            document.querySelector('.message').textContent = 'Too Low';
            Score--;
            document.querySelector('.score').textContent = Score;
            check_score(Score);
        }

    }
console.log(game_logic());
document.querySelector('.check').addEventListener('click', game_logic);
// Aute exercitation quis Lorem elit.Dolore amet nostrud incididunt nulla fugiat ex do.Irure ullamco tempor fugiat ullamco nostrud magna sit in labore exercitation nulla nostrud adipisicing.
// Aute exercitation quis Lorem elit.Dolore amet nostrud incididunt nulla fugiat ex do.Irure ullamco tempor fugiat ullamco nostrud magna sit in labore exercitation nulla nostrud adipisicing.
// Aute exercitation quis Lorem elit.Dolore amet nostrud incididunt nulla fugiat ex do.Irure ullamco tempor fugiat ullamco nostrud magna sit in labore exercitation nulla nostrud adipisicing.