Array.prototype.contains = function (element) {
	var found = false;
	this.forEach(function (item) {
		if (element === item) {
			found = true;
		}
	});
	return found;
};

var a = [1, 2, 3];

console.log(a.contains(1));
//console.log(Array.prototype.contains.apply(a, [1]));

