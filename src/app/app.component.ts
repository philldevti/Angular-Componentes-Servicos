import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './tasks/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso School of Net Angular 5 - Comopenentes e Serviços';
  tasks: Task[];
    selectedTask: Task;

    onClick(task) {
        this.selectedTask = task;

    }
  constructor(private serviceTask: TasksService) {

    this.tasks = serviceTask.buscarTasks();
  }

}
