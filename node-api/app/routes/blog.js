// load the blog model
var Blog = require('../controllers/blog');
// expose the routes to our app with module.exports
module.exports = function(router) {
    // api ---------------------------------------------------------------------
    // get all blogs
    router.get('/getbloglist', Blog.getBlogList);

    router.put('/updateBlog/:blog_id', Blog.updateBlog)
    
    router.post('/createblog', Blog.createBlog);

    router.delete('/deleteBlog/:blog_id', Blog.deleteBlog);
};