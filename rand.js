const my_btn=document.getElementById("btn");
const my_output=document.getElementById("output");
const start_input=document.getElementById("start");
const end_input=document.getElementById("end")

my_btn.onclick= function(){
    const start=parseInt(start_input.value);
    const end=parseInt(end_input.value);
    
    if (isNaN(start) || isNaN(end)){
        my_output.textContent="please enter valid numbers"
        return;
    }

    if (start > end){
        my_output.textContent="start number should less than the end"
        return;
    }

    const random_num=Math.floor(Math.random()*(end-start+1))+start;
    my_output.textContent=random_num;
}