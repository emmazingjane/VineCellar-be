const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/3090');

const UserModel = require('./User');
const WineryModel = require('./Winery');

module.exports = {
    User: UserModel,
    Winery: WineryModel
}