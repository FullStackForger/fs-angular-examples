'use strict'  // <-- comment this out to get property leaking
var x = 'global property';

function f () {
	x = 'local property';

	console.log(x)

	MyController = function () { this.property = 123; }
}


f();

obj = new MyController();
console.log(obj.property);

