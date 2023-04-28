let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const H = parseInt(input[0]);  // 시
const M = parseInt(input[1]);  // 분


// let H = 10;
// let M = 10; 

if (M >= 45){
    M = M-45;
} else if ( 1 <= H <= 23 && M < 45) {
    H = H-1;
    M = 60 - (45 - M); 
} else if (H == 0 && M < 45){
    H = 23;
    M = 60 - (45 - M);
}
console.log(H, M);