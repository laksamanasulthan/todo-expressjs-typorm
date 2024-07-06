import { Express } from "express";
import passport from "../config/passport";
import authRoutes from "./authRoutes";
import exampleRoutes from "./exampleRoutes";
import todoRoutes from "./todoRoutes";

export const setupRouter = (app: Express) => {
    app.use("/auth/", authRoutes);
    app.use(
        "/api/example/",
        passport.authenticate("jwt", { session: false }),
        exampleRoutes
    );
    app.use(
        "/api/todo/",
        passport.authenticate("jwt", { session: false }),
        todoRoutes
    );
};
