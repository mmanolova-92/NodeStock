const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

// Set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routing
app.get('/', function (req, res) {
    res.render('home', {
      stuff: 'this is stuff'
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));
