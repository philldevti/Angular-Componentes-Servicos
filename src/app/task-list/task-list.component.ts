import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../tasks/task';
import { TasksService } from '../tasks.service';
import fontawesome from '@fortawesome/fontawesome';
import faPencilAlt from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  titleApp = 'Lista de Tarefas';
  tasks: Task[];
  selectedTask: Task;

  onClick(task) {
      this.selectedTask = task;
  }

  constructor(private serviceTask: TasksService) {
    fontawesome.library.add(faPencilAlt);
    this.tasks = serviceTask.buscarTasks();
  }


  ngOnInit() {
  }

}
