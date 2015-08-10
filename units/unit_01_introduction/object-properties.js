// classic object declaration

function MyClass() {
	var hiddenProperty = "something I can not access";

	this.stringProp = "some random string";
	this.numberProp = 1;
}

var myObject = new MyClass();

//console.log(myObject.stringProp);
//console.log(myObject.numberProp);
console.log(myObject);


// literal object declaration

var myObject2 = {
	stringProp: "some random prop",
	numberProp: 10,
	myFunction: function () {
		console.log("I am a happy function");
	},
	constMethod: function () {
		this.prop1 = 123;
	},
	array: [ 1, 2, 3 ],
	config : {
		property1: "some internal string"
	}
};


//console.log(myObject2.stringProp);
//console.log(myObject2.numberProp);
//myObject2.myFunction();
//console.log(myObject2.config.property1);
//console.log(myObject2.array.length);

console.log(myObject2);


console.log("\n\n");
var internalObj = new myObject2.constMethod();
console.log(internalObj);


