import mongoose from "mongoose";

const projectPhotoSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    order: {type: String },
    name: { type: String },
    value: { type: String, required: true }
});

export default projectPhotoSchema;