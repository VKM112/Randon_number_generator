const max_num=document.getElementById("max")
const min_num=document.getElementById("min")
const button =document.getElementById("btn")
const guessed_num=document.getElementById("guess")
const result=document.getElementById("output")

button.onclick=function(){
    const start=parseInt(max_num.value);
    const end=parseInt(min_num.value);
    const guess=parseInt(guessed_num.value)

    const rand_guess=Math.floor(Math.random()*(end-start+1)+start);

    if (guess == rand_guess){
        result.textContent=`YAY You guessed the correct Num`;
    }
    else{
        result.textContent=`Not the correct. number was ${rand_guess}. Please try again!`;
    }
}   