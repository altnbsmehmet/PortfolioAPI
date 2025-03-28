import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import contactSchema from './entities/Contact.js';
import educationSchema from './entities/Education.js';
import experienceSchema from "./entities/Experience.js";
import projectSchema from "./entities/Project.js";
import skillSchema from './entities/Skill.js';
import userSchema from "./entities/User.js";

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

const models = {
    Contact: mongoose.model('Contact', contactSchema),
    Education: mongoose.model('Education', educationSchema),
    Experience: mongoose.model('Experience', experienceSchema),
    Project: mongoose.model('Project', projectSchema),
    Skill: mongoose.model('Skill', skillSchema),
    User: mongoose.model('User', userSchema),
}

export { connectDb, models };