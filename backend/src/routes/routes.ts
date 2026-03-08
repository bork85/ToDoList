import {Router} from 'express'
import todoController from '../api/controllers/todo.controller'

const router = Router();

router.get('/todos', todoController.getAllToDos)
router.post('/todos', todoController.createToDo)
router.patch('/todos/:id', todoController.updateToDo)
router.delete('/todos/:id', todoController.deleteToDo)

export default router;