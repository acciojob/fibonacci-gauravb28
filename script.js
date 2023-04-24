function fibonacci(num) {
	let arr = [0,1];
	for(let i = 3; i <= num; i++) {
		arr.push(arr[i-2] + arr[i-3]);
	}
	return arr[arr.length - 1];
}

module.exports = fibonacci;
