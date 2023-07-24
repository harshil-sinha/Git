const posts = [];
let lastUserActivityTime = null;

async function createPost(post) {
  await new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

async function updateLastUserActivityTime() {
  await new Promise((resolve) => {
    setTimeout(() => {
      lastUserActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

async function deletePost() {
  await new Promise((resolve, reject) => {
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

function getColdDrinks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cold Drinks");
    }, 1000);
  });
}


function printPostsAndActivityTime() {
  console.log("Posts:");
  posts.forEach((post) => console.log(post));
  console.log("Last User Activity Time:", lastUserActivityTime);
}

async function main() {
  try {
    const promises = [
      createPost({ title: "Post One", body: "This is Post One" }),
      createPost({ title: "Post Two", body: "This is Post Two" }),
      createPost({ title: "Post Three", body: "This is Post Three" }),
    ];

    await Promise.all(promises);
    await updateLastUserActivityTime();
    printPostsAndActivityTime();

    await deletePost();
    printPostsAndActivityTime();

    const coldDrinks = await getColdDrinks();
    console.log("Got:", coldDrinks);
    printPostsAndActivityTime();
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
