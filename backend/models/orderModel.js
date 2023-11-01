const mongoose = require("mongoose");

const orderSchema = mongoose.model({
    phoneNumber:{
        type:Number,
        required:true
    },
    subject: {
        type: String,
        required: true,
    },
    assignmentDescription: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    additionalFiles: [String], // You can store file paths or references here
    status: {
        type: String,
        enum: ["pending", "in progress", "completed"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
})

module.exports = mongoose.model("Order", orderSchema);