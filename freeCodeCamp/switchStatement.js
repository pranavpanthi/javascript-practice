function casrInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        }

    return answer;
}

console.log(casrInSwitch(1));
console.log(casrInSwitch(2));
console.log(casrInSwitch(3));
console.log(casrInSwitch(4));
console.log(casrInSwitch(1));