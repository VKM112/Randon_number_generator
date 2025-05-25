const max_num =document.getElementById("max")
const min_num =document.getElementById("min")
const button =document.getElementById("btn")
const guessed_num =document.getElementById("guess")
const result =document.getElementById("output")

button.onclick=function(){
    const start=parseInt(min_num.value);
    const end=parseInt(max_num.value);
    const guess=parseInt(guessed_num.value)

    const rand_guess=Math.floor(Math.random()*(end-start+1)+start);

    if (isNaN(start) || isNaN(end) || isNaN(guess)){
        result.textContent="please enter a valid number!";
        return;
    }

    if (start >= end){
        result.textContent="the minimum range must be less than the maximum number!";
        return;
    }

    if (guess < start || guess > end){
        result.textContent=`the guessed number should be in between ${min} & ${max}`;
        return;
    }

    if (guess === rand_guess){
        result.textContent=`Yay! You Guessed the correct number`;
    }
    else{
        result.textContent=`You guessed the wrong number the number is ${rand_guess}`;
    }
}   