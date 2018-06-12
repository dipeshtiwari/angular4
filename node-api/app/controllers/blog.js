var Blog = require('../models/blog');

//get
exports.getBlogList = function(req, res, next) {
    Blog.find({}, function(err, blog) {
        if (err)
            return next(err);
        res.json(blog);
    });
}

//post
exports.createBlog = function(req, res, next) {
    var newBlog = new Blog(req.body);
    newBlog.save(function(err) {
        if (err)
            return next(err);
        res.json({
            message: 'Blog created.'
        });
    });
}

//put
exports.updateBlog = function(req, res, next) {
    Blog.findById(req.params.blog_id, function(err, blog) {
        if (err) {
            res.status(500).json(err);
        } else {
            blog.title = req.body.title
            blog.save(function(err) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json({ message: 'Blog updated!' });
                }
            });
        }
    });
}

//delete
exports.deleteBlog = function(req, res, next) {
    Blog.remove({
        _id: req.params.blog_id
    }, function(err, blog) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json({ message: 'Blog deleted Successfully.' });
        }
    });
}