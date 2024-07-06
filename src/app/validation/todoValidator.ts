import { body, ValidationChain } from "express-validator";

export const storeTodoValidator: ValidationChain[] = [
    body("title")
        .isLength({ min: 1 })
        .withMessage("Title must be at least 1 characters long"),
    body("description")
        .isLength({ min: 1 })
        .withMessage("Description must be at least 1 characters long"),
    body("status").isBoolean().withMessage("Status must be Boolean Type"),
];
export const updateTodoValidator: ValidationChain[] = [
    body("title")
        .isLength({ min: 1 })
        .withMessage("Title must be at least 1 characters long"),
    body("description")
        .isLength({ min: 1 })
        .withMessage("Description must be at least 1 characters long"),
    body("status").isBoolean().withMessage("Status must be Boolean Type"),
];
