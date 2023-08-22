import {
  useRoutes
} from 'react-router-dom';
import { TodoApp } from "./todo/TodoApp";
import { Welcome } from "./welcome/Welcome";
import { Habits } from "./habits/Habits";
import { Table  } from './table/Table';
import { FinanceApp } from './finance/FinanceApp';
//a function inside react is just a component (returning JSX from a function with a name that starts with a capital letter)
//empty <></> is a fragment

const App = () => {
  
    let element = useRoutes([
     
      {path:'/', element:<Welcome />},
      {path:'/todo', element:<TodoApp />},
      {path:'/habits', element:<Habits />},
      {path:'/table', element:<Table />},
    {path:'/finance', element:<FinanceApp />},
    {path:'/finance/new', element:<FinanceApp />},
    ])
  return element
}

export default App;