
// object constructor function
function MyObject () {
	this.foo = "bar";
}

var myObject = new MyObject();
console.log(myObject.foo);

// function factory pattern
function myObjectFactory () {
	return {
		foo: "bar"
	};
}

var mySecondObject = myObjectFactory();
console.log(mySecondObject.foo);

// 100 pts QUESTION: Why console logs "bar" string in this case?
var myThirdObject = new myObjectFactory();
console.log(myThirdObject.foo);