// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map((x) => x * 2);
//arrow function 사용

function 제곱(x) {
    return x ** 2;
}

let 값2 = array.map(제곱);

//json
let data = [
    {
        반: 1,
        번: 1,
        이름: "호준",
        중간고사점수: 55,
    },
    {
        반: 1,
        번: 2,
        이름: "길동",
        중간고사점수: 60,
    },
    {
        반: 1,
        번: 3,
        이름: "영희",
        중간고사점수: 30,
    },
    {
        반: 1,
        번: 4,
        이름: "철수",
        중간고사점수: 20,
    },
    {
        반: 1,
        번: 5,
        이름: "규리",
        중간고사점수: 100,
    },
];

console.log(data.map((x) => x.중간고사점수));
console.log(data.map((x) => [x.이름, x.중간고사점수]));

//점수 합
let sum = 0;
console.log(data.map((x) => x.중간고사점수).forEach((y) => (sum += y)));

// let array = [1, 2, 3, 4]
// let result = []
// function 제곱(x) {
//     return x ** 2
// }

// array.forEach(x => result.push(x**2));
// undefined
// result
// (4) [1, 4, 9, 16]

/*
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
undefined
let newData = data.map(a => a.map(n => n *2));
*/
