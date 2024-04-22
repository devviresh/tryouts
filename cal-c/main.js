let screen = document.getElementById("screen");
let btn = document.querySelectorAll(".btn");

// for (each of btn){
//     each.style.backgroundColor = "black"
// }
// screen.style.backgroundColor = "black"
// let body = document.querySelector("body");
// body.style.backgroundColor ="black"
for (each of btn){

    each.addEventListener("click", (e) => {
        btnText = e.target.innerText;
        console.log(btnText)
        if (btnText == "×"){
            btnText = '*';
        }
        if (btnText== "÷"){
            btnText = '/';
        }
        screen.value+=btnText;
    })
}

function sin(){
    screen.value = Math.sin(screen.value);
}
function cos(){
    screen.value = Math.cos(screen.value);
}
function tan(){
    screen.value = Math.tan(screen.value);
}
function pow(){
    screen.value = Math.pow(screen.value);
}
function sqrt(){
    screen.value = Math.sqrt(screen.value);
}
function log(){
    screen.value = Math.log(screen.value);
}
function pi(){
    screen.value = 3.14159265359;
}
function e(){
    screen.value = 2.718281182846;
}

function fact(){
    let num,f;
    f=1
    num = screen.value
    for (let i=1; i<=num; i++){
        f=f*i
    }
    i=i-1;

    screen.value = f;
}

function backspace(){
    screen.value = screen.value.substr(0,screen.value.length -1);
}