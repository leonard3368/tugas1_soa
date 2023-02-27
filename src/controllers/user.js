const Sequelize = require('sequelize')
const sequelize = require("../databases/connection")
const User = require('../models/user')(sequelize, Sequelize.DataTypes)

module.exports ={
  addUser: async (req, res)=>{
    let {
      username,
      password,
      nama,
      alamat,
      nomorhp
    } = req.body
    
    const newUser = await User.create({
      username: username, 
      password: password, 
      nama: nama,
      alamat: alamat,
      nomorhp: nomorhp
    })
    
    return res.status(201).send('user berhasil di add')
  },
  updateUser: async (req, res)=>{
    let {nama, alamat, nomorhp, oldpassword, newpassword} = req.body
    let {username} = req.params
    let finds = await User.findOne({
      where:{
        username: username
      }
    })

    if (finds.password != oldpassword){
      return res.status(400).send({
        message: "password lama tidak sesuai"
      })
    }

    User.update({
      nama: nama,
      alamat: alamat,
      nomorhp: nomorhp,
      password: newpassword
    },{
      where:{
        username: username
      }
    })

    return res.status(201).send({
      message: "user berhasil di update"
    })
  },
  
}
