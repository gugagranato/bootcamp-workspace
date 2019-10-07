const express = require('express');

const server = express();

server.use(express.json())

// Query Params = ?teste=1
// Route params = /user/1
// Request body = {" name: gustavo "}

const users = ["Guga", "Lorena", "Hércules"];

server.get('/users', (req, res) => {
  return res.json(users);
})


server.get('/users/:index', (req, res) => {
  const {index} = req.params;

  res.json(users[index])
})

// Criação do usuário
server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name)

  return res.json(users)
})
// Atualizar um usuário
server.put('/users/:index', (req, res) => {
  const {index} = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

// Deletar um usuário
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
})


server.listen
server.listen(3001)