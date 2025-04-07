import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: any = {
    title: '',
    description: '',
    status: 'TO_DO'
  };
  isEditMode = false;
  taskId: number | null = null;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const stateData = history.state?.task;

    if (stateData) {
      this.isEditMode = true;
      this.task = { ...stateData };
      this.taskId = stateData.id;
    }
  }

  saveTask(): void {
    if (this.isEditMode && this.taskId !== null) {
      this.taskService.updateTask(this.taskId, this.task).subscribe(() => {
        alert('✅ Task updated!');
        this.router.navigate(['/tasks']);
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
        alert('✅ Task created!');
        this.router.navigate(['/tasks']);
      });
    }
  }
}
