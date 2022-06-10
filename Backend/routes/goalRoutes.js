const express = require('express');
const router = express.Router();

router.get('/', ( req, res) =>{
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: 'Get/read Goals',
                completed: true
            }
        ] 
    });
});
router.post('/', ( req, res) =>{
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: 'Create goals',
                completed: true
            }
        ] 
    });
});
router.put('/:id', ( req, res) =>{
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: `Update goals ${req.params.id}`,
                completed: true
            }
        ] 
    });
});
router.delete('/:id', ( req, res) =>{
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: `Delete Goals ${req.params.id}`,
                completed: true
            }
        ] 
    });
});

module.exports = router


