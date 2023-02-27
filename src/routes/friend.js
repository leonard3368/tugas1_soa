const express  = require('express')
const router = express.Router()

const { addFriend, getFriend } = require('../controllers/friend')

router.post("/", addFriend)
router.get("/:username", getFriend)

module.exports = router