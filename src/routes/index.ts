import { Router } from "express";
import routerAnimes from "./routesAnimes.js";

const router = Router();

router.use('/',routerAnimes)

export default router;