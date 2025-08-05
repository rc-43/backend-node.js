
const express = require('express');
const showRoutes = require('./routes/showRoutes');

const app = express();
const PORT = 3000;

app.use('/api', showRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Central Perk ☕️');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
