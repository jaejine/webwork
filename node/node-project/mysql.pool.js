// mysql 모듈 로드
const mysql = require("mysql2");

// mysql 접속 정보
const conn = {
  connectionLimit : 10,
  host: "127.0.0.1",
  port: "3306",
  user: "hr",
  password: "Aadmin1234",
  database: "shop"
};
// DB 커넥션 pool 생성
let pool = mysql.createPool(conn);
