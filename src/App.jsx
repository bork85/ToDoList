import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Container, Input, ToDoList, ItemList, CheckOk, Trash, CheckFinished } from './styles';
import api from './axios';

function App() {
  const [input, setInput] = useState()
  const [taskList, setTaskList] = useState([])

  async function getAllTasks(){
    const {data} = await api.get('/todos')
    setTaskList(data);
  }

  function inputNovo(event) {
    setInput(event.target.value)
  }
  async function taskNova() {
    if (input) {
      await api.post('/todos', {task: input})
      setInput('')
      getAllTasks()
    }
  }
  async function taskFinished(id, finished) {
    await api.patch(`/todos/${id}`, {finished: !finished})
    getAllTasks()
  }
  async function removeTask(id) {
    await api.delete(`/todos/${id}`)
    getAllTasks()
  }

  useEffect( () => {
    getAllTasks()
  }, [])

  return (
    <Container>
      <ToDoList>
        <div className='inputTask'>
          <Input onChange={inputNovo} placeholder="O que tenho para fazer..." />
          <Button onClick={taskNova}>Adicionar</Button>
        </div>
        <ul>
          {taskList.length > 0 ? (
            taskList.map(item => (
              <ItemList $isfinished={item.finished} key={item._id}>
                {item.finished 
                  ? (<CheckFinished size={20} onClick={() => taskFinished(item._id, item.finished)} />) 
                  : (<CheckOk size={20} onClick={() => taskFinished(item._id, item.finished)} />)
                }
                <li>{item.task}</li>
                <Trash size={20} onClick={() => removeTask(item._id)} />
              </ItemList>
            ))
          ) : (
            <div className='empty'>Não há tarefas cadastradas</div>
          )}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
