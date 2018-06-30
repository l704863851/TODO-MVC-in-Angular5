import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './todo-mvc.component.html'
})
export class TodoMvcComponent implements OnInit {
    newTodo: string = '';
    todos: any[];
    visibility: string = 'all';
    editedTodo: any;
    beforeEditCache: any;

    ngOnInit() {
        this.todos = this.todoStorage.fetch();
    }

    get filteredTodos() {
        return this.filters[this.visibility](this.todos)
    }

    editTodo(todo) {
        this.beforeEditCache = todo.title
        this.editedTodo = todo
    }
    removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
    }
    doneEdit(todo) {
        if(!this.editedTodo) return
        this.editedTodo = null
        todo.title = todo.title.trim()
        if(!todo.title) {
            this.removeTodo(todo)
        }
    }
    cancelEdit(todo) {
        this.editedTodo = null
        todo.title = this.beforeEditCache
    }
    removeCompleted() {
      this.todos = this.filters.active(this.todos)
    }

    addTodo(event: any) {
        let value = event.target.value && event.target.value.trim()
        if(!value) return ''
        this.todos.push({
            id: this.todoStorage.uid++,
            title: value,
            computed: false
        })
        this.newTodo = ''
    }

    get remaining() {
        return this.filters.active(this.todos).length
    }

    get allDone() {
        return this.remaining === 0
    }
    set allDone(value) {
        this.todos.forEach(todo => {
            todo.completed = value
        })
    }
    
    filters = {
        all: function(todos) {
            return todos
        },
        active: function(todos) {
            return todos.filter(function(todo) {
                return !todo.completed
            })
        },
        completed: function(todos) {
            return todos.filter(function(todo) {
                return todo.completed
            })
        }
    }

    todoStorage = {
        STORAGE_KEY: 'todos-angular-1.0',
        uid: 0,
        fetch() {
            let todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
            todos.forEach((todo, index) => {
                todo.id = index
            })
            this.uid = todos.length
            return todos
        },
        save(todos) {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
        }
    }
}