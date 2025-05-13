const express = require("express");
const router = express.Router();
const stdController = require("../Controllers/studentController");
const bbaController = require("../Controllers/showController");

router.get("/MCA", bbaController.MCA);
router.get("/BCA", bbaController.BCA);
router.get("/BBA", bbaController.BBA);
router.get("/MBA", bbaController.MBA);
router.post("/student/add", stdController.add);

module.exports = router;
