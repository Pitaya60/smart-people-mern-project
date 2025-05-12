const express = require('express');
const {
    postInitiative,
    getAllInitiatives,
    getSingleInitiative,
    updateInitiative,
    deleteInitiative
} = require('./initiative.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');

const router = express.Router();

// POST: создать инициативу
router.post("/create", verifyAdminToken, postInitiative);

// GET: получить все инициативы
router.get("/", getAllInitiatives);

// GET: получить одну инициативу по ID
router.get("/:id", getSingleInitiative);

// PUT: обновить инициативу
router.put("/edit/:id", verifyAdminToken, updateInitiative);

// DELETE: удалить инициативу
router.delete("/:id", verifyAdminToken, deleteInitiative);

module.exports = router;
