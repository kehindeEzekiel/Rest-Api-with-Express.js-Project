const express = require('express');
const itemsRoutes = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/items', itemsRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Invalid route handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
