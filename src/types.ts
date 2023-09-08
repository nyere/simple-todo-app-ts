export interface Task {
    title: string;
    status: 'pending' | 'completed';
    id: number;
}

export type Action =
    | { type: 'add'; task: Task }
    | { type: 'update'; id: number }
    | { type: 'delete'; id: number };
