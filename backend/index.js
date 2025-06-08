const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ status: 'Working fine' });
  });

// Health endpoint for CI tests
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
