// check prime number

let n = 13;

let isPrime = true;

for(let i = 2; i <=(Math.floor(n/2)) ; i++){
    if(n%i===0){
        isPrime = false;
        break;
    }
}
console.log(isPrime);