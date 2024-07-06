import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { Example } from "../../entities/Example";

export const ExampleController = {
    async index(req: Request, res: Response) {
        const index = await Example.find({});
        return res.status(200).json(index);
    },

    async store(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const example = new Example();
        example.field = data.field;
        example.field2 = data.field2;

        const save = await example.save();

        return res.status(201).json(save);
    },

    async show(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const findById = await Example.findOneBy({ id: data.id });

        return res.json(findById);
    },

    async update(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const save = await Example.update(
            { id: data.id },
            {
                field: data.field,
                field2: data.field2,
            }
        );

        return res.status(200).json(save);
    },

    async delete(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const deleteById = await Example.delete({ id: data.id });

        return res.status(200).json(deleteById);
    },
};
