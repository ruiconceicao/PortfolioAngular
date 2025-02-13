import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Em desenvolvimento...',
      title: 'Portfolio',
      description:
        'Este projeto serve como o meu portfólio digital que reúne os meus projetos, experiência e formação, oferecendo um espaço organizado para consulta e um meio de contacto profissional.',
      techStack: [],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    },
    
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  constructor() {}
}
