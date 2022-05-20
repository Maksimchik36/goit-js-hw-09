import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const startBtnRef = document.querySelector("button[data-start]");
const inputRef = document.querySelector("#datetime-picker");

startBtnRef.disabled = true;

const daysRef = document.querySelector("span[data-days]");
const hoursRef = document.querySelector("span[data-hours]");
const minutesRef = document.querySelector("span[data-minutes]");
const secondsRef = document.querySelector("span[data-seconds]");

// По умолчанию должно быть - "ничто"
let timerId = null;

startBtnRef.addEventListener('click', onStartBtnClick);

// Опции для библиотеки flatpickr. В методе onClose - персональные настройки для нашего задания
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectedDate = selectedDates[0].getTime();
    const currentTime = Date.now();
    const deltaTime = userSelectedDate - currentTime;
   
    if(deltaTime > 0){
     startBtnRef.disabled = false;
     } else {
      Notiflix.Notify.failure("Please choose a date in the future");
      //  alert("Please choose a date in the future");
      }
  },
};

// Инициализация библиотеки на элементе input#datetime-picker
// const inputData = flatpickr("#datetime-picker", options);
const inputData = flatpickr(inputRef, options);

function onStartBtnClick(){
  if(timerId !== null){
    return;
  }

  startBtnRef.disabled = true;
  inputRef.disabled = true;

  timerId = setInterval(()=>{
    const deltaTimeValue = countDeltaTime();
    if(deltaTimeValue < 0){
      clearInterval(timerId);
      Notiflix.Notify.success('Congratulations !!! It’s time for miracles and magic for you !!!');
      return;
    }

    const parameterOfTime = convertMs(deltaTimeValue);
 
    visualizeCounter(parameterOfTime); 
  }
      , 1000)  
}

// Рассчитывает и выдает разницу между текущим и выбранным временем
function countDeltaTime(){
  const dataFromInput = inputData.selectedDates[0];
  const currentTime = Date.now(); 
  const deltaTime = dataFromInput - currentTime;
  return deltaTime;      
}

// Записывает время из объекта параметров в счетчик
function visualizeCounter({days, hours, minutes, seconds}){
  daysRef.textContent = addLeadingZero(days.toString());
  hoursRef.textContent = addLeadingZero(hours.toString());
  minutesRef.textContent = addLeadingZero(minutes.toString());
  secondsRef.textContent = addLeadingZero(seconds.toString());
}

// Преобразовывает число в объект параметров и выдает его
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  const rezult = value.padStart(2, "0");
  return rezult;
}