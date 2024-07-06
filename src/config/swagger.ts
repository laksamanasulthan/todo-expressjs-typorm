import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { env } from "../env";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            version: "1.0.0",
            description:
                "This is a simple Boilerplate API made with Express and documented with Swagger",
        },
        servers: [
            {
                url: `http://localhost:${env.APP_PORT}`,
                description: "API Endpoint",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/*.ts"], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
};
