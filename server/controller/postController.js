const postData = require('../model/Post')
const userDb = require('../model/model')


exports.create = (req,res) =>
{
    res.status(200).json("To create your post enter your unique id in the url")
}
// create a post
exports.createPost = async(req,res)=>{
const newPost = new postData(req.body)
try{
const savePost = await newPost.save()
res.status(200).json(savePost)
}
catch(error){
res.status(500).json(error)
}
}

// update a post
// to update the post we take the id of the post in the url and compare the userId with the database userId to make an update
exports.updatePost = async(req,res)=>{
    try{
      const post = await postData.findById(req.params.id) 
      if(post.userId === req.body.userId)
      {await post.updateOne({$set:req.body});
    res.status(200).json("the post is been updated")
      }
    else
{res.status(403).json("you can only update your post")

}
    }
    catch(error){
        res.status(500).json(error)
    }
    }

    //delete a post
    // to delete the post we take the id of the post in the url and compare the userId with the database userId to make a delete
    exports.deletePost = async(req,res) =>{
        try{
            const post = await postData.findById(req.params.id)
            if(post.userId === req.body.userId){
            await post.deleteOne();
          res.status(200).json("the post is been deleted")
            }
            else{
                res.status(403).json("you can only delete your post")
            }
          }
          catch(error){
              res.status(500).json(error)
          }
          } 

          // get a post
          exports.getPost = async(req,res)=>{
            try{
             const post = await postData.findById(req.params.id)
              res.status(200).send(post)
            }
            catch(error){
                res.status(500).json(error)
            }
          }


        
          //like a post
         // to like the post we take the id of the post in the url and compare the userId with the database userId to make a like
          exports.LikePost = async(req,res)=>{
            try{
                const post = await postData.findById(req.params.id)
                if(!post.likes.includes(req.body.userId)){
                await post.updateOne({$push:{likes:req.body.username}})
                res.status(200).json("The post has been liked")
            }
            else{
                await post.updateOne({$pull:{likes:req.body.userId}})
                res.status(200).json("The post has been disliked")
            }
        }
            catch(error){
                res.status(500).json(error)
            }
          }



// add a comment
//to add a comment the post we take the id of the post in the url and compare the userId with the database userId to make a comment
exports.addComment = async(req,res) =>{
   
    try{
        const post = await postData.findById(req.params.id)
        if(post.userId === req.body.userId){
            const savecomment = await post.updateOne({$set: {comments:req.body.comments}});
            res.status(200).json("Comment has been added")
        }
        
        else{
            res.status(403).json("u can comment only with valid id")
        }
}
    catch(error){
        res.status(500).send(error)
    }
}