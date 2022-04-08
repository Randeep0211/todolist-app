
export interface TodoListItem {
    task: string;
    _id: string;
}

export type TodoListRespnse = {
    response: Array<TodoListItem>
}