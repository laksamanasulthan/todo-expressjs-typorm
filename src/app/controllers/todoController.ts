import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { Todo } from "../../entities/Todo";

export const TodoController = {
    async index(req: Request, res: Response) {
        const index = await Todo.find({});
        return res.status(200).json(index);
    },

    async store(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const example = new Todo();
        example.title = data.title;
        example.description = data.description;
        example.status = data.status;

        const save = await example.save();

        return res.status(201).json(save);
    },

    async show(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const findById = await Todo.findOneBy({ id: data.id });

        return res.status(200).json(findById);
    },

    async update(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const save = await Todo.update(
            { id: data.id },
            {
                title: data.title,
                description: data.description,
                status: data.status,
            }
        );

        return res.status(200).json(save);
    },

    async delete(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const deleteById = await Todo.delete({ id: data.id });

        return res.status(200).json(deleteById);
    },

    async status(req: Request, res: Response) {
        const error = validationResult(req);
        if (!error.isEmpty())
            return res.status(400).json({ errors: error.array() });

        const data = matchedData(req);

        const update = await Todo.update(
            { id: data.id },
            {
                status: data.status,
            }
        );

        return res.status(200).json(update);
    },
};
