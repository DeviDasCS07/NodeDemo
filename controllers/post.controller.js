const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  
  app.use(bodyParser.json())


const postService = require('../services/post.service');

app.get('/', async (req, res) => {
    const posts = await postService.getPosts();
    res.send('sds');
});

app.post('/Post', async(req, res) => {
    var postedBy=req.body.postedBy;
    var postedComment=req.body.postedComment;
    const insert = await postService.addPost(postedBy, postedComment);
    res.send('insert');
});

app.put('/UpdatePost', async(req, res) => {
    var postedBy=req.body.postedBy;
    var postedComment=req.body.postedComment;
    const insert = await postService.updatePost(postedBy, postedComment);
    res.send('updated');
});

app.delete('/deletePost/:postedBy', async(req, res) => {
    var postedBy=req.params.postedBy;
    const insert = await postService.deletePost(postedBy);
    res.send('deleted');
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))