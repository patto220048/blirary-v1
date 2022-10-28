const path = require('path');
const express = require('express');
const morgan = require('morgan');

const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


const route = require('./routes');



const db = require('./config/db');
//conect bd
db.connect();


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
route(app);
