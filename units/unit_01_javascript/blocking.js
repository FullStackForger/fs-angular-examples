function sleep(seconds) {
	var startTime = (new Date()).getSeconds();
	while (startTime + seconds > (new Date()).getSeconds()) {
		// infinite
	}
	return;
}

function fetchData(callback) {
	setTimeout(function () {
		callback();
	}, 0);
}

console.log(1);
fetchData(function ( ) {
	console.log('data received');
});
sleep(5);
console.log(2);
sleep(5);