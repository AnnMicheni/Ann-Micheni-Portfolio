import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects = [
    {
      title: 'Architect Website',
      description: 'This project is designed to facilitate seamless connections between clients and architects or construction professionals. Featuring an intuitive interface, it allows users to browse portfolios, schedule consultations, and manage project timelines. The platform aims to streamline the process of showcasing designs and managing construction projects, helping clients visualize and realize their dream projects more efficiently.',
      image: '/house.jpeg'
    },
    {
      title: 'Insurance quotation system',
      description: 'Its a system built to help insurance companies automate issuing of quotations to their clients. ',
      image: 'quot.png'
    },
    {
      title: 'Portfolio Template',
      description: 'Its a personal portfolio website that is built with all needed features for easy customization to specific requirements. ',
      image: 'portfolio.png'
    },
    {
      title: 'Portfolio Template',
      description: 'Its a personal portfolio website that is built with all needed features for easy customization to specific requirements. ',
      image: 'portfolio.png'
    },
  
  ];
}
