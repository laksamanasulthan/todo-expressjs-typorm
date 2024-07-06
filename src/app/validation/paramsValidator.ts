import { ValidationChain, param } from "express-validator";


export const idValidator: ValidationChain[] = [
    param('id').isNumeric().withMessage('ID must be number')
];