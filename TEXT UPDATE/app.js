


function text(){
    let input = document.getElementById('input').value;
let txt = document.getElementById('txt');
if(input === ''){
    alert("type please");
}
txt .textContent = input;
txt = ''
}