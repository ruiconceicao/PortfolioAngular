import { Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { SvgService,  } from '../../services/svg.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  projectService = inject(ProjectService);
  projects = this.projectService.projects;

  svgService = inject(SvgService);
  svgs = this.svgService.svgs;
}
