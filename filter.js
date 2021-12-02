// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

//ex2
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];
console.log(x.filter((y) => y > 5));

//ex3
let 회원정보 = [
    {
        아이디: "jjang",
        패스워드:
            "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
        성별: "남",
        휴대폰번호: "010-5004-0000",
        이메일: "hojun1@gmail.com",
        가입연도: "2021-12-02",
        주접속위치: "125.242.161.149",
    },
    {
        아이디: "jjang2",
        패스워드:
            "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
        성별: "남",
        휴대폰번호: "010-5004-0000",
        이메일: "hojun2@gmail.com",
        가입연도: "2020-12-02",
        주접속위치: "125.242.161.149",
    },
    {
        아이디: "jjang3",
        패스워드:
            "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
        성별: "여",
        휴대폰번호: "010-5004-0000",
        이메일: "hojun3@gmail.com",
        가입연도: "2021-12-02",
        주접속위치: "125.242.161.149",
    },
    {
        아이디: "jjang4",
        패스워드:
            "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
        성별: "여",
        휴대폰번호: "010-5004-0000",
        이메일: "hojun4@gmail.com",
        가입연도: "2020-12-02",
        주접속위치: "125.242.161.149",
    },
];

//1번 남자인 사람
console.log(회원정보.filter((e1) => e1.성별 === "남"));

//2번 남자이면서 2021년도에 가입하신 분
console.log(
    회원정보.filter(
        (e1) => e1.성별 === "남" && e1.가입연도.split("-")[0] === "2021"
    )
);

//ex4
// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [
    {
        id: 1,
        title: "title1",
        content: "content1",
        section: "일상",
    },
    {
        id: 2,
        title: "title2",
        content: "content2",
        section: "개발",
    },
    {
        id: 3,
        title: "title3",
        content: "content3",
        section: "취미",
    },
];

//s = '' 이면 전부 다 나옴
let s = "취미";
let data = s ? blogs.filter((b) => b.section === s) : "일상 or 개발";

//find는 찾으면 멈추고 filter는 만족하는거 다 찾음 -> 중복되지 않는 값은 find로 찾기
