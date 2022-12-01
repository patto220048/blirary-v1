const path = require('path');
const express = require('express');

const methodOverride = require('method-override') 
const cookieParser = require('cookie-parser')
const cors = require('cors')
const docenv = require('dotenv').config();
const $ = require('jquery')

const paginate = require('handlebars-paginate');
const paginateHelper = require('express-handlebars-paginate');


const validator = require('validator');
const handlebars = require('express-handlebars');
const hbs = require('handlebars')
const app = express();
const port = process.env.PORT || 3000


const route = require('./routes');


const db = require('./config/db');
const { inflateRawSync } = require('zlib');
//conect bd
db.connect();

app.use(cookieParser())
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public')))
// methot [PUT] 
app.use(methodOverride('_method'))


const { restart } = require('nodemon');

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {sum: (a , b) => a + b},
   
    })
    

);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
route(app);
