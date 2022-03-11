import { Injectable } from '@angular/core';
import { Post } from './post-model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class PostService{
 private post: Post[] = [];
 private postUpdated = new Subject<Post[]>();

constructor(private http : HttpClient){}

 getPosts(){
    this.http.get<{message: string, posts:Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData) =>{
      this.post = postData.posts;
      this.postUpdated.next([...this.post]);
    })
 }

 getPostUpdateListener(){
   return this.postUpdated.asObservable();
 }

 savePost(data:Post){
   this.http.post<{message : string}>('http://localhost:3000/api/posts', data)
   .subscribe(resData =>{
      console.log(resData.message);
    this.post.push(data);
    this.postUpdated.next([...this.post]);
   })

 }


}
