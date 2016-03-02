var a = [1, 2, 3, "qwe"];

function testMe () {	
	var i;
	a = [0, 1, 2];

	for(i = 0; i < a.length; i++) {
		console.log(a[i]);
	}
	console.log("local");
	console.log(a);
}

testMe();
console.log("global");
console.log(a);