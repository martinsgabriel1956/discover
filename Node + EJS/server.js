import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa Javascript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'morzinho '
    },
    {
      title: 'I',
      message: 'nstall ejs'
    },
    {
      title: 'S',
      message: 'intaxe simples'
    }
  ];

  const subtitle = "Uma linguagem de modelagem para a criação de página HTML utilizando Javascript."
  res.render('pages/index', { items, subtitle })
});
app.get('/about', (req, res) => res.render('pages/about'));

app.listen(8080);
console.log('Servidor iniciado 🚀');