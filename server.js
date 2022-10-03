const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

//donor page

//new
app.get('/charities/new', (req, res) => {
  res.render('charities-new', {});
})


//create
app.post('/charities', (req, res) => {
  console.log("success")
  res.redirect('/charities/${donorId}')

});

app.get('/charities/:id', (req, res) => {

});
//edit


//update

//destroy

app.listen(3000);
