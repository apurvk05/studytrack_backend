// models/Topic.js
const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  notes: { type: String, default: '' }
});

module.exports = mongoose.model('Topic', TopicSchema);
