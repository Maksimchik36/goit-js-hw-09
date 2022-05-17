import Notiflix from 'notiflix';

const formRef = document.querySelector(".form");
const delayRef = document.querySelector("input[name='delay']");
const stepRef = document.querySelector("input[name='step']");
const AmountRef = document.querySelector("input[name='amount']");

formRef.addEventListener("submit", createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  
  } else {
    // Reject

  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });