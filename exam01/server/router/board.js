const express = require("express");
const router = express.Router();
const query = require('../database/mapper.js');

router.get('', async (req, res) => {
  try {
    const result = await query("board", "selectList", {});
    res.send(result);
  } catch (err) {
    console.error("Error in GET /board:", err);  // 서버 콘솔에 에러 출력
    res.status(500).send({ error: "Internal Server Error" });  // 클라이언트에 에러 응답
  }
});

//req.body , req.params , req.query , req.file 쓸수있음.
router.post("", async(req, res) => { 
  const result = await query('board',"insertInfo", [req.body.title, req.body.writer, req.body.content]);
  res.send(result);
});

router.get("/:id", async(req, res) => { 
  const result = await query('board',"selectById", req.params.id);
  res.send(result); 
});

router.put("/:id", async(req, res) => { 
  const result = await query('board',"updateInfo", [req.body,req.params.id]);
  res.send(result);
});

router.delete("/:id", async(req, res) => { 
  const result = await query('board',"deleteInfo", req.params.id);
  res.send(result);
});

module.exports = router;
