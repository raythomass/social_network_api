const { connect, connection } = require('mongoose');

const connectionString = mongodb+srv://rthomas5678:GCULopes$17@cluster0.lbav8zq.mongodb.net/?retryWrites=true&w=majority;

connect(connectionString);

module.exports = connection;