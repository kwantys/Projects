var value
var array = []
var summa = 0
var i = 0

do {
value = prompt('Enter number: ') 
array[i] = +value 
console.log(array[i])
 i++
} while (value != null && !isNaN(+value))

for (let i = 0; i < array.length; i++) {
 summa += array[i]
}
console.log('Summa = ', summa)