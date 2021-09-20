(async () => {
  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('kaikeba', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  })

  //定义模型
  const Fruit = sequelize.define("Fruit", {
    name:{type: Sequelize.STRING(20), allowNull: false},
    price:{type: Sequelize.FLOAT, allowNull: false},
    stock:{type: Sequelize.INTEGER, defaultValue: false}
  })

  let ret = await Fruit.sync()

  ret = await Fruit.create({
    name: 'apple',
    price: 3.5
  })
})()
