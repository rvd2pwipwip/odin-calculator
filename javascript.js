// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case 'plus':
      return a + b;
    case 'minus':
      return a - b;
    case 'times':
      return a * b;
    case 'divide':
      return a / b;
    default:
      break;
  }
};

const display = document.querySelector('.display');
display.textContent = 0;
const btns = document.querySelectorAll('.btn');
let key = '';
let operator = null;
let operand1 = null;
let operand2 = null;
let startOperand = false;
let result = null;

const init = () => {
  operator = null;
  operand1 = null;
  operand2 = null;
  startOperand = false;
  result = null;
};

const clear = () => {
  init();
  display.textContent = 0;
};

const del = () => {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = 0;
  }
};

const dot = (e) => {
  if (display.textContent.includes('.')) {
    e.preventDefault();
    e.stopPropagation();
  }
};

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    key = e.target.textContent;

    if (e.target.classList.contains('clear')) {
      clear();
    }

    if (result) {
      if (e.target.classList.contains('equals')) {
        operand1 = result;
        result = operate(operator, operand1, operand2);
        display.textContent = result;
      }
      if (e.target.classList.contains('delete')) {
        del();
        result = display.textContent;
      }
    }

    if (!operand1) {
      if (e.target.classList.contains('digit')) {
        if (!startOperand) {
          display.textContent = null;
          startOperand = true;
        }
        if (e.target.classList.contains('dot')) {
          dot();
        }
        display.textContent += key;
      } else if (e.target.classList.contains('operator')) {
        setOperand1();
        startOperand = false;
        setOperator();
      } else if (e.target.classList.contains('delete')) {
        del();
        startOperand = false;
      }
    } else if (!operand2) {
      if (e.target.classList.contains('digit')) {
        if (!startOperand) {
          display.textContent = null;
          startOperand = true;
        }
        display.textContent += key;
      } else if (e.target.classList.contains('equals')) {
        if (!result) {
          setOperand2();
          result = operate(operator, operand1, operand2);
          display.textContent = result;
        }
      } else if (e.target.classList.contains('delete')) {
        del();
      }
    }
  })
);

const setOperand1 = () => {
  operand1 = Number(display.textContent);
};

const setOperand2 = () => {
  operand2 = Number(display.textContent);
};

const setOperator = () => {
  if (operand1) {
    switch (key) {
      case '\u00F7': // ÷
        operator = 'divide';
        console.log(operator);
        break;
      case '\u00D7': // ×
        operator = 'times';
        console.log(operator);
        break;
      case '\u2212': // −
        operator = 'minus';
        console.log(operator);
        break;
      case '\u002B': // +
        operator = 'plus';
        console.log(operator);
        break;
      case '\u003D': // =
        operator = 'equals';
        console.log(operator);
        break;
    }
  }
};
