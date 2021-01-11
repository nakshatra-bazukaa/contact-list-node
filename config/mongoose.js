const mongoose = require('mongoose');

// Connect to the db
mongoose.connect('mongodb://localhost/contact_list_db');

// Aquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running 
db.once('open', () => {
    console.log('Successfully connected to the database');
})