const posts = [];
let lastUserActivityTime = null;

// Function to simulate creating a post
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

// Function to update the user's last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastUserActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

// Function to delete the last post
function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}

// Helper function to print all posts and last user activity time
function printPostsAndActivityTime() {
  console.log("Posts:");
  posts.forEach((post) => console.log(post));
  console.log("Last User Activity Time:", lastUserActivityTime);
}

// Main logic
createPost({ title: "Post One", body: "This is Post One" })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    printPostsAndActivityTime();
    return createPost({ title: "Post Two", body: "This is Post Two" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    printPostsAndActivityTime();
    return createPost({ title: "Post Three", body: "This is Post Three" });
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    printPostsAndActivityTime();
    return deleteLastPost();
  })
  .then(() => {
    console.log("Deleted the last post.");
    printPostsAndActivityTime();
  })
  .catch((error) => {
    console.error("Error:", error);
  });
