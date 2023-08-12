import { render, screen } from '@testing-library/react'
import TodoApp from '../todo/TodoApp'
import App from '../App'
import { BrowserRouter} from 'react-router-dom';
import { Welcome } from '../welcome/Welcome';

test("Todo renders successfully", () => {
    render(<TodoApp/>,{wrapper: BrowserRouter})
    const element = screen.getByText(/New task/i);

    expect(element).toBeInTheDocument();
})


test("Welcome view renders successfully", () => {
    render(<Welcome/>, {wrapper: BrowserRouter})
    const element = screen.getByText(/Welcome to Masha's productivity app/i);

    expect(element).toBeInTheDocument();
})

test("App router view renders successfully", () => {
    render(<App/>, {wrapper: BrowserRouter})
    expect(screen.getByText(/Welcome to Masha's productivity app/i)).toBeInTheDocument()
})