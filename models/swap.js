var mongoose = require('mongoose');

var swapSchema = mongoose.Schema({
    owner: { type: String, required: true },
    requester: { type: String, required: true },
    owner_album: { type: Number, required: true },
    requester_album: { type: String },
    createdAt: { type: Date, default: Date.now },
    state: { type: String, default: 'active' }
});

module.exports = mongoose.model('Swap', swapSchema);
