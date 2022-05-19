import Notiflix from 'notiflix';

const formRef = document.querySelector(".form");

const inputData = {};

formRef.addEventListener("submit", getDataFromInputs);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
        
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)
  })  
  return promise;
}

function getDataFromInputs(event){
  event.preventDefault();
  inputData.amount = Number(event.currentTarget.amount.value);
  inputData.step = Number(event.currentTarget.step.value);
  inputData.delay = Number(event.currentTarget.delay.value);
  abracadabra(inputData);
}

function abracadabra({amount, step, delay}){
for(let i = 1; i <= amount; i += 1){
  let position = i;

  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += step;
}
}





