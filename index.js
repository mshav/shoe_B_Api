const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

const Models = require('./models');

const mongoUrl = process.env.MONGO_DB_URL || 'mongodb://localhost/shoe_api';
const models = Models(mongoUrl);
const ShoeRoute = require('./api');
const shoeRoutes = ShoeRoute(models);


var app = express();
app.use(express.static('public'))

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  }
}));

app.get("/api/shoe", shoeRoutes.home)
app.get("/api/shoe/brand/:brandname",shoeRoutes.home)
app.get("/api/shoe/size/:size"	,shoeRoutes.home)
app.get('/api/shoe/brand/:brandname/size/:size',shoeRoutes.home)
app.post("/api/shoe",shoeRoutes.add);



var port = process.env.PORT|| 3001;
app.listen(port, function() {


  console.log('Example app listening at http://%s:%s, ' + port);

});
