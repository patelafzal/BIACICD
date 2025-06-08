const app = require('./index');
const port = process.env.PORT || 3000;

// Serve API (and static frontend if you wish)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
