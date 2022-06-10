const express = require('express');
const router = express.Router();
const{getGoals} =require('./../controllers/goalController');
const{addGoal} =require('./../controllers/goalController');
const{updateGoal} =require('./../controllers/goalController');
const{deleteGoal} =require('./../controllers/goalController');

router.get('/', getGoals);

router.post('/', addGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router


