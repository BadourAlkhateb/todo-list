import React, { useState, useEffect } from 'react';

import { Button, Container, TextInput, Col, Paper, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleCheck, faPen, faTrashCan 
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  const [toDo, setToDo] = useState(() => {
    const localData = localStorage.getItem('toDo');
    return localData ? JSON.parse(localData) : [];
  });

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  useEffect(() => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
  }, [toDo]);

  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = {id: num, title: newTask, status: false}
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  }

  const markDone = (id) => {
    const newTasks = toDo.map((task) => {
      if (task.id === id){
        return ({ ...task, status: !task.status })
      }
      return task;
    });
    setToDo(newTasks);
  }

  const cancelUpdate = () => {
    setUpdateData('');
  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter( task=>task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  }

  return (
    <Container size={700} className="App">
      <Text size="xl" weight={700} style={{ marginTop: '2em' }}>Add Your Tasks</Text>

      <div style={{ marginTop: '2em', marginBottom: '2em' }}>
        <TextInput
          label={updateData ? 'Update task' : 'New task'}
          placeholder="Type here"
          value={updateData ? updateData.title : newTask}
          onChange={(event) => updateData ? changeTask(event) : setNewTask(event.currentTarget.value)}
          rightSection={updateData ?
            <div style={{ display: 'flex' }}>
              <Button color="blue" onClick={updateTask}>Update</Button>
              <Button color="yellow" onClick={cancelUpdate}>Cancel</Button>
            </div> :
            <Button color="teal" onClick={addTask}>Add Task</Button>
          }
          rightSectionWidth={updateData ? 200 : 100}
        />
      </div>

      {/* Use Mantine's Paper component to display each task */}
      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => (
          <Paper padding="md" style={{ marginBottom: '1em' }} key={task.id}>
            <Text style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
              <span className="taskNumber">{index + 1}</span> 
              <span className="taskText">{task.title}</span>
            </Text>

            <div className="iconsWrap">
              <Button color="blue" onClick={() => markDone(task.id)} title="Completed / Not Completed">
                <FontAwesomeIcon icon={faCircleCheck} />
              </Button>

              {task.status ? null : (
                <Button color="yellow" onClick={() => setUpdateData({ id: task.id, title: task.title, status: task.status })} title="Edit">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              )}

              <Button color="red" onClick={() => deleteTask(task.id)} title="Delete">
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </div>
          </Paper>
        ))
      }
    </Container>
  );
}

export default App;
