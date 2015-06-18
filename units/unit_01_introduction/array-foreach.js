
var arr = [1, 2, 3, 4, 5];

arr.forEach(function (el) {
	throw new Error('some random error');
	console.log(el);
});