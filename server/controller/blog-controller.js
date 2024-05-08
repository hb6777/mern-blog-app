const mongoose = require('mongoose');
const blogschema = require('../model/blog-schema');

const fetchListOfBlogs = async(req,res) => {

    let blogList;
    try{

        blogList = await blogschema.find();

        if (!blogList){
            return res.send(404).json({message: "No result found!"});
        }

        return res.status(200).json({blogList});

    }catch(e){
        console.log(e);
        return res.status(500).json({message: "Error while fetching data..."})
    }

};
 
const addABlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreateBlog = new blogschema({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlyCreateBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }

  return res.status(200).json({ newlyCreateBlog });
};

const deleteABlog = async(req,res) => {
    const id = req.params.id;
    let findDeleteId;

    try{
         findDeleteId = await blogschema.findByIdAndDelete(id); 

        if(!findDeleteId){
            return res.status(404).json({message: "Blog is not found!"});
        } 
    }catch(e){
        return res.status(500).json({ message: `Error! ${e}` });
    }
    return res.status(200).json({message : `Blog #${id} is deleted!`});
};
 
const updateABlog = async(req,res)=>{

    const id = req.params.id;
    const {title, description, date} = req.body;
    let updateBlog;
    try{ 

         updateBlog = await blogschema.findByIdAndUpdate(id, {title: title, description: description, date: date});

        if(!updateBlog){
            return res.status(500).json({ message: `Cannot find Blog to Update! ${e}` });
        } 
    }catch(e){
        return res.status(500).json({ message: `Error on Update! ${e}` });
    }
    return res.status(200).json({message: `updated Blog! ${title}-${description}` , updateBlog});
};

module.exports = {fetchListOfBlogs,addABlog,deleteABlog,updateABlog};


// const mongoose = require('mongoose');
// const blogschema = require('../model/blog-schema')

// // fetch list of blogs
// // add a blog
// // update a blog
// // delete a blog

// const fetchListOfBlogs = async (req, res) => {

//     let bloglist;

//     try {

//         bloglist = await blogschema.find();

//         if (!bloglist) {
//             return res.status(404).json({ message: 'No blogs found.' });
//         }

//         return res.status(200).json({ bloglist });

//     } catch (e) {
//         console.log(e);
//     }
// };

// const addABlog = async (req, res) => {

//     const { title, description } = req.body;
//     const currentDate = new Date.now();

//     const newlycreatedblog = new blogschema({
//         title, description, date: currentDate
//     });

//     // save the data to model
//     try {
//         await newlycreatedblog.save();
//     } catch (e) {
//         console.log(e);
//     }

//     // pass to session
//     try {
//         const session = await mongoose.startSession();
//         session.startTransaction();
//         await newlycreatedblog.save(session);
//         session.commitTransaction();

//     } catch (e) {
//         return res.send(500).json({ message: e })
//     }
//     return res.status(200).json({ newlycreatedblog });
// };

// const deleteABlog = async (req, res) => {

//     const id = req.params.id;

//     try {
//         const findDeleteId = await blogschema.findByIdAndDelete(id);

//         if (!findDeleteId) {
//             return res.status(404).json({ message: 'Cannot find blog to delete.' });
//         }

//         return res.status(200).json({ message: `Blog #${id} deleted successfully.` });
//     } catch (e) {
//         return res.status(500).json({ message: `Error! ${e}` });
//     }
// };

// const updateABlog = async (req, res) => {
//     const id = req.params.id;

//     try {
//         let updatecurrentblog;

//         updatecurrentblog = await blogschema.findByIdAndUpdate(id);

//         if (!updatecurrentblog) {
//             return res.send(500).json({ message: "Nothing to update." })
//         }

//     } catch (e) {
//         return res.status(500).json({ message: "Something went wrong and cannot update. Please try again later." })
//     }

//     return res.status(200).json({ updatecurrentblog });
// };

// module.exports = { fetchListOfBlogs, addABlog, deleteABlog, updateABlog };
