import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { Post } from '../viewmodels/post';
import { posts as initialPosts } from '../mock-data/mock-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postStore: WritableSignal<Post[]> = signal(initialPosts);

  getPostsFromStore() {
    return this.postStore.asReadonly();
  }

  getPost(id: number) {
    return computed(() => {
      return this.postStore().find((post: Post) => post.id === id);
    });
  }

  updateCaption(postId: number, newCaption: string) {
    this.postStore.update((store: Post[]) => 
      store.map((post: Post) => 
        post.id === postId ? { ...post, caption: newCaption } : post
      )
    );
  }

  calculateEngagementScore(post: Post): number {
    let likeScore = post.likes;
    let repostScore = post.reposts * 2;
    let resultScore = likeScore + repostScore;
    return resultScore;
  }

  toggleLike(postId: number) {
    this.postStore.update((store: Post[]) => {
      return store.map((post: Post) => {
        if (post.id === postId) {
          const newLikedState = !post.isLikedByCurrentUser;
          return {
            ...post, 
            likes: post.likes + (newLikedState ? 1 : -1),
            isLikedByCurrentUser: newLikedState
          }
        }
        return post;
      })
    });
  }

  toggleRepost(postId: number) {
    this.postStore.update((posts: Post[]) =>
      posts.map((post: Post) => {
        if (post.id === postId) {
          const newRepostedState = !post.isReposedByCurrentUser;
          return {
            ...post,
            reposts: post.reposts + (newRepostedState ? 1 : -1),
            isReposedByCurrentUser: newRepostedState,
          };
        }
        return post;
      })
    );
  }

  toggleFollow(postId: number) {
    this.postStore.update((posts) =>
      posts.map((post) => {
        if (post.id === postId) {
          const newFollowState = !post.author.isFollowedByUser;
          return {
            ...post,
            author: {
              ...post.author,
              isFollowedByUser: newFollowState,
              followers: post.author.followers + (newFollowState ? 1 : -1),
            },
          };
        }
        return post;
      })
    );
  }
}