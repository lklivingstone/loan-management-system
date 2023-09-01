const mongoose = require('mongoose');

module.exports = async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
};