const http = require('http');
const cors = require('cors');
const accountRouter = require('./routes/account');
const indexRouter = require('./routes');
const stockRouter = require('./routes/stocks');
const userRouter = require('./routes/users');
const express = require('express');
const app = express();
require('dotenv').config({
  path: '../.env',
});
const port = process.env.PORT;
const path = require('path');

app.use(cors());
app.use(express.json());

let staticPath = '../client/public';

if (process.env.NODE_ENV === 'production') {
  staticPath = '../client/build';
}
app.use(express.static(path.join(__dirname, staticPath)))

app.use(accountRouter);
app.use(indexRouter);
app.use(stockRouter);
app.use(userRouter);

const server = http.createServer(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, staticPath, 'index.html'));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
