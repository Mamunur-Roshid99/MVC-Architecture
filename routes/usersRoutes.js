const express = require('express');
const { getUsers, saveUsers } = require('../controllers/usersControllers');

const router = express.Router()

router.get("/users", getUsers);

router.post("/users", saveUsers);

module.exports = router