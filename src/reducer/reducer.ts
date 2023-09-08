import { Task, Action } from '../types';

export default function reducer(tasks: Task[], action: Action): Task[] {
    if (action.type === 'add') {
        if (action.task.title) {
            return [...tasks, action.task];
        }
    }
    if (action.type === 'update') {
        return tasks.map((task) => {
            if (task.id === action.id) {
                return {
                    ...task,
                    status: task.status === 'pending' ? 'completed' : 'pending',
                };
            }
            return task;
        });
    }
    if (action.type === 'delete') {
        return tasks.filter((task) => task.id !== action.id);
    }
    return tasks;
}
