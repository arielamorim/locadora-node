const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    userPass: {
        type: String,
        required: true,
    },
    userAdmin: {
        type: Boolean,
        required: true,
    },
    userLogin: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;