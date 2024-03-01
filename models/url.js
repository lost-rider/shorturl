const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },

    Orgurl: {
        type: String,
        required: true,

    },
    History: [{timestamp: {type: Number}}],
    

},


{ timestamps: true}
);

const URL=mongoose.model("url", schema);

module.exports=URL;
