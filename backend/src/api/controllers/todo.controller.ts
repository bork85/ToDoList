import {Request, Response} from 'express'
import Todo from '../models/todo'

class TodoController {
    async getAllToDos(_req: Request, res: Response) {
        try {
            const toDos = await Todo.find()
            return res.status(200).json(toDos).send()
        } catch (error) {
            console.log(error)
            return res.status(500).send("Server Error")
        }
    }

    async createToDo(req: Request, res: Response){
        try {
            const {task} = req.body;

            if(!task) {
                return res.status(400).json({error: "Task is required!"}).send()
            }
            const newToDo = new Todo({task})
            await newToDo.save()
            
            return res.status(201).json({message: "To-Do created successfully!", newToDo}).send()
        } catch (error) {
            console.log(error)
            return res.status(500).send("Server Error")
        }
    }

    async updateToDo(req: Request, res: Response){
        try {
            const {id} = req.params;
            const {finished} = req.body;

            const toDo = await Todo.findByIdAndUpdate(id, {
                finished
            })

            if(!toDo) {
                return res.status(400).json({error: "Task not found!"}).send()
            }
            toDo.finished = finished
            return res.status(200).json({message: "Task updated successfully!", toDo}).send()
        } catch (error) {
            console.log(error)
            return res.status(500).send("Server Error")
        }
    }

    async deleteToDo(req: Request, res: Response){
        try {
            const {id} = req.params;

            const toDo = await Todo.findByIdAndDelete(id)

            if(!toDo) {
                return res.status(400).json({error: "Task not found!"}).send()
            }

            return res.status(200).json({message: "Task deleted successfully!", toDo}).send()
        } catch (error) {
            console.log(error)
            return res.status(500).send("Server Error")
        }
    }
}

export default new TodoController()