// Kata 1
function addition(x, y) {
    return x + y
}
console.log('Kata 1:', addition(2, 4))


// Kata 2
function multiply(x, y) {
    let answer = 0
    for (let index = 0; index < y; index++) {
        answer = addition(answer, x)
    }
    return answer
}
console.log('Kata 2:', multiply(6, 4))


// Kata 3
function power(x, n) {
    let answer = 1
    for (let index = 0; index < n; index++) {
        answer = multiply(answer, x)
    }
    return answer
}
console.log('Kata 3:', power(3, 4))


// Kata 4
function factorial(x) {
    let answer = 1
    for (let index = 1; index <= x; index++) {
        answer = multiply(answer, index)
    }
    return answer
}
console.log('Kata 4:', factorial(4))


// Kata 5
function fibonacci(n) {
    let a = 1
    let b = 0
    answer = b;

    for (let index = 1; index < n; index++) {
        answer = addition(a, b)// this is adding the two sequence values in the index
        a = b // a is dropped and replaced by b in the sequence
        b = answer // b is dropped and replaced with new sum in the sequence
        // loop repeats until nth number is reached in the sequence
    }
    return answer
}
console.log('Kata 5:', fibonacci(8))

// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.
