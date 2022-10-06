let RPS = prompt("what is your move - rock, paper, scissors");
let x = Math.floor(Math.random() *3)+1;
console.log(x)

switch(RPS){
case "rock" :
    console.log(1);
    break;
case "paper" :
    console.log(2);
    break;
case "scissors" :
    console.log(3);
    break;
default:
    console.log("not recognized")
}

switch(x){
    case 1 :
        console.log("rock");
        break;
    case 2 :
        console.log("paper");
        break;
    case 3 :
        console.log("scissors");
        break;
    default:
        console.log("not recognized")
    }

if ("rock" = x);
console.log("draw")