function testLogicalAnd(val) {
    
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(45));
console.log(testLogicalAnd(100));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
    return "Outside";
    }

    return "Inside";
}

console.log(testLogicalOr(15));
console.log(testLogicalOr(35));
