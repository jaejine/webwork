const express = require("express");
const router = express.Router();

// 로그인 정보
router.post("/info", (req,res)=>{
  res.send( {email : req.session.email})
})

// 로그인 login?email=aaa = (쿼리) login/??? = (param) ??.post = (body)
router.post("/login", (req, res)=>{
  const {email, pw} = req.body
  // 로그인 처리
  req.session.email = email;
  req.session.save(err=>{
    if(err) throw err;
    res.send({code: "success"});
  });
})

// 로그아웃
router.post("/logout", (req,res)=>{
  req.session.destroy();
  res.send("logout success");
})

module.exports = router;