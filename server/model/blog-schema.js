const mongoose = require('mongoose')
const mySchema = mongoose.Schema;

const blogSchema = new mySchema({
    title:{type: String},
    description:{type:String},
    date:{type:Date,default:Date.now }
});

module.exports = mongoose.model("Blogger", blogSchema);
 


// const mongoose = require('mongoose');
// const mySchema = mongoose.Schema;

// const blogSchema = new mySchema({
//     title: {
//         type:String
//     },
//     description:{ 
//         type: String
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     } 
// })

// module.exports = mongoose.model("BlogModel",blogSchema);
