// Importiamo express
const express = require('express');

// Inizializziamo express invocandolo come una funzione
const app = express();
const port = 3000;

// Array della risposta
const posts = [
  {
    titolo: "Torta Paesana",
    contenuto: "Torta",
    immagine: "http://localhost:3000/images/torta_paesana.jpeg",
    tags: ["torta", "dolci", "cioccolato"]
  },
  {
    titolo: "Pasta Barbabietola",
    contenuto: "Pasta",
    immagine: "http://localhost:3000/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "primo", "pranzo"]
  },
  {
    titolo: "Pane Fritto",
    contenuto: "Pane",
    immagine: "http://localhost:3000/images/pane_fritto_dolce.jpeg",
    tags: ["pane", "dolce", "fritto"]
  },
  {
    titolo: "Cracker Barbabietola",
    contenuto: "Cracker",
    immagine: "http://localhost:3000/images/cracker_barbabietola.jpeg",
    tags: ["cracker", "snack", "salato"]
  },
  {
    titolo: "Ciambellone",
    contenuto: "Ciambella",
    immagine: "http://localhost:3000/images/ciambellone.jpeg",
    tags: ["torta", "dolci", "zucchero"]
  },
];


app.use('/images', express.static('public/images'));

// Rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// Rotta per la bacheca
app.get('/bacheca', (req, res) => {
  res.json({
    count: posts.length,
    posts: posts,
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`sono in ascolto sulla porta ${port}`);
});