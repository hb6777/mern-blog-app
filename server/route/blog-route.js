const express = require('express');
const blogRouter = express.Router();

const {fetchListOfBlogs, addABlog, deleteABlog, updateABlog} = require('../controller/blog-controller');

blogRouter.get("/", fetchListOfBlogs); 
blogRouter.post("/add", addABlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

module.exports = blogRouter; 

// const express = require('express');
// const blogRouter = express.Router();

// const {fetchListOfBlogs,addABlog,deleteABlog,updateABlog} = require('../controller/blog-controller');

// blogRouter.get("/", fetchListOfBlogs);
// blogRouter.push("/add", addABlog);
// blogRouter.put("/update/:id", updateABlog);
// blogRouter.delete("/delete/:id",deleteABlog);

// module.exports = blogRouter;

