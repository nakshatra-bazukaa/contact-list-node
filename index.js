const express = require('express');
const path = require('path');

const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express();

// To select view engine
app.set('view engine", "ejs');
// To setup views folder for rendering
app.set('views', path.join(__dirname, 'views'));
// To parse the objects
app.use(express.urlencoded());
// To use css, js, images etc from the assets i.e static content
app.use(express.static('assets'));

app.get('/', (req, res) => {
    Contact.find({}, (err, contacts) => {
        if(err)
            console.log('Error in fetching contacts from db');
        else
            return res.render('home.ejs', {
                title: 'My Contacts List',
                contact_list: contacts
            });
    })
})

app.post('/create-contact', (req, res) => {
    Contact.create(req.body, (err, newContact) => {
        if(err)
            console.log('error in creating a contact!');
        else
            console.log('***********', newContact);

        return res.redirect('back');
    })
});

app.get('/delete-contact/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id, (err) => {
        if(err)
            console.log('error in deleting an object i the db');
        return res.redirect('back');
    });
    
})

app.listen(port, err => {
    if(err) 
        console.log('Error encountered while running the server', err);
    else
        console.log('Server is running fine');
})