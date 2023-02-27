const Sequelize = require('sequelize')
const sequelize = require("../databases/connection")
const User = require('../models/user')(sequelize, Sequelize.DataTypes)

module.exports ={
  login: async (req, res)=>{
    let {username, password} = req.body

    if (username == "" || username == null){
      return res.status(400).send({
        message: "gagal login"
      })
    }

    let user = await User.findOne({
      where: {
        username: username
      }
    })
  
    if (user.password != password){
      return res.status(400).send({
        message: "gagal login"
      })
    }
    return res.status(201).send({
      message: "berhasil login"
    })
    
  }
}