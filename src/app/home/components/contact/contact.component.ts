import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contacts = [
    {
      link: 'https://x.com/anne_micheni',
      image: '/twitter.png',
      name: 'Twitter',
      message: 'Find me on X'

    },
    {
      link: 'https://www.linkedin.com/in/ann-micheni-6a3a73191/',
      image: '/link.png',
      name: 'LinkedIn',
      message: 'Follow me on LinkedIn'
    },
    {
      link: 'https://github.com/AnnMicheni',
      image: '/git.jpeg',
      name: 'Github',
      message: 'Follow me on Github'
    },
    {
      link: 'https://wa.me/+254720542537',
      image: '/whatsap.png',
      name: 'Whatsapp',
      message: 'Lets chat on whatsapp'
    },
    {
      link: 'mailto:annemicheni5@gmail.com',
      image: '/gmail.png',
      name: 'Mail',
      message: 'Send an email'
    }
  
  ];

}
