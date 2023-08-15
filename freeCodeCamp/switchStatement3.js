function chainToSwitch(val) {
    var answer = "";

     switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            anwer = "The Answer";
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
     }
     return answer;
}
console.log(chainToSwitch("bob"));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));