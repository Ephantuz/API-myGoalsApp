const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes'));





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


