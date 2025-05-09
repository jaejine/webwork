// 코드순서 중요함 !!!!!!!!!!
const express = require("express");
// const cors = require('cors')
// const session = require('express-session');
// const fileStore = require('session-file-store')(session);

require("dotenv").config({path : "./database/mysql.env"})
const app = express(); // 인스턴스 생성
const port = 3000;

// const corsOptions = {
//   origin: 'http://localhost:5173',
//   optionsSuccessStatus: 200
// }

// app.use(cors());

// 미들웨어 중간부분
// app.use(session({
//   secret: '1234', //암호화하는 데 쓰일 키
//   resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
//   saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
//   cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
//     httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
//     secure: false, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
//     maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
//   },
//   store: new fileStore() // 세션 저장하는곳 = fileStore 사용
//   }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use("/board", require("./router/board"))
// app.use("/api/users", require("./router/users"))
// app.use("/api/customer", require("./router/customer"))
// app.use("/api/comment", require("./router/comment"))

// 라우트 설정
      // 엔드포인트 ("/")
app.get("/", (req,res)=>{
  res.send("hello");
});


// listen 마지막부분
app.listen(port, () => {
  console.log(`http://localhost:${port} 서버 실행됨`); 
});