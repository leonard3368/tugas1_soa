const express  = require('express')
const router = express.Router()

const {addUser, updateUser} = require('../controllers/user')

router.post("/", addUser)
router.put("/:username", updateUser)

module.exports = router