import Express, { Application } from "express";
import BaseRoutes from "./BaseRoutes";
import {mongoDB} from "../database"

type SetupOptions = {
  isTest?: boolean;
  port?: number;
};
export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {
    mongoDB.createConection();
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);

    //mySqlConection.hasConection();

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.log(`Servidor rodando na porta: ${selectedPort}`)
    );
  }

  getInstance() {
    return this.instance;
  }
}
