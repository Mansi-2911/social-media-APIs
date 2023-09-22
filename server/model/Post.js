const mongoose = require ('mongoose');


const PostSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        require:true,
        max:500
    },
    img:{
        type:String
        
    },
    likes:{
        type:Array,
        default:[]
    },
    comments:{
        type:String,
        max:100
    }
},
{timestamps:true}
)

const postData = new mongoose.model('postdata', PostSchema)
 module.exports = postData;