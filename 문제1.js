let sum = 0;

for (let x = 1; x < 1000; x++) {
    if (x % 3 == 0) {
        sum += x;
    } else if (x % 5 == 0) {
        sum += x;
    }

    if (x % 3 == 0 && x % 5 == 0) {
        sum -= x;
    }
}

console.log(sum);

/*
'0' == 0
true
0 == ''
true
0 == '0'
true
false == 'false'
false
false == '0'
true
false == null
false
false == undefined
false
false == NaN
false
!!null
false
!!undefined
false
!!NaN
false
*/
