const Blog = require("../models/blog");


const blog_index = (req, res) => {

    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
     res.render("index", {title: "Blogs", blogs: result});
    })
    .catch((err) => {
     console.log(err)
    });

}

const blog_details = (req, res) => {

    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
    .then((result) => res.render("details", {blog: result, title: "Blog details" }))
    .catch((err) => { res.status(404).render("404", {title: "404-NotFound"})});

}

const blog_creat_get = (req, res) => {

    res.render("create", {title: "Create New Blog"});

}

const blog_creat_post = (req, res) => {

    const blog = new Blog(req.body);
    console.log(req.body);
 
    blog.save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => console.log(err));

}

const blog_delet = (req, res) => {

    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err))


}



module.exports = {

    blog_index,
    blog_details,
    blog_creat_get,
    blog_creat_post,
    blog_delet

}