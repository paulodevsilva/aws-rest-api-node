const express = require('express');

const port = 80;

const app = express();

app.use(express.json());

const users = [];

app.get('/', (req, res) => res.status(200).json(users));

app.post('/', (req, res) => {
  const { body } = req;

  users.push(body);

  res.status(201).json({ message: 'New user added' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
