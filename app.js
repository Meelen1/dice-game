// тоглогчийн ээлжийг хадгалах увьсагч
// player 1 iig 0, player 2 iig 1 gej temdeglene
var activePlayer = 1;

// тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];


// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;



// шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө 

var dice = Math.floor(Math.random() * 6) + 1;


//<div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').textContent = dice;

/*=== Програм эхлэхэд бэлтгэе===*/
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

console.log('шоо : ' + dice);