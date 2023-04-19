// 4. Get sum of all the length of the string in the list.
const strings = ["Ramana", "Venkt", "Raja"]
const totalLength = strings.reduce((a, b) => a + b.length, 0)
console.log(totalLength)