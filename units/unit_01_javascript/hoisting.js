// function executeMe() { .... } <- this is how JS hoists a mehtod

var t = "exposed on global scope";

executeMe();

console.log(t);

function executeMe () {

	var t;  //<- this is how JS hoists property
	t = 0;
	t++;
	console.log(t);

	t = 1;
	console.log(t);
}