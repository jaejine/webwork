const express = require("express");
const router = express.Router();
const query = require('../mysql');

router.get('', async (req, res) =>{
  const result = await query("customer","selectList" , req.body)
  res.send(result);
});

//req.body , req.params , req.query , req.file 쓸수있음.
router.post("", async(req, res) => { 
  const result = await query('customer',"insertInfo", [req.body.name, req.body.email, req.body.phone]);
  res.send(result);
});

router.get("/:id", async(req, res) => { 
  const result = await query('customer',"selectById", req.params.id);
  res.send(result); 
});

router.put("/:id", async(req, res) => { 
  const result = await query('customer',"updateInfo", req.params);
  res.send(result);
});

router.delete("/:id", async(req, res) => { 
  const result = await query('customer',"deleteInfo", req.params);
  res.send(result);
});

module.exports = router;
