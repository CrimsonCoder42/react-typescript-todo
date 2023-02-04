//rsf - Creates a stateless React component as a named function without PropTypes.
import React from 'react';
import {Todo} from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";


type Props = {
    todo: Todo, 
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo({ todo, todos, setTodos }: Props) {
    return (
        <form className="todos__single">
            <span className="todos__single--text">{todo.todo}</span>

            <div>

                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon"></span>
                <span className="icon"></span>
                <span className="icon"></span>

            </div>

        </form>
    );
}

export default SingleTodo;