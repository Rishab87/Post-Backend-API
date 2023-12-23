const Post = require('../models/Post');

exports.createComment = async(req, res)=>{
    try{
        const postId = req.params.postId;
        const newComment = {
            text: req.body.text,
            author: req.body.author,
        }

        const post =await Post.findByIdAndUpdate({_id:postId} , {$push:{comments: newComment}} , {new:true});//The update is specified using the $push operator within the update object. This is the correct way to push a new element into an array in MongoDB.,The { new: true } option is added to ensure that the updated document is returned.

        if(!post){
            return res.status(404).json({
                message: "Post not found",
                success: false,
            });
        }
        
        res.status(200).json( 
        {
            success:true,
            data:newComment,
            message:'Comment Created Successfully'
        }
    );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}