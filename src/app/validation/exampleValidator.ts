import { ValidationChain, body } from "express-validator";

export const exampleValidator: ValidationChain[] = [
    body("field")
        .isLength({ min: 2 })
        .withMessage("Field must be at least 2 characters long"),
    body("field2")
        .isLength({ min: 2 })
        .withMessage("Field2 must be at least 6 characters long"),
];
