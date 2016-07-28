import {Component} from '@angular/core';
import {Todo} from '../todoClass';
import {TodoShowComponent} from '../todoOutput/todoOutput';
import {NgFor} from '@angular/common';

@Component({
    selector: 'to-do-input',
    templateUrl: "app/todoInput/todoInput.html",
    directives: [TodoShowComponent]
})

export class TodoComponent {
    todo: Todo[];
    constructor(){
        this.todo = [];
    }
    addTodo(todo: HTMLInputElement, desc: HTMLInputElement) {
        console.log(`I have to do: ${todo.value} Details are: ${desc.value}`);
        this.todo.push(new Todo(todo.value, desc.value));
        todo.value = '';
        desc.value = '';
    }
    changeStatus(status: number){

        status.status == 0 ? status.status = 1 : status.status = 0;
         
    }

}