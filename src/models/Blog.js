import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
});

const Blogs = mongoose.model('blog', blogSchema);

export default Blogs;
