function testSize(num) {
    if (num < 5) {
        return "Tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "large"
    } else {
        return "Huge"
    }
}

console.log(testSize(2));
console.log(testSize(7));
console.log(testSize(13));
console.log(testSize(18));
console.log(testSize(25));

