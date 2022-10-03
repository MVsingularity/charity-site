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

  const charitiesId = "2"
  res.redirect('/charities/${charitiesId}')

});

app.get('/charities/:id', (req, res) => {
  console.log(req.params.id);

  res.render('charities-show', { charities } )
});
//edit
app.get('/charities/:id/edit', (req, res) => {

})

//update
app.put('/charities/:id', (req, res) => {

})
//destroy
app.delete('/charities/:id', (req, res) => {
  
})
app.listen(3000);
