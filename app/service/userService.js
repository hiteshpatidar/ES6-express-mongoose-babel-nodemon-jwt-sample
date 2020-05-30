import user from "../models/userModel";

const User = user;

async function getAll() {
    return await User.find({}).select('-password');
}

async function getById(id) {
    return await User.findById(id).select('-password');
}

export default {
    getAll,
    getById
}