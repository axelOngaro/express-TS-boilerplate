import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('coucou perruche de merde');
});

app.listen(3000, () => {
  console.log('Listenning on port 3000');
});
