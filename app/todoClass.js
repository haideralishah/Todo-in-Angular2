"use strict";
var Todo = (function () {
    function Todo(todo, desc, status) {
        this.todo = todo;
        this.desc = desc;
        this.status = status | 0;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todoClass.js.map