const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputArea = document.querySelector("#output-box");

function calculateSum(input_date) {
	let sum = 0;
	for (let c of input_date) {
		if (c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <= "9".charCodeAt(0)) {
			sum += c.charCodeAt(0) - "0".charCodeAt(0);
		}
	}
	return sum;
}
function checkBirthDayIsLucky() {
	const input_date = dateOfBirth.value;
	const sum = calculateSum(input_date);
	const input_num = luckyNumber.value;
	if (input_date === "") {
		outputArea.innerText = "Please Enter Correct Date of Birth.";
	} else if (Number(input_num) <= 0) {
		outputArea.innerText = "Lucky Number should be a Positive Integer. Please Update it.";
	} else if (sum % input_num === 0) {
		outputArea.innerText = "Congrats! Your Birthday is Lucky 🥠 🌟";
	} else {
		outputArea.innerText = "Sorry! Your Birthday is not Lucky 🥲";
	}
}

checkNumberButton.addEventListener("click", checkBirthDayIsLucky);
