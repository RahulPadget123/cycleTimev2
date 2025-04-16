const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin'
    },
    info: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'info'
        }
    ]
});

module.exports = mongoose.model("user", userSchema);