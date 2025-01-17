const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  address: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Address', addressSchema);
