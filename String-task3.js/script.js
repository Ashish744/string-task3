
//SECTION 1 – String & Type Conversion Tasks
//TASK 1 – Full Name Builder
let firstName = "Naveen"
let lastName = "Kumar"

// 1. Using + operator
let fullName1 = firstName + " " + lastName
console.log(fullName1) 
// Naveen Kumar

// 2. Using template string
let fullName2 = `${firstName} ${lastName}`
console.log(fullName2) 
// Naveen Kumar

// 3. Length of full name
console.log(fullName1.length)
// Counts all characters including space
// Naveen Kumar → 13 characters
//TASK 2 – Predict Type
console.log(typeof("5" + 2))
// "5" is string, 2 becomes string
// Result = "52"
// Type = string

console.log(typeof(5 + "2"))
// 5 becomes string
// Result = "52"
// Type = string

console.log(typeof(true + 1))
// true = 1
// 1 + 1 = 2
// Type = number

console.log(typeof(false + "hello"))
// false becomes "false" (string conversion)
// Result = "falsehello"
// Type = string

console.log(typeof(null + 1))
// null becomes 0
// 0 + 1 = 1
// Type = number



//TASK 3 – Manual Type Conversion

console.log(Number("100"))
// 100 → number

console.log(Number("10.5"))
// 10.5 → number

console.log(Number("abc"))
// Not a number → NaN

console.log(Number(true))
// true = 1

console.log(Number(false))
// false = 0

console.log(Number(null))
// null = 0

console.log(Number(undefined))
// Cannot convert → NaN



//TASK 4 – Boolean Truthy/Falsy
console.log(Boolean(0))
// false

console.log(Boolean(1))
// true

console.log(Boolean(""))
// false (empty string)

console.log(Boolean("hello"))
// true

console.log(Boolean(null))
// false

console.log(Boolean(undefined))
// false

console.log(Boolean([]))
// true

console.log(Boolean({}))
// true


//SECTION 2 – Flow Control
//TASK 5 – Even or Odd
let num = 7

if(num % 2 === 0){
    console.log(num + " is Even")
}else{
    console.log(num + " is Odd")
}
// 7 % 2 = 1 → Odd


//TASK 6 – Grade System
let marks = 75

if(marks >= 90){
    console.log("Grade A")
}else if(marks >= 75){
    console.log("Grade B")
}else if(marks >= 50){
    console.log("Grade C")
}else{
    console.log("Fail")
}



//TASK 7 – Switch Day Finder
let dayNumber = 3

switch(dayNumber){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Day")
}


//SECTION 3 – Loops
//TASK 8 – Reverse Counting
for(let i = 5; i >= 1; i--){
    console.log(i)
}
// Starts from 5
// Decreases until 1

//TASK 9 – Multiplication Table
for(let i = 1; i <= 10; i++){
    console.log("3 x " + i + " = " + (3 * i))
}
// 3 x 1 = 3
// ...
// 3 x 10 = 30



//TASK 10 – Sum of First 10 Numbers
let sum = 0

for(let i = 1; i <= 10; i++){
    sum = sum + i
    // Adding each number to sum
}

console.log(sum)
// Final sum = 55