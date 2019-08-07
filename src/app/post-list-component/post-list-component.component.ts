import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() postName:string;
  @Input() postDesc:string;
  @Input() postDate:Date;
  @Input() postLike:number;



  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.postLike = this.postLike+1;
  }
  onDislike(){
    this.postLike = this.postLike-1;
  }
}
