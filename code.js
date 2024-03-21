let currentInteger = 0
let checkedIntegers = []
let current = 0
let checked = []

function collatz(n, sequence = []) {
	let x = null

	if (sequence.includes(n)) return { n, sequence }
	if (n < currentInteger) return false

	sequence.push(n)
	if (n === 1) return false
	if (n % 2 === 1) x = 3 * n + 1
	if (n % 2 === 0) x = n / 2

	return collatz(x, sequence)
}

function collatzV2(n, sequence = []) {
	if (sequence.includes(n)) return { n, sequence }
	if (n < current) return false

	sequence.push(n)

	if (n === 1) return false
	return n % 2 === 1
		? collatzV2((3 * n + 1) / 2, sequence)
		: collatzV2(n / 2, sequence)
}

function main() {
	let x = 2 ** 20

	// console.time("Original Collatz Function")
	// for (let index = 0; index < x; index += 1) {
	// 	let result = collatz(index)
	// 	if (result !== false) console.log(result)
	// 	currentInteger += 1
	// }
	// console.timeEnd("Original Collatz Function")
	console.time("Collatz V2")
	for (let index = 0; index < x; index += 1) {
		let result = collatzV2(index)
		if (result !== false) console.log(result)
		current += 1
	}
	console.timeEnd("Collatz V2")
	console.log(`Done! Checked all numbers up to ${x.toLocaleString()}!`)
}

main()
