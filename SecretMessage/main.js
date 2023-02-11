let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removes last string from array.
secretMessage.pop()

// returns a number, the length of your array.
console.log(secretMessage.length)

// adds new string(s) to the end of the array.
secretMessage.push('to', 'Program')

// replaces old string with new string
secretMessage[7] = 'right'

// removes the first string from the array
secretMessage.shift()

// adds string to the beginning of the array.
secretMessage.unshift('Programming')

// remove(s) string(s) form array and replaces with new string.
secretMessage.splice(6, 5, 'know')

// 
console.log(secretMessage.join(' '))
