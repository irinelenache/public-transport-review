const express = require("express")
const path = require('path');
const bodyParser = require('body-parser');

const user = require('./routes/user');
const review = require('./routes/review');


const app = express()
//app.use('/', express.static('frontend'))


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/../frontend/index.html'));
// });
const router = require('./routes/index.js')
app.use('/', router)
