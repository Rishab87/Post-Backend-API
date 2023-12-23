const Post = require("../models/Post");

exports.updatePost = async(req , res)=>{
    try{
        const postId = req.params.postId;
        const {caption} = req.body;
        const post = await Post.findByIdAndUpdate({_id: postId} , {caption: caption} , {new:true});

        if(!post){
            return res.status(404).json({
                message: "Not found!",
                success: false,
            });
        }

        res.status(200).json( 
            {
                success:true,
                data:post,
                message:'Post Updated Successfully'
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
        });
    }
}