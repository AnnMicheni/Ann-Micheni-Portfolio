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
      title: 'Hospital Laboratory Information Systems',
      description: 'These systems are built to enhance the efficiency and accuracy of laboratory operations in a hospital setting. It streamlines the process of managing patient test results, tracking samples, and coordinating with healthcare providers. Features include real-time data entry, automated report generation, and integration with electronic health records (EHR), aiming to improve workflow, reduce errors, and provide timely insights for better patient care.',
      image: '/hosp logo.png'
    },
    {
      title: 'Pharmaciteucal Laboratory Information,
      description: 'It is a system built to optimize the management and analysis of data within pharmaceutical laboratories. The system supports tasks such as tracking experiments, managing inventory, and ensuring regulatory compliance. Key features include automated data collection, detailed reporting, and integration with other research tools. The goal is to enhance operational efficiency, ensure data integrity, and accelerate the research and development process in pharmaceutical labs.',
      image: '/Pharma.png'
    },
    {
      title: 'Agricultural Research Laboratory Information System,
      description: 'It is a system designed to streamline and manage data for agricultural research laboratories. The system facilitates the organization of research data, tracking of experiments, and management of samples. Features include real-time data entry, detailed analytics, and integration with field data collection tools. The objective is to enhance research efficiency, ensure accurate data management, and support informed decision-making in agricultural studies.',
      image: '/Agri1.jpg'
    },
  
  ];
}
