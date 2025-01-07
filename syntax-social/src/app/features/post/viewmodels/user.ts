export interface User {
    id: number;
    username: string;
    followers: number;
    postIds: number[];
    totalEngagementScore: number;
    isFollowedByUser: boolean;
}