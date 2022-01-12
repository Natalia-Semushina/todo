import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
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
}
