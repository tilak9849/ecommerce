// models/user.js

const  Sequelize = require('sequelize');
const sequelize = require('../util/db'); // Adjust the path as per your file structure

const User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    // Define other attributes here
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // Add other fields as needed
}, {
    // Additional model options
});

module.exports = User;
