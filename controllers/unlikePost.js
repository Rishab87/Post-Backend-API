const Post  = require("../models/Post");

exports.unlikePost = async(req,res)=>{
    try{
        const postId = req.params.postId;
        const response = await Post.findByIdAndUpdate({_id: postId} , {$inc:{likes:-1}} , {new:true});//MongoDB does not have a built-in $dec operator like the $inc (increment) operator.

        if(!response){
            return res.status(404).json({
                message: "Not found!",
                success: false,
            });
        }

        

        res.status(200).json( 
            {
                success:true,
                data:response,
                message:'Unliked Successfully'
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