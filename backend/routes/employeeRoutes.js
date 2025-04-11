
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  const employees = await Employee.find().populate('departmentId');
  res.json(employees);
});

router.post('/', async (req, res) => {
  const newEmployee = new Employee(req.body);
  const saved = await newEmployee.save();
  res.json(saved);
});

router.put('/:id', async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

module.exports = router;
