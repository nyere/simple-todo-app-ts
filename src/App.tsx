// imports
import React, { useReducer, FormEvent, useEffect, useRef } from 'react';
import './App.css';
import reducer from './reducer/reducer';
import { Task } from './types';
import createTask from './utils/createTask';
import ToDoItem from './components/ToDoItem';

// code
export default function TaskManager() {
    const [tasks, dispatch] = useReducer(reducer, [], (initialArg: Task[]) => {
        const tasksInStorage = localStorage.getItem('tasks');
        return tasksInStorage ? JSON.parse(tasksInStorage) : initialArg;
    });

    const createTaskRef = useRef<HTMLInputElement>(null);

    // Effects
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        createTaskRef.current?.focus();
    }, [tasks.length]);

    // Actions
    const handleUpdateTaskStatus = (id: number) => {
        dispatch({ type: 'update', id });
    };

    const handleDeleteTask = (id: number) => {
        dispatch({ type: 'delete', id });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        dispatch({
            type: 'add',
            task: createTask(formData.get('task') as string),
        });

        e.currentTarget.reset();
    };

    // JSX
    return (
        <div className="todo-container">
            <h1 className="header">Task Manager</h1>
            <form autoComplete="off" className="form" onSubmit={handleSubmit}>
                <input
                    className="form__input"
                    name="task"
                    placeholder="Task title"
                    ref={createTaskRef}
                />
                <button type="submit" className="form__button">
                    Add Task
                </button>
            </form>

            <div className="todo">
                <ul className="todo__list">
                    {tasks.map((task) => {
                        return (
                            <ToDoItem
                                key={task.id}
                                task={task}
                                onUpdateTaskStatus={handleUpdateTaskStatus}
                                onDeleteTask={handleDeleteTask}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
