const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const compainesController = require('../controllers/companies');

// Handle incoming GET requests to /compaines
router.get("/", checkAuth, CompaniesController.companies_get_all);

router.post("/", checkAuth, compainesController.companies_create_company);

router.get("/:companyId", checkAuth, compainesController.compaines_get_company);

router.delete("/:companyId", checkAuth, compainesController.compaines_delete_company);

module.exports = router;
