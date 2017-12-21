const http = require("http");
var express = require("express");
var app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, 'public')));




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use('/', require("./routes/main"));
/**
 * Any other routes return 404
 */


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(
    "To view your app, open this link in your browser: http://localhost:" + port
  );
});
