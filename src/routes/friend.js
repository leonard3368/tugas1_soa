const express  = require('express')
const router = express.Router()

const { addFriend, getFriend, deleteFriend } = require('../controllers/friend')

router.post("/", addFriend)
router.get("/:username", getFriend)
router.delete("/", deleteFriend)

module.exports = router