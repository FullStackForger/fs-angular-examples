var obj1 = { a: 1, func: function () { /** **/ } };
var obj2 = new MyClass();

// it is a CONSTRUCTOR METHOD!
function MyClass() {
	this.a = 1;
}

console.log(obj1.a);
console.log(obj2.a);