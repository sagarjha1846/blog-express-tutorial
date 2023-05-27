import { Router } from 'express';
import blogController from '../controllers/Blog.js';

const router = Router();

// Get all blogs
router.get('/', blogController.getBlogs);

// Create a new blog
router.post('/', blogController.createBlog);

// Update a specific blog by ID
router.patch('/:id', blogController.updateBlogs);

// Delete a specific blog by ID
router.delete('/:id', blogController.deleteBlogs);

export default router;
