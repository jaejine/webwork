// 정규 표현식 : ~ 로 시작하는 = ^ / ~ 로 끝나는 = &

let text = "Visit W3Schools test";
const exp = /Visit/i;
let n = text.search(exp);
console.log(n)

let bool = exp.test(text)
console.log(bool)

// 숫자 3자리만 ( - 범위 ) ( , 조건만 가능)
let numExp = /^[\S][\d]{2}$/ //0~9 까지 {몇글자까지가능한지}
let numText =' a11 '
bool = numExp.test(numText)
console.log('숫자표현',bool)