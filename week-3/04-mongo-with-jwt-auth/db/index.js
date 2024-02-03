const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://nikita:OMX8vkeXY2hG6ogG@cluster0.m1qphus.mongodb.net/course-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}