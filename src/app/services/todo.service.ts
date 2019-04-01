import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList:Array<{taskName:string, done:boolean}> = [
    {taskName: 'Tuer le lion de Ménée', done: false},
    {taskName: 'Nettoyer les écuries d\'Augias', done: false},
  ];

  constructor() { }

  public getData(){
    return this.todoList;
  }
}
