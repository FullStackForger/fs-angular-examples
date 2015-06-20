var data;

function fetchData (callback) {
	// lets assume fetching data from the server
	setTimeout(function () {
		data = [1, 2, 4];
		callback();
	}, 3000);
}

fetchData(function () {
	console.log("logging data åsync: ", data);
});

console.log("logging data sync: ", data);