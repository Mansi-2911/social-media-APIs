const postController = require('../controller/postController')

const express = require('express')
const route = express.Router()

route.get('/post/addPost', postController.create)
route.post('/post/addPost', postController.createPost)

route.put('/post/:id', postController.updatePost)
route.delete('/post/:id', postController.deletePost)
route.get('/post/:id', postController.getPost)


route.put('/post/:id/likes', postController.LikePost)
route.post('/post/:id/addComment',postController.addComment)
module.exports = route