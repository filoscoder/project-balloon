var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    room_id: String,
    users: [String],
    messages: [{
        user: String,
        message: String,
        date: Date
    }]
});

module.exports = mongoose.model('chat', chatSchema);