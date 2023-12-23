const Post  = require("../models/Post");

exports.likePost = async(req,res)=>{
    try{
        const postId = req.params.postId;

        //returns null if not found
        const response = await Post.findByIdAndUpdate({_id: postId} , {$inc:{likes: 1}} , {new:true});

        if(!response){
            return res.status(404).json({
                message: "Not found!",
                success: false,
            })
        }

       

        res.status(200).json( 
            {
                success:true,
                data:response,
                message:'Liked Successfully'
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