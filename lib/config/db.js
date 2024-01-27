import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://karan4342:karan4342@cluster0.ih8empu.mongodb.net/Todo-App')
    console.log("DB Connected");
}

