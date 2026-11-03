use socialmediaDB;

db.users.insertMany([
  {
    userId: "USR101",
    username: "coder_jane",
    fullName: "Jane Doe",
    bio: "Full Stack Developer & AI enthusiast",
    followersCount: 150,
    followingCount: 80
  }
]);

db.posts.insertMany([
  {
    postId: "POST5001",
    authorId: "USR101",
    content: "Excited to launch our new NoSQL application today!",
    createdAt: new Date("2026-09-18T10:00:00Z"),
    likesCount: 12,
    comments: [
      {
        commentId: "CMT1",
        user: "dev_alex",
        text: "Congratulations! Looks awesome.",
        timestamp: new Date("2026-09-18T10:15:00Z")
      }
    ]
  }
]);

db.posts.updateOne(
  { postId: "POST5001" },
  {
    $push: {
      comments: {
        commentId: "CMT2",
        user: "tech_guru",
        text: "Great job! What database engine are you using?",
        timestamp: new Date()
      }
    }
  }
);

db.posts.updateOne(
  { postId: "POST5001" },
  { $inc: { likesCount: 1 } }
);

db.posts.find({ postId: "POST5001" }).pretty();