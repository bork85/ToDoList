import mongoose from "mongoose";

interface IToDo {
    task: string;
    finished?: boolean;
    createdAt?: Date;

}

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const ToDo = mongoose.model<IToDo>("Todo", todoSchema)

export default ToDo;