const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://kiran:KiranFassos@cluster0.gant3.mongodb.net/Fassos_project?retryWrites=true&w=majority")
}

module.exports = connect;