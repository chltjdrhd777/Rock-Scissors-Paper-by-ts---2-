"use strict";
var imgCoords = '0';
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
}; // to prevent this const can be used another way.
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; }); //Object.keys() = makes the array which is made of property names. In this case, ['ROCK','PAPER','SCISSORS'/ .find = detect the first element that satisfies the precondition in the array. 
} // Object.keys(rsp) is ['ROCK','SCISSORS','PAPER'], but in this case, typescript consider this as the array that comprise strings. Therefore, I add "as ['ROCK','SCISSORS','PAPER']" to mention this is the array. But, .find is declared T | undefined by other programmer. So I add "!" which means I am convinced this cord has no fallacious point so just run it.
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (p) {
        var myChoice = this.textContent; // In this case, "this.textContent" === "parameter.target.textContent" / in typescript, I should determine the type of "this" which is "HTMLButtonElement" and "parameter:Event"
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) { // it means the option that I and computer chose is the same
            document.write('It is tie');
        }
        else if ([-1, 2].indexOf(diff)) { //*[a,b,c,d,e.....].indexOf(A) = in the middle of A, is there a,b,c,d,e.....? / and also it means I win.
            document.write('I win');
        }
        else {
            document.write('Computer win');
        }
    });
});
