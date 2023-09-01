let change=document.querySelector('body');

const colors = [
    "#FF5733", "#FFBD33", "#33FF57", "#33D7FF", "#B933FF",
    "#FF335D", "#33FFD4", "#FF3384", "#33FFA5", "#A533FF",
    "#33FFB8", "#FF3333", "#33A2FF", "#FF33E6", "#33FFB2",
    "#FF33A2", "#33FF33", "#F933FF", "#33FF7C", "#FF5733"
];



const random=()=>{let temp=Math.floor(Math.random() * 20);
return colors[temp]
};


let changeColor=()=>{
    let temp=random()
    change.style.background=temp}
let tempo;
let inter=()=>{
    tempo=setInterval(changeColor,300)
};
const start=document.querySelector('#start')
start.addEventListener('click',inter)


const stop = document.querySelector('#stop')
stop.addEventListener('click',()=>{
    clearInterval(tempo);
});
