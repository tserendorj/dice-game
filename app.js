// Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer 0, hoyordugaar 1 gj
var activerPlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6, санамсаргүй


// prepare for start
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";
// dice roller event listener

document.querySelector('.btn-roll').addEventListener('click', function(){
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
        roundScore = 0;
        document.getElementById('current-' + activerPlayer).textContent = 0;
        
        activerPlayer === 0 ? (activerPlayer = 1) : (activerPlayer = 0);
        
        // swith red dot
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
        
        // hide dice
        diceDom.style.display = "none"; 

        // if(activerPlayer === 0){
        //     activerPlayer = 1;
        // }else{
        //     activerPlayer = 0;
        // }
        

    }

});


// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч