const express = require('express');
const { engine } = require('express-handlebars');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});
app.use("/images", express.static(path.join(__dirname, '/images')));

//charity page

//new
app.get('/charities/new', (req, res) => {
  res.render('charities-new', {});
})


//create
app.post('/charities', (req, res) => {
  console.log("success")

  const charityId = "2";
  res.redirect('/charities/${charityId}')

});
// show
app.get('/charities/:id', (req, res) => {
  console.log(req.params.id);

  res.render('charities-show', { charity })
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

//donor page
app.get('/donors/new', (req, res) => {
  res.render('donors-new', {});
})

//create
app.post('/donors', (req, res) => {
  console.log("success")

  const charityId = "2";
  res.redirect('/donors/${donorId}')

});
// show
//app.get('/donors/:id', (req, res) => {
//  console.log(req.params.id);

  //res.render('donors-show', { charity })
//});
//edit
//app.get('/donors/:id/edit', (req, res) => {

//})
//update
//app.put('/donors/:id', (req, res) => {

//})
//destroy
app.delete('/donors/:id', (req, res) => {

})
app.listen(3000);
