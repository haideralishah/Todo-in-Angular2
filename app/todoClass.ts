export class Todo {

    todo: string;
    desc: string;
    status: number;
    constructor(todo: string, desc: string, status?: number) {
        this.todo = todo;
        this.desc = desc;
        this.status = status|0;        
      
    }
}