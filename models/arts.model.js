import mongoose from 'mongoose';

const Arts=new mongoose.Schema(
    [
        {
            name:{
                type:"String",
                required: true
            },

            teacher:{
                type:"String",
                required:true
            }
        }
    ]
)

export const Art =  mongoose.model("Art",Arts);