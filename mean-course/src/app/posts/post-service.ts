import { Injectable } from '@angular/core';
import { Post } from './post-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PostService{
 private post: Post[] = [];
 private postUpdated = new Subject<Post[]>();

 getPosts(){
   return [...this.post];
 }

 getPostUpdateListener(){
   return this.postUpdated.asObservable();
 }

 savePost(data:Post){
   this.post.push(data);
   this.postUpdated.next([...this.post]);
 }


}
