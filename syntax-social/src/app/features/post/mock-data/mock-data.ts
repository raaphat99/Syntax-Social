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
        "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
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
        "https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",
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
        "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
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
        "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
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
        "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
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
        "https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI",
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
        "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
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
        "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
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
        "https://fastly.picsum.photos/id/50/4608/3072.jpg?hmac=E6WgCk6MBOyuRjW4bypT6y-tFXyWQfC_LjIBYPUspxE",
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
        "https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
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
        "https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I",
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
        "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
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
        "https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s",
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
        "https://fastly.picsum.photos/id/89/4608/2592.jpg?hmac=G9E4z5RMJgMUjgTzeR4CFlORjvogsGtqFQozIRqugBk",
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
