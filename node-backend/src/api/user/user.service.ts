import database from "../../loaders/database";

export const update = async (email: string, data: any) => {
    const user_collection = await (await database()).collection("users");
    const user = await user_collection.findOne({ email: email });
    if (!user) {
        throw new Error("User not found");
    }
    await user_collection.updateOne({ email: email }, { $set: data });
};

export const get_user = async (email: string) => {
    const user_collection = await (await database()).collection("users");
    const user = await user_collection.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}