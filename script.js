'use strict';
let secret_num = Math.trunc(Math.random() * 20) + 1;
console.log(secret_num);
let score = 20;
let highscore=0;
document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
    secret_num = Math.trunc(Math.random() * 20) + 1;
    console.log(secret_num);
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = ' rgb(161, 173, 141)';
    document.querySelector('.guess').value = '';




}
)


const game_logic = function () {

    const guess_input = Number(document.querySelector('.guess').value);
    if (!guess_input)
        document.querySelector('.message').textContent = 'No numbers entered! ';
    else if (guess_input === secret_num) {

        document.querySelector('.message').textContent = 'Correct Answer';
        if(score>highscore){
            highscore=score;
        document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.message').textContent = 'Correct Answer';
        document.querySelector('.number').textContent = secret_num;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if (guess_input > secret_num) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else if (score === 1) {
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'You lost the Game';
        }
        else
            document.querySelector('.message').textContent = 'You lost the Game';


    }
    else if (guess_input < secret_num) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low';

            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else if (score === 1) {
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'You lost the Game';
        }
        else
            document.querySelector('.message').textContent = 'You lost the Game';



    }
}


const reload = function () {
    window.location.reload();
}



document.querySelector('.check').addEventListener('click', game_logic);
document.querySelector('.new-game').addEventListener('click', reload);


