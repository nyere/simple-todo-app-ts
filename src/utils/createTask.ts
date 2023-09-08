import { Task } from '../types';

export default function createTask(taskName: string): Task {
    return {
        title: taskName,
        status: 'pending',
        id: Math.random() * 1000,
    };
}
