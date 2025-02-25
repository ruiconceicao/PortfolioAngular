import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects = signal<Project[]> ([
    {
      id: 0,
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Em desenvolvimento...',
      title: 'Portfólio',
      description:
        'Este projeto serve como o meu portfólio digital que reúne os meus projetos, experiência e formação, oferecendo um espaço organizado para consulta e um meio de contacto profissional.',
      techStack: ['angular', 'typescript', 'javascript', 'css', 'html'],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    },
    {
      id: 1,
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Em desenvolvimento...',
      title: 'Pizzaria do raul',
      description:
        'Este projeto serve como o meu portfólio digital que reúne os meus projetos.',
      techStack: [],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    },
    {
      id: 2,
      imgL: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1L.jpg',
      imgD: 'https://res.cloudinary.com/ruiconceicaoportfolio/image/upload/project1D.jpg',
      state: 'Estável',
      title: 'skr',
      description:
        'Este projeto serve como o meu portfólio digital .',
      techStack: [],
      previewUrl: '',
      codeUrl: 'https://github.com/ruiconceicao/Portfolio',
    },
  ]);
  
  constructor() {}
}
