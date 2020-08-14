import * as express from 'express';

import { checkToken } from '../../utils/routerMiddleware';

import helloRouter from './hello';
import userRouter from './users';
import clientInfoRouter from './clientInfo';
import siteInfoRouter from './siteInfo';

const router = express.Router();

router.use('/hello', helloRouter);
router.use('/users', userRouter);
router.use('/clientInfo', clientInfoRouter);
router.use('/siteIfo', siteInfoRouter);

export default router;