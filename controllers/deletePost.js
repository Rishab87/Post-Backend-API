const Post = require("../models/Post");

exports.deletePost = async(req, res)=>{
    try{
        postId = req.params.postId;

        const find  = await Post.findByIdAndDelete(postId);

        if(!find){
            return res.status(404).json({
                message: "Not found!",
                success: false,
            });
        }

        res.status(200).json( 
            {
                success:true,
                data:find,
                message:'Post Deleted Successfully'
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