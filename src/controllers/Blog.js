import Blogs from '../models/Blog.js';

// Create a new blog
const createBlog = async (req, res) => {
  const { body } = req;
  try {
    const blog = await Blogs.create(body);
    res.status(200).json({ data: blog, message: 'Blog created!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.status(200).json({ data: blog, message: 'Blog fetched!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a specific blog by ID
const updateBlogs = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(id);
  try {
    const blog = await Blogs.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200).json({ data: blog, message: 'Blog updated!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a specific blog by ID
const deleteBlogs = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blogs.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({ data: blog, message: 'Blog deleted!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const blogController = {
  createBlog,
  getBlogs,
  updateBlogs,
  deleteBlogs,
};

export default blogController;
