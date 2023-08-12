function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "1":
            answer = "apple";
            break;
        case "2":
            answer = "bird";
            break;   
        case "3":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
        }
    return answer;
}
console.log(switchOfStuff(1));

