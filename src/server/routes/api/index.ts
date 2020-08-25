import * as express from 'express';

import { checkToken } from '../../utils/routerMiddleware';

import helloRouter from './hello';
import userRouter from './users';
import clientInfoRouter from './clientInfo';
import siteInfoRouter from './siteInfo';
import brandInfoRouter from './brandInfo';
import styleInfoRouter from './styleInfo';
import landingInfoRouter from './landingInfo';

const router = express.Router();

router.use('/hello', helloRouter);
router.use('/users', userRouter);
router.use('/clientInfo', clientInfoRouter);
router.use('/siteInfo', siteInfoRouter);
router.use('/brandInfo', brandInfoRouter);
router.use('/styleInfo', styleInfoRouter);
router.use('/landingInfo', landingInfoRouter);

export default router;