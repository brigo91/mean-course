import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.scss'
})
export class PostCreate {
  value = "asdasd"
  newPost = ""
  onAddPost() {
    this.newPost = this.value;
  }
}
