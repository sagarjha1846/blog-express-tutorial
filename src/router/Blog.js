import { Router } from 'express';
import blogController from '../controllers/Blog.js';

const router = Router();

router.get('/', blogController.getBlogs);
router.post('/', blogController.createBlog);
router.patch('/:id', blogController.updateBlogs);
router.delete('/:id', blogController.deleteBlogs);

export default router;
