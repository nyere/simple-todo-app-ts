import React from 'react';
import { Task } from '../types';
import './ToDoItem.css';

interface ToDoItemProps {
    task: Task;
    onUpdateTaskStatus: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
    task,
    onUpdateTaskStatus,
    onDeleteTask,
}) => {
    return (
        <li key={task.id} className="todo__item">
            <button
                className={`todo__check-button ${
                    task.status === 'completed'
                        ? 'todo__check-button--completed'
                        : 'todo__check-button--pending'
                }`}
                onClick={() => onUpdateTaskStatus(task.id)}
            ></button>
            <span
                className={`todo__text ${
                    task.status === 'completed' && 'todo__text--completed'
                }`}
            >
                {task.title}
            </span>
            <button
                className="todo__delete-button"
                onClick={() => onDeleteTask(task.id)}
            >
                Delete
            </button>
        </li>
    );
};

export default ToDoItem;
