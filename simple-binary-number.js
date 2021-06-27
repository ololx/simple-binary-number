var number = 0;

function check(element) {
  	if (element == null || element == 'undefined') return;

	let power = element.id;
	if (element.classList.contains("active")) {
		element.classList.remove("active");
		element.classList.add("inactive");
		number -= Math.pow(2, power - 1);
	} else {
		element.classList.add("active");
		element.classList.remove("inactive");
		number += Math.pow(2, power - 1);
	}
	
	let decimalView = document.getElementById("result");
	if (decimalView == null || decimalView == 'undefined') return;
	
	decimalView.innerText = number;
}