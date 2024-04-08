import { Request, Response } from "express";
import { update } from "./user.service";

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