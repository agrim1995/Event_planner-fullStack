module.exports = {
    HOST: 'localhost',
    USER: 'root',
    password: '',
    DB: 'event_planner',
    dialect: 'mysql',

}












// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',     // Replace with your database host
//     user: 'root',          // Replace with your database username
//     password: '',          // Replace with your database password
//     database: 'event_planner', // Replace with your database name (removed extra space)
//     dialect: 'mysql',
// });

// console.log('Attempting to connect to the database...');

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err.message);
//         return;
//     }
//     console.log('Database connection successful!');
// });

// console.log('This message should appear after attempting to connect.');

// Export the connection for use in other parts of the app
// module.exports = connection;
