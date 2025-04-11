
const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

router.get('/', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

router.post('/', async (req, res) => {
  const newDepartment = new Department(req.body);
  const saved = await newDepartment.save();
  res.json(saved);
});

router.put('/:id', async (req, res) => {
  const updated = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Department.findByIdAndDelete(req.params.id);
  res.json({ message: 'Department deleted' });
});

module.exports = router;
