const getGoals = (req, res) => {
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn',
                description: 'Get/read Goals',
                completed: true
            }
        ] 
    });
}

module.exports = {  
    getGoals
};