const express = require("express");
const { Router } = express();
const router = express.Router();
const routeHome = require("../controller/home");

router.get("/", routeHome.home);

module.exports = router;
