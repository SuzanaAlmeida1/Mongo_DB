import { Router, Response, Request } from "express";

// import userRoutes from "../../modules/User/routes";
// import authRoutes from "../../modules/Auth/routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.json("Api rodando corretamente");
});

export default routes;