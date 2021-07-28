import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/img/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.'
    },
    {
      title: 'Snowy Mountain',
      imgUrl: 'assets/img/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      title: 'Mountain Biking',
      imgUrl: 'assets/img/biking.jpeg',
      username: 'biking1222',
      content: 'I did some biking today.'
    }
  ]
}
