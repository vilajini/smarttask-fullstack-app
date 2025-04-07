import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TaskFormComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];

  filter = {
    title: '',
    startDate: '',
    endDate: '',
    status: ''
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe((data: any[]) => {
      this.tasks = data;
      this.filteredTasks = data;
    });
  }

  openCreateTask() {
    this.router.navigate(['/tasks/create']);
  }

  editTask(task: any) {
    this.router.navigate(['/tasks/create'], { state: { task } });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.fetchTasks();
    });
  }

  applyFilter(): void {
    this.filteredTasks = this.tasks.filter(task => {
      const titleMatch = task.title.toLowerCase().includes(this.filter.title.toLowerCase());
      const statusMatch = this.filter.status ? task.status === this.filter.status : true;

      const taskDate = new Date(task.createdAt);
      const startDate = this.filter.startDate ? new Date(this.filter.startDate) : null;
      const endDate = this.filter.endDate ? new Date(this.filter.endDate) : null;

      const dateMatch =
        (!startDate || taskDate >= startDate) &&
        (!endDate || taskDate <= endDate);

      return titleMatch && statusMatch && dateMatch;
    });
  }
}
