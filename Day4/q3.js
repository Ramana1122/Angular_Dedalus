// 3. Get the lengthiest string in the list of string
const strings = ["ramana", "dedalus", "virat"]
const longestString = strings.reduce((a, b) => (a.length > b.length ? a : b))
console.log(longestString)