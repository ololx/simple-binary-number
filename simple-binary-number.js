var number = 0;

function check(element) {
  	if (element == null || element == 'undefined') return;

	let power = element.id;
	let incNumber = Math.pow(2, power - 1);
	if (element.classList.contains("active")) {
		element.classList.remove("active");
		element.classList.add("inactive");
		number -= incNumber;
	} else {
		element.classList.add("active");
		element.classList.remove("inactive");
		number += incNumber;
	}
	
	let decimalView = document.getElementById("result");
	if (decimalView == null || decimalView == 'undefined') return;
	
	decimalView.innerText = number;
}