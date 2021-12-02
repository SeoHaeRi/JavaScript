//Set은 모든 타입의 값을 저장하는 객체자료형의 한 종류입니다. 이때 객체 안의 값은 중복을 허용하지 않습니다.
let s = new Set("abcdeeeeeeeee");
console.log(s);
console.log(s.size);

// Set에 값을 추가하기
s.add("f");
console.log(s);

// Set을 순환하기 -> 하나씩 출력
//1)
for (var variable of s) {
    console.log(variable);
}
//2)
s.forEach((i) => console.log(i));

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

// Set의 값을 제거하기
ss.delete("b");

// Set의 값을 확인하기
console.log(ss.has("a"));

// Set의 모든 값을 제거하기
ss.clear;
console.log(ss);

//ex2
let a = new Set("abc");
let b = new Set("cde");

//['c']
[...a].filter((value) => b.has(value));

//0
console.log(a | b);
console.log(a & b);

//Set(3) {'a', 'b', 'c'}[[Entries]]0: "a"1: "b"2: "c"size: 3[[Prototype]]: Set
console.log(a || b);

//Set(3) {'c', 'd', 'e'}
console.log(a && b);

// 합집합 (+...a : a 배열을 복사한 것)
let union = new Set([...a].concat(...b));
// 차집합
let dif = new Set([...a].filter((x) => !b.has(x)));

//Set(5) {'a', 'b', 'c', 'd', 'e'}
console.log(union);
//(6) ['a', 'b', 'c', 'c', 'd', 'e']
[...a, ...b];
