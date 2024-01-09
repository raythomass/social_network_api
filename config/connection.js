const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rthomas5678:GCULopes$17@cluster0.lbav8zq.mongodb.net/?retryWrites=true&w=majority');

module.exports = mongoose.connection;