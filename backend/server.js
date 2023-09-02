const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbClient = require('./utils/database');
const errorHandler = require('./middleware/error-handler');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB Atlas
dbClient.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
    process.exit(1);
  }
  console.log('Connected to MongoDB Atlas');
});

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  req.db = dbClient.db('Website');
  next();
});
app.use('/auth', authRoutes);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
