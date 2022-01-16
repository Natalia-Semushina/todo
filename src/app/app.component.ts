import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public adding = false;
  public editing = false;
  public editingIndex: number;


  public todoForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  public todos: Todo[] = [
    <Todo>{
      name: '15 Minute Walk',
      frequency: 'Daily',
      description:
        'This habit makes my kitchen look nice and makes my day better the next morning.',
    },
    <Todo>{
      name: 'Weed the Garden',
      frequency: 'Weekly',
      description:
        'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
    },
  ];

  public onSubmit() {
    const todo = this.todoForm.value as Todo;

    if (this.editing) {
      this.todos.splice(this.editingIndex, 1, todo);
    } else {
      this.todos.push(todo);
    }

    this.editing = false;
    this.adding = false;
  }

  public setEditForm(todo: Todo, index: number) {
    this.todoForm.patchValue({
      name: todo.name,
      frequency: todo.frequency,
      description: todo.description,
    });
    this.editing = true;
    this.editingIndex = index;
  }

  public onDelete(index: number) {
    this.todos.splice(index, 1);
  }

  exitForm() {
    this.adding = false;
    this.editing = false;
    this.todoForm.reset();
  }
}
