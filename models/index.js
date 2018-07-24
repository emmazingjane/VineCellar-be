const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/3001');

const UserModel = require('./User');
const WineryModel = require('./Winery');

module.exports = {
    User: UserModel,
    Winery: WineryModel
}