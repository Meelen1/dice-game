// тоглогчийн ээлжийг хадгалах увьсагч player 1 iig 0, player 2 iig 1 gej temdeglene
var activePlayer = 0;

// тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө 
var diceNumber = Math.floor(Math.random() * 6) + 1;

/*=== Програм эхлэхэд бэлтгэе===*/
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = 'none'

//шоо шидэх ээвэнт 
document.querySelector(".btn-roll").addEventListener("click", function () {
    //1-6 санамсаргүй тоо
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // зураг гаргаж ирэх
    diceDom.style.display = "block";

    //буусан шоооний зургийг гаргаж ирнээ
    diceDom.src = 'dice-' + diceNumber + '.png';

    //буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
    if (diceNumber !== 1) {
        //1ээс ялгаатай тоо буулааа
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 Буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.  

        // энэ тоглогчын ээлжиндээ цуглуулсан оноог 0 болгоно.
        roundScore
        document.getElementById("current-" + activePlayer).textContent = 0;

        //тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

        //улаан цэгийг шилжүүлэх
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // шоог түр алга болго.

        diceDom.style.display = 'none';
    }
});

// HOLD товчны эвент листенер
document.querySelector('.bnt-hold').addEventListener("click", function () {
    // Уг тоглогчын цуглуусан ээлжний оноог глобаль оноон дээр нь нэмж өгнө 

    // if (activePlayer === 0) {
    //     scores[0] = scores[0] + roundScore;
    // } else {
    //     scores[1] = scores[1] + roundScore;
    // }

    scores[activePlayer] = scores[activePlayer] + roundScores;
    // дэлгэц дээр оноог нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    //ээлжийн оноог нь 0 болгоно
    roundScores = 0;
    document.getElementById('current-' + activePlayer).textContent = 'o';
    //Тоглогчын ээлжийг солино.
});
