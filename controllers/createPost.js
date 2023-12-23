const Post = require("../models/Post");

exports.createPost = async(req, res) =>{
    try{
        const {caption} =req.body;
        const response = await Post.create({caption});
        res.status(200).json(
        {
            success:true,
            data:response,
            message:'Post Created Successfully'
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