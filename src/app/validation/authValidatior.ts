import { body, ValidationChain } from "express-validator";

export const loginValidator: ValidationChain[] = [
    body("email").isEmail().withMessage("Field Must Be Email"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Field Must Be At least 8 Characters Long"),
];

export const registerValidator: ValidationChain[] = [
    body("name")
        .isLength({ min: 1 })
        .withMessage("Name Must Contains Atleast 1 Chatacters Long"),
    body("username")
        .isLength({ min: 1 })
        .withMessage("Username Must Contains Atleast 1 Chatacters Long"),
    body("email").isEmail().withMessage("Field Must Be Email"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Field Must Be At least 8 Characters Long"),
];
