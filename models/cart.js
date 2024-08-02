const Sequelize = require('sequelize');

const sequelize = require('../util/db');
const Cart = sequelize.define('cart',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  UserId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Cart

// Cart.associate = (models) => {
//   Cart.belongsTo(models.User, {
//     foreignKey: 'UserId',
//     as: 'user',
//   });
// };


