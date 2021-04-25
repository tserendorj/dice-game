// Тоглогчийн ээлжийг хадгалах хувьсагч, negdugeer 0, hoyordugaar 1 gj
var activerPlayer = 1;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6, санамсаргүй
var dice = Math.floor(Math.random() * 6) + 1;

// prepare for start
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').innerHTML = 0;
document.querySelector('#current-0').innerHTML = 0;
document.querySelector('#current-1').innerHTML = 0;
document.querySelector('.dice').style.display = "none"; 

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч