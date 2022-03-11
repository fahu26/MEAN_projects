import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Post } from "../post-model";
import { PostService } from "../post-service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list-component.html'
})

export class PostListComponent implements OnInit, OnDestroy{
 posts: Post[] = [];
 private postsSub: Subscription = new Subscription();

  constructor(public postService: PostService ){}

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub=  this.postService.getPostUpdateListener()
    .subscribe((post:Post[])=>{
      this.posts = post;
    });
  }


  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
