import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post-model";
import { PostService } from "../post-service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create-component.html',
  styleUrls: ['./post-create-component.css']
})

export class PostCreateComponent{
  title :String= "";
  content :String= "";

  onAddedPost(form :NgForm){
    if(form.invalid){
      return
    }
    const posts = {
      id: 0,
      title: form.value.title,
      content: form.value.content
    }

    this.postService.savePost(posts);
    form.resetForm();
  }

  constructor(public postService: PostService){

  }

}
