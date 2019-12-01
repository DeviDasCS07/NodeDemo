const postRepository = require('../repository/post.repository');

async function getPosts() {
    const res = await postRepository.getPosts();
    return res;
}

async function addPost(postedBy, postedComment) {
    const res = await postRepository.addPost(postedBy, postedComment);
    return res;
}

async function updatePost(postedBy, postedComment) {
    const res = await postRepository.updatePost(postedBy, postedComment);
    return res;
}

async function deletePost(postedBy) {
    const res = await postRepository.deletePost(postedBy);
    return res;
}




// exports the variables and functions above so that other modules can use them
module.exports.getPosts = getPosts;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;