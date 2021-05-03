import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts = [];

  // posts = [
  //   { title: 'First Post', Content: 'This is first post content' },
  //   { title: 'Second Post', Content: 'This is Second post content' },
  //   { title: 'Third Post', Content: 'This is Third post content' },
  // ];

  constructor() {}

  ngOnInit(): void {}
}
