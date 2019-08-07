import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My blog';


  posts = [
    {
      name: 'Mon premier post',
      content: 'blablabl',
      date: new Date(),
      like: 0,
    },
    {
      name: 'Mon deuxieme post',
      content: 'blablabl',
      date: new Date(),      like: 0,
    },
    {
      name: 'Mon troisieme post',
      content: 'blablabl',
      date: new Date(),      like: 0,
    },
  ]

}
