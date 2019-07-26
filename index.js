//Lesson 92 The Rest Operator

function sum(...args) {
    console.log(args);
    return args.reduce((a, b) => a+b);
}

console.log(sum(1, 2, 3, 4, 5));

function sumDiscount(discount, ...prices) {
    const total = prices.reduce((a, b) => a+b);
    return total * (1 - discount);
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sumDiscount(0.1, 2, 3, 4, 5));





