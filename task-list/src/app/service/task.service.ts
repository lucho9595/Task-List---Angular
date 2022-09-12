import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { Task } from "../Task";
import { TASKS } from "../mock-tasks";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiurl = 'http://localhost:5001/task'
  constructor(
    private http: HttpClient
  ) { }

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiurl)
  }
}
