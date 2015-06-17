function getObject () {
	var prop1 = 0;

	return {
		prop2 : 'foo bar',
		myMethod : myMethod,
		getProp1: function () { return prop1; }
	};

	function myMethod() {
		console.log('i am called by myMetod()');
		prop1 ++;
	}
}


var obj = getObject();

console.log(obj.prop2); // foo bar

console.log(obj.getProp1()); // 1

obj.myMethod();
obj.myMethod();

console.log(obj.getProp1()); // 3