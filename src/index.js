const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

const users = [];

app.get('/', (req, res) => res.status(200).json(users));

app.post('/', (req, res) => {
  const { body } = req;

  users.push(body);

  res.status(201).json({ message: 'New user added' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
