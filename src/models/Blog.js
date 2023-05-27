import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define the blog schema
const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
});

// Create the 'Blogs' model based on the blog schema
const Blogs = mongoose.model('blog', blogSchema);

export default Blogs;
