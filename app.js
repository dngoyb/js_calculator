const numbers = document.querySelectorAll('.box');
const calcs = document.querySelectorAll('.calc');
const input = document.querySelector('input');
const cancel = document.querySelector('.cancel');

let val_01 = 0;
let val_02 = 0;
let v1 = 0;
let v2 = 0;
let tracker = 0;
let sign = '';
let total = '';

const playSound = () => {
	const audio = new Audio('./audio/menu.ogg');
	audio.play();
};

cancel.addEventListener('click', () => {
	val_01 = 0;
	val_02 = 0;
	tracker = 0;
	sign = '';
	total = 0;
	input.value = 0;
	playSound();
});

calcs.forEach((calc) => {
	calc.addEventListener('click', () => {
		playSound();
		tracker = 1;

		if (calc.textContent === '+') {
			sign = '+';
		} else if (calc.textContent === '−') {
			sign = '-';
		} else if (calc.textContent === '×') {
			sign = '*';
		} else if (calc.textContent === '÷') {
			sign = '/';
		} else if (calc.textContent === '=') {
			if (sign === '+') {
				total = parseFloat(val_01) + parseFloat(val_02);
			} else if (sign === '-') {
				total = parseFloat(val_01) - parseFloat(val_02);
			} else if (sign === '*') {
				total = parseFloat(val_01) * parseFloat(val_02);
			} else if (sign === '/') {
				total = parseFloat(val_01) / parseFloat(val_02);
			}
			val_02 = 0;
			v1 = 0;
			v2 = 0;
			sign = '';
			val_01 = total;
			input.value = total;
		}
	});
});
numbers.forEach((number) => {
	number.addEventListener('click', () => {
		playSound();
		if (tracker === 0) {
			if (v1 === 0) {
				val_01 = number.textContent;
				v1 = 1;
			} else val_01 += number.textContent;
			input.value = val_01;
		} else {
			if (v2 === 0) {
				val_02 = number.textContent;
				v2 = 1;
			} else val_02 += number.textContent;
			input.value = val_02;
		}
	});
});
