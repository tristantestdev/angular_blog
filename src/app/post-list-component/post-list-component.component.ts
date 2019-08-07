import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postCreated_at:Date;
  @Input() postLoveIts:number;



  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.postLoveIts = this.postLoveIts+1;
  }
  onDislike(){
    this.postLoveIts = this.postLoveIts-1;
  }
}
