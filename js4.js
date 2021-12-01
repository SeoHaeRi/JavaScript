let temp = "5,4,10,2,5";
let arr = temp.split(",");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
}
let avg = parseFloat(sum / arr.length);

document.write(`평균: ${avg}`);
