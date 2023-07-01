import express from "express";
import swaggerDocs from './swagger.json';
import { router } from "./routes";
const swaggerUi = require('swagger-ui-express');
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get("/terms", (request, response) => {
  return response.json({
    message: "Service Terms",
  });
});
app.use("/v1", router);
app.listen(3000, () => console.log("Server is running on port 3000"));
