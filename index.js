const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

// To select view engine
app.set('view engine", "ejs');
// To setup views folder for rendering
app.set('views', path.join(__dirname, 'views'));
// To parse the objects
app.use(express.urlencoded());
// To use css, js, images etc from the assets i.e static content
app.use(express.static('assets'));

const contact_list = []

app.get('/', (req, res) => {
    return res.render('home.ejs', {
        title: 'My Contacts List',
        contact_list: contact_list
    });
})

app.post('/create-contact', (req, res) => {
    contact_list.push(req.body);
    return res.redirect('/');
});

app.listen(port, err => {
    if(err) 
        console.log('Error encountered while running the server', err);
    else
        console.log('Server is running fine');
})