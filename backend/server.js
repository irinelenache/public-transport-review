const express = require('express')
const path = require('path');

const app = express()
app.use('/', express.static('frontend'))

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

//noted only -> will be distributed to controllers, routes

app.post('/user/create', (req, res) => {

})

app.put('/user/resetPass', (req, res) => {

})

app.post('/review/create', (req, res) => {

})

app.put('/review/modify/{idUser}/{idReview}', (req, res) => {

})

app.get('/review/listAll/{idUser}', (req, res) => {

})

app.delete('/review/{idReview}', (req, res) => {

})

app.get('/list?search={searchParam}', (req, res) => {

})

app.post('/user/create', (req, res) => {

})