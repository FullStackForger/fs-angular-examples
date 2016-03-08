"use strict";
//
//function getArray(callback) {
//	setTimeout(function () {
//		callback([1, 2, 3, 4]);
//	}, 1000);
//}
//
//
//getArray(function (arr) {
//	arr.forEach(function (item) {
//		console.log(item);
//	})
//})

function getArrayPromise() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve([1, 2, 3, 4]);
		}, 1000);
	})
}

getArrayPromise()
	.then(function (data) {
		data.forEach(function (item) {
			console.log(item);
		})
	})
