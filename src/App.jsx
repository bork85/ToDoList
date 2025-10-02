import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Container, Input, ToDoList, ItemList, CheckOk, Trash } from './styles';

function App() {
  const listInit = [
    { id: uuid(), task: "Levar totó no veterinário", finished: true },
    { id: uuid(), task: "Comprar uma coquinha gelada", finished: false },
    { id: uuid(), task: "Terminar ToDoList do DevClub", finished: false }]
  //console.log(list)

  const [input, setInput] = useState()
  const [taskList, setTaskList] = useState(listInit)

  function inputNovo(event) {
    setInput(event.target.value)
  }
  function taskNova() {
    if (input) {
      setTaskList([...taskList, { id: uuid(), task: input, finished: false }])
    }
  }
  function taskFinished(id) {
    const newTaskList = taskList.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))
    setTaskList(newTaskList);
  }
  function removeTask(id) {
    const newTaskList = taskList.filter(item => item.id !== id)
    setTaskList(newTaskList)
  }

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
              <ItemList $isfinished={item.finished} key={item.id}>
                <CheckOk size={20} onClick={() => taskFinished(item.id)} />
                <li>{item.task}</li>
                <Trash size={20} onClick={() => removeTask(item.id)} />
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
