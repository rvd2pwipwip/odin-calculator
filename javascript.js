const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      break;
  }
};

let key = '';

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    key = e.target.textContent;
    console.log({key});
  })
);
