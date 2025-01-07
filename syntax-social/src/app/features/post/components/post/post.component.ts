import { Post } from './../../viewmodels/post';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, computed, OnInit, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  postId = input.required<number>();
  post: Signal<Post | undefined> = signal(undefined);
  engagementScore: Signal<number | null> = signal(null);;


  constructor(
    private dataService: DataService,
    protected adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.post = computed(() => {
      return this.dataService.getPost(this.postId())();
    });

    this.engagementScore = computed(() => {
      const currentPost = this.post();
      if (currentPost) {
        return this.dataService.calculateEngagementScore(currentPost);
      }
      return 0;
    });
  }

  toggleLike() {
    this.dataService.toggleLike(this.postId());
  }

  toggleRepost() {
    this.dataService.toggleRepost(this.postId());
  }

  toggleFollow() {
    this.dataService.toggleFollow(this.postId());
  }

  updateCaption(newCaption: string) {
    this.dataService.updateCaption(this.postId(), newCaption);
  }
}
