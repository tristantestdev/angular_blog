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
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum elit quis ligula pretium auctor',
      created_at: new Date(),
      loveIts: 0,
    },
    {
      title: 'Mon deuxieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum elit quis ligula pretium auctor',
      created_at: new Date(),
      loveIts: 0,
    },
    {
      title: 'Mon troisieme post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum elit quis ligula pretium auctor',
      created_at: new Date(),
      loveIts: 0,
    },
  ]

}
