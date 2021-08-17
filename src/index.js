const express = require('express')
const hbs=require('express-handlebars')
const path=require('path')
const route=require('./routes/index');
const db = require('./config/db')
db.connect()

var cookieParser = require('cookie-parser')

const app = express()
 
app.engine('.hbs', hbs({
  extname: '.hbs',
  helpers:{

  }
}))
app.set('view engine', '.hbs')
app.set('views',path.join(__dirname, './views'))

app.use(express.urlencoded({
  extended:true,
}))
app.use(cookieParser('tonduong'))


route(app);

app.listen(3000,function () {
    console.log('conected success');
})