const mongoose = require("mongoose");


const mongoosePaginate = require("mongoose-paginate");


const ProductSchema = new mongoose.Schema({
    code:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,    
    },
    height: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },

});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);