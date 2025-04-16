const express = require('express');
const router = express.Router();
const { handelCreateInfo,
    handelcreateInfoPage,
    handelLogout,
    handleDownloadPlant60Info,
    handleDownloadPlant63Info,
    handleDownloadPlant68Info,
    handleDownloadPlant58Info,
    handelSector68Info,
    handelSector60Info,
    handelSector63Info,
    handelSector58Info,
    handleDownloadProjectInfo,
} = require('../controllers/infio');
const {isLoggedIn} = require('../middlewares/auth');

router.post("/createInfo/:userid",  handelCreateInfo);

router.get("/createInfo", isLoggedIn, handelcreateInfoPage);

router.get("/logout", handelLogout);

router.get("/sector-60", handleDownloadPlant60Info);

router.get("/sector-63", handleDownloadPlant63Info);

router.get("/sector-68", handleDownloadPlant68Info);

router.get("/sector-58", handleDownloadPlant58Info);

router.get("/sector68Info", handelSector68Info);

router.get("/sector60Info", handelSector60Info);

router.get("/sector63Info", handelSector63Info);

router.get("/sector58Info", handelSector58Info);

router.get("/:plant/:project", handleDownloadProjectInfo);


module.exports = router;