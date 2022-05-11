const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector("body");


btnStart.addEventListener('click', () => {timerId = setInterval(onBtnStartClick, 1000)});
btnStop.addEventListener('click', onBtnStopClick);

btnStop.disabled = true; // кнопку стоп изначально делаем не активной

let timerId = null;

// Изменение цвета body
function changeBodyColor() {
    bodyRef.style.backgroundColor = getRandomHexColor();
}

function onBtnStartClick() {    
    btnStart.disabled = true;
    if (btnStop.disabled) {
            btnStop.disabled = false;
    }
    changeBodyColor();
}
 
function onBtnStopClick() {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(timerId); // очищаем данные setInterval-a
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
