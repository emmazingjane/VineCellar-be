const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WinerySchema = new Schema({
    name: String, 
    address: String,
    website: String,
    your_rating: String,
    photo: String,
    tasting_info: [String],
    wiine_list: [String],
    reservation: boolean,

  });