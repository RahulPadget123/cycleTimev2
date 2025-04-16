const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../middlewares/auth');
const {handelCreateUser,
    handelUserLoginPage,
    handelUserLogin,
} = require('../controllers/user');

router.post("/createUser/:adminId", handelCreateUser);

router.get("/userLogin", handelUserLoginPage);

router.post("/userLogin", handelUserLogin);

module.exports = router;
