const path = require('path');
const express = require('express');
const PORT = 5000;
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
const listener = app.listen(PORT, () => {
  console.log(`WebApps Running On http://localhost:${PORT}`);
});