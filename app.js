// global variables
var diceDom = document.querySelector('.dice');
var activerPlayer;
var scores;
var roundScore;

// status variable for game 
var isNewGame = false;


initGame();
// New game 
function initGame(){
    // begin status
    isNewGame = true;

    // Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer 0, hoyordugaar 1 gj
    activerPlayer = 0;
    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];
    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // prepare for start
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    diceDom.style.display = "none";
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
};

// dice roller event listener
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isNewGame){
        // random number between 1 and 6 
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        // display the picture of dice which default
        diceDom.style.display = "block"; 
        // display the picture of dice which selected
        diceDom.src = 'dice-' + diceNumber + '.png'; 

        // increment number if it is not equal to 1
        if(diceNumber !== 1){
            // add number to the current roundScore
            roundScore = roundScore + diceNumber;
            document.getElementById('current-' + activerPlayer).textContent = roundScore;
        }else{
            // if 1
            swithToNextPlayer();
        }
    }

});

// event listener for HOLD button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
        // sum up the current player's score
        scores[activerPlayer] = scores[activerPlayer] + roundScore;
        // display the score
        document.getElementById('score-'+activerPlayer).textContent = scores[activerPlayer];
        // the player win or not?
        if(scores[activerPlayer] >= 10){
            // display the winenr text
            document.getElementById('name-'+activerPlayer).textContent = "WINNER!!!";
            document.querySelector('.player-' + activerPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activerPlayer + '-panel').classList.remove('active');
            //game status
            isNewGame = false;

        } else{
            swithToNextPlayer();
        }
    }
});

// This function switches the next player
function swithToNextPlayer(){
    // set current score to zero
    roundScore = 0;
    document.getElementById('current-' + activerPlayer).textContent = 0;
    
    activerPlayer === 0 ? (activerPlayer = 1) : (activerPlayer = 0);
    
    // swith red dot
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");
    
    // hide dice
    diceDom.style.display = "none";
}

// event listener for new game button
document.querySelector('.btn-new').addEventListener('click', initGame);
