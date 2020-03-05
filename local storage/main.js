
//Simple Object
let myObj = {
    name: "cubeacloud",
    age: "18",
    city: "karachi"
};

//stringify
let myJSON = JSON.stringify(myObj);
//set item in local storage
localStorage.setItem('local', myJSON);
//get item from local storage
let getObj = localStorage.getItem('local');
//obj 
let obj = JSON.parse(getObj);
//getting properties from obj
let wholeChar = obj.name + "<br/>" + obj.age + "<br/>" + obj.city;
//showing item in
document.getElementById('obj').innerHTML = wholeChar;