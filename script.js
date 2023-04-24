function fibonacci(num) {
	let arr = [0,1];
	for(int i = 3; i <= num; i++) {
		arr.push(arr[i-2] + arr[i-1]);
	}
	return arr[arr.length - 1];
}

module.exports = fibonacci;
