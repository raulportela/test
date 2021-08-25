import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello')
})

const port = 3333;

app.listen(port, () => {
  console.log('O sistema esta rodando na porta 3333')
})