import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;
  projectService: ProjectService = inject(ProjectService);
  projects = signal<Project[]>([]);

  ngOnInit(): void {
    this.projects.set(this.projectService.projects);
  }
}
