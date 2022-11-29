import { Component } from '@angular/core';

@Component({
  selector: ' todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent {
    todos: string[]
    postponed: string[]
    temp: string 

    constructor() {
        this.todos = ['First task', 'Second task', 'Third task']
        this.postponed = []
        this.temp = ''
    }

    addTodo(): void {
        console.log(this.temp)
        this.todos.push(this.temp)
        this.temp = ''
    }

    postpone(index: number): void {
        this.postponed.push(
            this.todos.splice(index, 1)[0]
        )
    }

    priorize(index: number): void {
        this.todos.push(
            this.postponed.splice(index, 1)[0]
        )
    }

    remove(index: number, from: string): void {
        from === 'todos' 
            ? this.todos.splice(index, 1)
            : this.postponed.splice(index, 1)
    }
}
