const express = require('express');
const path = require('path');

const port = 8000;

const app = express();

app.set('view engine", "ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

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