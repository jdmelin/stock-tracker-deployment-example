const http = require('http');
const port = 8000;
var cors = require('cors');
const accountRouter = require('./routes/account');
const indexRouter = require('./routes');
const stockRouter = require('./routes/stocks');
const userRouter = require('./routes/users');
const express = require('express');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(accountRouter);
app.use(indexRouter);
app.use(stockRouter);
app.use(userRouter);

const server = http.createServer(app);

app.get('*', (req, res) => {
  res.redirect('/');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
