"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todoClass_1 = require('../todoClass');
var todoOutput_1 = require('../todoOutput/todoOutput');
var TodoComponent = (function () {
    function TodoComponent() {
        this.todo = [];
    }
    TodoComponent.prototype.addTodo = function (todo, desc) {
        console.log("I have to do: " + todo.value + " Details are: " + desc.value);
        this.todo.push(new todoClass_1.Todo(todo.value, desc.value));
        todo.value = '';
        desc.value = '';
    };
    TodoComponent.prototype.changeStatus = function (status) {
        status.status == 0 ? status.status = 1 : status.status = 0;
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'to-do-input',
            templateUrl: "app/todoInput/todoInput.html",
            directives: [todoOutput_1.TodoShowComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todoInput.js.map