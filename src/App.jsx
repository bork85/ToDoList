import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Container, Input, ToDoList, ItemList } from './styles';
import { FcOk, FcFullTrash } from "react-icons/fc";

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
    setTaskList([...taskList, { id: uuid(), task: input, finished: false }])
  }
  function taskFinished(id){
    const newTaskList = taskList.map( item => {
      item.id === id ? {...item, finished: true } : item;
      console.log(item)
    })
    setTaskList(newTaskList);
    //console.log(taskList)
  }
  
  return (
    <Container>
      <ToDoList>
        <div className='inputTask'>
          <Input onChange={inputNovo} placeholder="O que tenho para fazer..." />
          <Button onClick={taskNova}>Adicionar</Button>
        </div>
        <ul>
          {taskList.map(item => (
            console.log(item.finished),
            <ItemList $isfinished={item.finished} key={item.id}>
              <FcOk size={20} onClick={() => taskFinished(item.id)}/>
              <li>{item.task}</li>
              <FcFullTrash size={20} />
            </ItemList>
          ))}
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
