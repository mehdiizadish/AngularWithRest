import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Product } from './product/product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

    constructor(
        private http: Http
    ) {
    }

    public getAllTodos(): Observable<Product[]> {
        return this.http
            .get(API_URL + '/product')
            .map(response => {
                const todos = response.json();
                return todos.map((todo) => new Product(todo));
            })
            .catch(this.handleError);
    }

    public createTodo(todo: Product): Observable<Product> {
        return this.http
            .post(API_URL + '/todos', todo)
            .map(response => {
                return new Product(response.json());
            })
            .catch(this.handleError);
    }

    public getTodoById(todoId: number): Observable<Product> {
        return this.http
            .get(API_URL + '/todos/' + todoId)
            .map(response => {
                return new Product(response.json());
            })
            .catch(this.handleError);
    }

    public updateTodo(todo: Product): Observable<Product> {
        return this.http
            .put(API_URL + '/todos/' + todo.id, todo)
            .map(response => {
                return new Product(response.json());
            })
            .catch(this.handleError);
    }

    public deleteTodoById(todoId: number): Observable<null> {
        return this.http
            .delete(API_URL + '/todos/' + todoId)
            .map(response => null)
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}
