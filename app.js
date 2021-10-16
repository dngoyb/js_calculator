const numbers = document.querySelectorAll('.box');
const calcs = document.querySelectorAll('.calc');
const input = document.querySelector('input');
const cancel = document.querySelector('.cancel');

let val_01 = 0;
let val_02 = 0;
let tracker = 0;
let sign = '';
let total = '';

const obj = {
	plus: '+',
	minus: '-',
};

cancel.addEventListener('click', () => {
	val_01 = 0;
	val_02 = 0;
	tracker = 0;
	sign = '';
	total = 0;
});

calcs.forEach((calc) => {
	calc.addEventListener('click', () => {
		tracker = 1;

		if (calc.textContent === '+') {
			sign = '+';
			console.log(sign);
		} else if (calc.textContent === '−') {
			sign = '-';
			console.log(sign);
		} else if (calc.textContent === '×') {
			sign = '*';
			console.log(sign);
		} else if (calc.textContent === '÷') {
			sign = '/';
			console.log(sign);
		} else if (calc.textContent === '=') {
			if (sign === '+') {
				total = parseFloat(val_01) + parseFloat(val_02);
				console.log(total);
			} else if (sign === '-') {
				total = parseFloat(val_01) - parseFloat(val_02);
				console.log(total);
			} else if (sign === '*') {
				total = parseFloat(val_01) * parseFloat(val_02);
				console.log(total);
			} else if (sign === '/') {
				total = (parseFloat(val_01) / parseFloat(val_02)).toFixed(3);
				console.log(total);
			}
		}
	});
});
numbers.forEach((number) => {
	number.addEventListener('click', () => {
		if (tracker === 0) {
			val_01 += number.textContent;
		} else {
			val_02 += number.textContent;
		}
	});
});
