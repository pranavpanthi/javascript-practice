function testElseIf(val) {
    if (val > 5) {
        return "Greater than 5";
    } else if (val <= 5) {
        return "Smaller then 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(4));
console.log(testElseIf(7));
