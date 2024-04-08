import { Request, Response } from "express";
import { login, signup } from "./auth.service";

export const handle_signup = async (req: Request, res: Response) => {
    const { email, password, name, is_investor } = req.body;
    try {
        await signup(email, password, name, is_investor);
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const handle_login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await login(email, password);
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}