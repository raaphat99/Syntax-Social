import { User } from './user';

export interface Post {
    id: number;
    image: string;
    caption: string;
    likes: number;
    reposts: number;
    author: User;
    engagementScore: number;
    isLikedByCurrentUser: boolean;
    isReposedByCurrentUser: boolean;
}