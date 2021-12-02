//Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.
let m = new Map();

// Map에 값을 넣기
m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get("하나"));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has("하나"));

// Map의 값을 제거하기
console.log(m.delete("하나"));
console.log(m.has("하나"));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);

objMap = new Map();
objMap.set("one", 1);
objMap.set("two", 2);
objMap.set("three", 3);

console.log(objMap.size); // 3

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
console.log(obj.length); // undefined
console.log(obj.size); // undefined
