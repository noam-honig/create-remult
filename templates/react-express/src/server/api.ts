import { remultExpress } from "remult/remult-express";
import { entities } from "../shared/entities";

export const api = remultExpress({
  admin: true,
  entities: entities,
});
