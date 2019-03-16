const express = require("express");
const router = express.Router();

//@access : public
router.get("/test", (req, res) => res.json({ msg: "profile works properly" }));

module.exports = router;
