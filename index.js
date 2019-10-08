const express = require('express');

const server = express();

server.use(express.json())

// Query Params = ?teste=1
// Route params = /user/1
// Request body = {" name: gustavo "}

const users = ["Guga", "Lorena", "Hércules"];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`O Método chamado é: ${req.method}; e a Url é: ${req.url}`)
  
  next();
  console.timeEnd('Request');
})

const checkUserExist = (req, res, next) => {
  if(!req.body.name) {
    return res.status(400).json({ error: 'User name is required'});
  } 
    return next();
}

const chekUserIntoArray = (req, res, next) => {
  const { index } = req.params
  if(!users[index]) {
    return res.status(400).json({ error: 'User not existe into array'})
  }
  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})


server.get('/users/:index', chekUserIntoArray, (req, res) => {
  const {index} = req.params;

  res.json(users[index])
})

// Criação do usuário
server.post('/users', checkUserExist,  (req, res) => {
  const { name } = req.body;

  users.push(name)

  return res.json(users)
})
// Atualizar um usuário
server.put('/users/:index', checkUserExist, chekUserIntoArray, (req, res) => {
  const {index} = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

// Deletar um usuário
server.delete('/users/:index', chekUserIntoArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
})


server.listen
server.listen(3001)