const express = require('express');
const router = express.Router();
const {handelMainPage,
    handelAdminPage,
    handelAdminLogin,
} =  require('../controllers/admin');

router.get("/", handelMainPage);

router.get("/adminLogin", handelAdminPage);

router.post("/adminLogin", handelAdminLogin);

module.exports = router;