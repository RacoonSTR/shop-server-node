import mongoose = require('mongoose');

const uri = "mongodb+srv://dbUser:10293847@secluster.hwozn.mongodb.net/shop?retryWrites=true&w=majority";

export function connect() {
    return mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
        console.log('Connection to MongoDB succesfull!');
    }, (err) => {
        console.error('Error creating a mongoose connection', err);
    });
}
