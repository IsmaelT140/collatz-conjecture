let currentInteger = 0
let checkedIntegers = []
function collatz(n, sequence = []) {
	let x = null

	if (sequence.includes(n)) return { n, sequence }
	if (n < currentInteger) return false
	if (checkedIntegers.includes(n)) return false

	sequence.push(n)
	if (n === 1) return false
	if (n % 2 === 1) x = 3 * n + 1
	if (n % 2 === 0) x = n / 2

	return collatz(x, sequence)
}

function main() {
	let x = 2 ** 20

	console.time("Total Time")
	for (let index = 0; index < x; index += 1) {
		let result = collatz(index)
		if (result !== false) console.log(result)
		currentInteger += 1
	}
	console.log(`Done! Checked all numbers up to ${x.toLocaleString()}!`)
	console.timeEnd("Total Time")
}

main()
