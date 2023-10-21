function try_err() {
	let res = document.getElementById('result');
	try {
		res.value=eval(res.value);
	}
	catch(err){
		alert("Please enter a valid input");
	}
}

function func () {
	let result = event.target.value;
	let operators = ["+", "*", "/", "-", "="];
	let res = document.getElementById('result');
	
	for (let i=0; i< operators.length; i++) {
		if (result === "+" || result === "*" || result === "/" || result === "-") {
			res.value += result;
			break;
		}
	}
}

function num (value) {
	document.getElementById('result').value += value;
}

function calc () {
	let res = document.getElementById('result');
	try_err();
}


function rev() {
	try_err();
	let num_reverse = document.getElementById("result");
	num_reverse.value *= -1;
}


function pwr () {
	try_err();
	let pwr_num = document.getElementById("result");
	pwr_num.value = pwr_num.value * pwr_num.value;
}


function del() {
	let rem = document.getElementById("result");
	rem.value = rem.value.slice(0, -1);
}


function clr () {
	let num = document.getElementById("result");
	num.value="";
}
