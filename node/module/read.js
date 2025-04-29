const fs = require('fs')
// js는 모든함수가 기본적으로 비동기 지만
// Sync가 있다면 동기
fs.readFile("c:/temp/data.txt","UTF-8", function(err,data){
  console.log(data);
})
console.log("the end")