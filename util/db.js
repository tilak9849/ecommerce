const Sequelize = require('sequelize')

const sequelize = new Sequelize('node_js','root','9849', {
    dialect:'mysql',
     host:'localhost'
    });

    module.exports = sequelize;