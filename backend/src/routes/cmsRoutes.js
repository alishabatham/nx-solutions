import { Router } from 'express';
import { getPageContent, updatePageContent, adminLogin } from '../controllers/cmsController.js';

const router = Router();

// Public route to fetch content
router.get('/:pageKey', getPageContent);

// Admin authentication & update routes
router.post('/login', adminLogin);
router.post('/:pageKey', updatePageContent);

export default router;
