import { compare, hash } from "bcryptjs";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { matchedData, validationResult } from "express-validator";
import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";

dotenv.config();

export const AuthController = {
    async login(req: Request, res: Response) {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const data = matchedData(req);

        const findUser = await User.findOneBy({ email: data.email });

        if (!findUser) {
            return res
                .status(400)
                .json({ errors: "Email Credentials not Found" });
        }

        const passwordComparison = await compare(
            data.password,
            findUser.password
        );

        if (!passwordComparison) {
            return res.status(400).json({ errors: "Wrong Password" });
        }

        const jwtToken = sign(
            { email: findUser.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "2h" }
        );

        const updateToken = User.update(
            { id: findUser.id },
            {
                token: jwtToken,
            }
        );

        return res.status(200).json({ jwtToken });
    },

    async register(req: Request, res: Response) {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const data = matchedData(req);

        const user = new User();
        user.name = data.name;
        user.username = data.username;
        user.email = data.email;
        user.password = await hash(data.password, 10);

        const save = await user.save();

        return res.status(201).json(save);
    },
};
