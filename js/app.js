let x = 13

if (x >= 14 && x <= 90) {
	alert(x);
} else {
	alert("Sorry you don't meet the age requirements!")
}

let age = 12

if (age <= 14 && age <= 90) {
	alert(age);
} else {
	alert("Sorry you don't meet the age requirements!")
}

if (age != 14 && age != 90) {
	alert(age);
} else {
	alert("Sorry you don't meet the age requirements!")
}


let company = prompt("What is the official name of JavaScript?")
let answer = (company === "ECMAScript") ? "correct!" : "Incorrect!";

alert(answer);



let num = prompt("Type a number");

if (num > 0) {
	alert(1);
} else if (num < 0) {
	alert(-1);
} else {
	alert(0);
}

let name = prompt("login name");

if (name === "Admin") {
	let password = prompt("password?");
	if (password === "TheMaster") {
		alert("Welcome!");
	} else if (!(password === "TheMaster")) {
		alert("Wrong Password");
	} else if (password === "") {
		alert("cancelled.");
	}
}

if (name === "Admin") {
	let password = prompt("password?");
	if (password === "TheMaster") {
		alert("Welcome!");
	} else if (!(password === "TheMaster")) {
		alert("Wrong Password");
	} else if (password === "") {
		alert("cancelled.");
	}
}

let a = 4
let b = 4

let result = (a + b < 4) ? "below" : "over";



let message;
let login = prompt("Login name" , "");

message = (login === 'Employee') ? 'Hello':
(login === 'Director') ? 'Greetings':
(login === "") ? 'No login':
'Nothing to state';

const a = 1 + 8;
const b = 22 * 3;
const c = %(5 / 4);
const d = a - 17;
const e = (a + b + c + d);

console.log({a, b, c, d, e})