import * as express from "express";
import authRouter from './auth/authRouter'
const router = express.Router();

router.use('/auth',authRouter);

export default router