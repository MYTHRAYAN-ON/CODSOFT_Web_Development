let input = document.getElementById("input");
function input_function(e){
    input.value = input.value + e.innerHTML;
}

function clearScreen(){
    input.value = "";
}

function calculate(){
    let input = document.getElementById("input");
    let result = eval(input.value);
    input.value = result;
}