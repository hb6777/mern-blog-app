const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://hbcontract2002:MOjd3Wjw0qru0lsm@hb6777.s7sy4uy.mongodb.net/renee?retryWrites=true&w=majority')
    .then(()=>{console.log('DB is connected now ...!')})
    .catch((e)=>{console.log(e)});
 

// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// mongoose.connect('mongodb+srv://hbcontract2002:MOjd3Wjw0qru0lsm@hb6777.s7sy4uy.mongodb.net/')
// .then(() => console.log('Connected to MongoDB'))
// .catch((e) => console.log(e));