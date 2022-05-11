import throttle from 'lodash.throttle';

const btnStartRef = document.querySelector("button[data-start]");
const btnStopRef = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");


btnStartRef.addEventListener('click', onBtnStartRefClick);
btnStopRef.addEventListener('click', onBtnStopRefClick);

btnStopRef.disabled = true; // кнопка стоп изначально не активна

// Изменение цвета body
function changeBodyColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
}

function onBtnStartRefClick() {    
    btnStartRef.disabled = true;
    if (btnStopRef.disabled) {
            btnStopRef.disabled = false;

    }
    changeBodyColor();
    console.log("Hello")
    
//     if (btnStartRef.disabled) {
//     console.log("disabled");
//     throttle(changeBodyColor, 1000);
// }
}
 
function onBtnStopRefClick() {
    btnStartRef.disabled = false;
    btnStopRef.disabled = true;

    console.log("Bye")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
