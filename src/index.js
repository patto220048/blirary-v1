const path = require('path');
const express = require('express');
const morgan = require('morgan');

const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/trangchu', (req, res) => {
  res.render('trangchu');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})