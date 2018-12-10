import { Injectable } from '@angular/core';
import { Product } from './product/product.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductDataService{

    constructor(
        private api: ApiService
    ) {
    }

    // Simulate POST /todos
    addTodo(todo: Product): Observable<Product> {
        return this.api.createTodo(todo);
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(todoId: number): Observable<Product> {
        return this.api.deleteTodoById(todoId);
    }

    // Simulate PUT /todos/:id
    updateTodo(todo: Product): Observable<Product> {
        return this.api.updateTodo(todo);
    }

    // Simulate GET /todos
    getAllTodos(): Observable<Product[]> {
        return this.api.getAllTodos();
    }

    // Simulate GET /todos/:id
    getTodoById(todoId: number): Observable<Product> {
        return this.api.getTodoById(todoId);
    }

    // Toggle complete
    toggleTodoComplete(todo: Product) {
        // todo.complete = !todo.complete;
        return this.api.updateTodo(todo);
    }

}
