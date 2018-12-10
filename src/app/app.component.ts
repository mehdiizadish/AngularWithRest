import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './data/formData.service';
import {ProductDataService} from './product-data.service';
import { Product } from './product/product.model';
@Component({
    selector: 'app-root'
    , templateUrl: './app.component.html',
    providers: [ProductDataService]
})

export class AppComponent implements OnInit {
    title = 'AMMI by Pizaa team';
    todos: Product[] = [];
    @Input() formData;

    // constructor(private formDataService: FormDataService) {
    // }
    constructor(
        private productDataService: ProductDataService
    ) {
    }

    ngOnInit() {
        // this.formData = this.productDataService.getFormData();
        this.productDataService
            .getAllTodos()
            .subscribe(
                (todos) => {
                    this.todos = todos;
                }
            );
        console.log(this.title + ' loaded!');
    }
    onAddTodo(todo) {
        this.productDataService
            .addTodo(todo)
            .subscribe(
                (newTodo) => {
                    this.todos = this.todos.concat(newTodo);
                }
            );
    }

    onToggleTodoComplete(todo) {
        this.productDataService
            .toggleTodoComplete(todo)
            .subscribe(
                (updatedTodo) => {
                    todo = updatedTodo;
                }
            );
    }

    onRemoveTodo(todo) {
        this.productDataService
            .deleteTodoById(todo.id)
            .subscribe(
                (_) => {
                    this.todos = this.todos.filter((t) => t.id !== todo.id);
                }
            );
    }
}
