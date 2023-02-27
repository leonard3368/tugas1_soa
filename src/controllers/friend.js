const Sequelize = require('sequelize')
const sequelize = require("../databases/connection")
const User = require('../models/user')(sequelize, Sequelize.DataTypes)
const Friend = require('../models/friend')(sequelize, Sequelize.DataTypes)

module.exports ={
  addFriend: async (req, res)=>{
    let {username, password, usercari} = req.body

    let user = await User.findOne({
      where: {
        username: username
      }
    })
    if (!user){
      return res.status(400).send({
        message: "gagal tambah teman"
      })
    }
    if (user.password != password){
      return res.status(400).send({
        message: "gagal tambah teman"
      })
    }

    let friend = await User.findOne({
      where:{
        username: usercari
      }
    })
    if (!friend){
      return res.status(400).send({
        message: "gagal tambah teman"
      })
    }
    
    await Friend.create({
      person_id: user.id,
      friend_id: friend.id
    })

    return res.send({
      message: "berhasil tambah teman"
    })
  },
  getFriend: async (req, res)=>{
    let {username} = req.params
    let user = await User.findOne({
      where: {
        username: username
      }
    })
    let friends = await Friend.findAll({
      person_id: user.id
    })
    let result = []
    const promises = friends.map(async object => {
      let friend = object.dataValues
      
      let user = await User.findByPk(friend.person_id)
      console.log(user.dataValues)
      let key = user.dataValues.username
      result[key] = {
        nama: user.dataValues.nama,
        alamat: user.dataValues.alamat,
        nomorhp: user.dataValues.nomorhp
      }
      return true
    });
    await Promise.all(promises)
    console.log(result)
    return res.send({
      ...result
    })
  }
}