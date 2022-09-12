import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Task";
import { TASKS } from "../../mock-tasks";
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  faTimesCircle = faTimesCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
