import * as express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('World');
});
export default router;