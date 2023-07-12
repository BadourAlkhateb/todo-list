import React from 'react';
import { Container } from '@mantine/core';
import TodoList from './TodoList';
import useStyles from './TodoList.styles';

function App() {
  const classes = useStyles();
  return (
    <Container size={700} className={classes.AppContainer} >
      <TodoList />
    </Container>
  );
}

export default App;
