const amountOne = document.querySelector(".ccy1");
const amountTwo = document.querySelector(".ccy2");
const selectOne = document.querySelector("#currencyOne");
const selectTwo = document.querySelector("#currencyTwo");
const button = document.querySelector(".reverse");
const resultParagraph = document.querySelector(".result");

const calculate = () => {
	const URL = `https://api.exchangerate.host/latest?base=${selectOne.value}&symbols=${selectTwo.value}`;
	let rate1;
	let result;
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			rate1 = data.rates[`${selectTwo.value}`];
			const result = parseFloat(amountOne.value) * parseFloat(rate1);

			resultParagraph.textContent = `1 ${selectOne.value} = ${rate1.toFixed(
				4
			)} ${selectTwo.value}`;
			amountTwo.value = `${result.toFixed(2)}`;
		});
};

const reverse = () => {
	const oldSelect1 = selectOne.value;
	selectOne.value = selectTwo.value;
	selectTwo.value = oldSelect1;
	calculate();
};

amountOne.addEventListener("input", calculate);
selectOne.addEventListener("change", calculate);
selectTwo.addEventListener("change", calculate);
button.addEventListener("click", reverse);
