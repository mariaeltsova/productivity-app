//import "./styles.css";
import React from 'react'
import{Routes, Route}from 'react-router-dom'
import { TodoApp } from "./todo/TodoApp";
import { Welcome } from "./welcome/Welcome";
import { Habits } from "./habits/Habits";
import { Table  } from './table/Table';
import { FinanceApp } from './finance/FinanceApp';
//a function inside react is just a component (returning JSX from a function with a name that starts with a capital letter)
//empty <></> is a fragment

const App = () => {
  return (
    <Routes>
     
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/todo' element={<TodoApp />}></Route>
      <Route path='/habits' element={<Habits />}></Route>
      <Route path='/table' element={<Table />}></Route>
    <Route path='/finance' element={<FinanceApp />}></Route>
    <Route path='/finance/new' element={<FinanceApp />}></Route>
    </Routes>
  )
}

export default App;