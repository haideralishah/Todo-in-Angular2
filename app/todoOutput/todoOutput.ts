import {Component, EventEmitter} from '@angular/core';
import {Todo} from '../todoClass';


@Component({
    selector: '[todo]',
    inputs: ['singleTodo', 'index'],
    outputs: ["changeStatus"],
    templateUrl: "app/todoOutput/todoOutput.html"
})

export class TodoShowComponent {
    singleTodo: Todo;
    index: number;
    changeStatus: EventEmitter<Todo>;
    constructor() {
        this.changeStatus = new EventEmitter();
    }
    statusChange(todo: Todo){
        this.changeStatus.emit(todo);
    }

}