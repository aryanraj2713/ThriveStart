import { Request, Response } from "express";
import { get_user, update } from "./user.service";

export const update_handle = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const data = req.body;
        await update(email, data);
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const handle_get_user = async (request: Request, response: Response) => {
    try {
        const { email } = request.params;
        const data = await get_user(email);
        response.status(200).json({ data })
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}