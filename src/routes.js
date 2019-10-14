import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  console.log('hello word')
})

module.exports = routes;