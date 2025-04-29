const fs = require("fs");
// 동기, 블록킹 함수 ( 처리 끝나야지만 다음코드 넘어감 )
var text = fs.readFileSync("c:/temp/data.txt","UTF-8",);
console.log(text);
console.log("the end");