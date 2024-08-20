const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usrSchema = new Schema({

    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    pass: {
        type: String,
        require: true
    }
},{ timestamps: true });

const User = mongoose.model("info_users2", usrSchema);

module.exports = User;