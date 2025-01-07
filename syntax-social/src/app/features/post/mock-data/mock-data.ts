import { Post } from "../viewmodels/post";
import { User } from "../viewmodels/user";

const users: User[] = [

    {
        id: 1,
        username: "raaphat_99",
        followers: 150,
        postIds: [1, 2, 6, 11],
        totalEngagementScore: 0,
        isFollowedByUser: false,
    },
    {
        id: 2,
        username: "streetcat_walker",
        followers: 245,
        postIds: [3, 7],
        totalEngagementScore: 0,
        isFollowedByUser: false,
    },
    {
        id: 3,
        username: "bitwise_nomadic",
        followers: 820,
        postIds: [4, 5, 8, 16],
        totalEngagementScore: 0,
        isFollowedByUser: false,
    },
    {
        id: 4,
        username: "public_art",
        followers: 1600,
        postIds: [9, 10],
        totalEngagementScore: 0,
        isFollowedByUser: false,
    },
];

const posts: Post[] = [
    {
        id: 1,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01_01.jpg",
        caption: "Sleepy time.",
        likes: 20,
        reposts: 5,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 2,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01_02.jpg",
        caption: "What are you looking at?",
        likes: 15,
        reposts: 2,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 3,
        image:
        "https://images.unsplash.com/photo-1713948774998-c94bfccd572a?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Looking for cats in the streets of Japan.",
        likes: 50,
        reposts: 10,
        author: users[1],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 4,
        image:
        "https://plus.unsplash.com/premium_photo-1714675222296-e8867bc9398a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Coworking session with some brilliant minds.",
        likes: 90,
        reposts: 25,
        author: users[2],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 5,
        image:
        "https://images.unsplash.com/photo-1569511166187-97eb6e387e19?q=80&w=3010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "books.",
        likes: 75,
        reposts: 18,
        author: users[2],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 6,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01_03.jpg",
        caption: "A rosie for a sweetheart.",
        likes: 30,
        reposts: 4,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 7,
        image:
        "https://images.unsplash.com/photo-1568502299959-4d72c753deff?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Today's walk: Hollywood Blvd.",
        likes: 45,
        reposts: 7,
        author: users[1],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 8,
        image:
        "https://images.unsplash.com/photo-1634838080334-28befa9efe80?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "My coworker says that it's time for a break.",
        likes: 80,
        reposts: 20,
        author: users[2],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 9,
        image:
        "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "12th Street.",
        likes: 65,
        reposts: 12,
        author: users[3],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 10,
        image:
        "https://images.unsplash.com/photo-1580196923194-ddad5b516c88?q=80&w=2811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Ocean city.",
        likes: 110,
        reposts: 30,
        author: users[3],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 11,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01-04.png",
        caption: "Showing off the toe beans.",
        likes: 90,
        reposts: 30,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 12,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01-05.JPG",
        caption: "Eye of the tiger.",
        likes: 50,
        reposts: 23,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 13,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01-06.jpg",
        caption: "Prepare for trouble, and make it double!",
        likes: 48,
        reposts: 35,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 14,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01-07.png",
        caption: "Vogue.",
        likes: 21,
        reposts: 6,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 15,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01-09.jpg",
        caption: "Photosynthesizing.",
        likes: 67,
        reposts: 54,
        author: users[0],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
    {
        id: 16,
        image:
        "https://static-assets.codecademy.com/Courses/learn-angular/07-angular-signals/lab/01_10.JPG",
        caption: "grass.",
        likes: 67,
        reposts: 30,
        author: users[2],
        engagementScore: 0,
        isLikedByCurrentUser: false,
        isReposedByCurrentUser: false,
    },
];

export { users, posts };
