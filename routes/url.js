const express=require('express');
const { Generateshort } = require("../controllers/url");

const router=express.Router();
router.post("/", Generateshort);
module.exports=router;