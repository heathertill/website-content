import * as express from 'express';

import { checkToken } from '../../utils/routerMiddleware';

import helloRouter from './hello';
import userRouter from './users';
import clientInfoRouter from './clientInfo';

const router = express.Router();

router.use('/hello', helloRouter);
router.use('/users', userRouter);
router.use('/clientInfo', clientInfoRouter);

export default router;