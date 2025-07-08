// routes/topics.js
const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Get all topics
router.get('/', async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
});

// Add a new topic
router.post('/', async (req, res) => {
  const topic = new Topic(req.body);
  await topic.save();
  res.json(topic);
});

// Update a topic
router.put('/:id', async (req, res) => {
  const updated = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a topic
router.delete('/:id', async (req, res) => {
  await Topic.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
