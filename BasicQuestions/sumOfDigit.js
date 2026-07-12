// Sum of all digits
// -----------------------------

let n = 1324;

var sum = 0;

while(n > 0){
    var reminder = n%10;
    sum = sum + reminder;
    n = Math.floor(n/10);
}
console.log(sum);