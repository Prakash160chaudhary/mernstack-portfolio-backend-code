import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName:{
    type:String,
    minLength: [2, "Name must contain at least 2 Characters!"],
  },
  subject:{
    type:String,
    minLength: [2, "Subject must contain at least 2 Characters!"],
  },
  message:{
    type:String,
    minLength: [2, "message must contain at least 2 Characters!"],
  },
  createdAt:{
    type:Date,
    default:Date.now(),
  },
});

export const Message = mongoose.model("Message", messageSchema)