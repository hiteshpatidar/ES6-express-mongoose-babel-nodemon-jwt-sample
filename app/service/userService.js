import bcrypt from 'bcryptjs';
import userModel from '../models/userModel';

const User = userModel;

async function getAllUsers() {
  const data = await User.find({}).select('-password');
  return data;
}

async function getUser(id) {
  const data = await User.findById(id).select('-password');
  return data;
}

async function createUser(userParam) {
  // validate
  if (await User.findOne({ username: userParam.username })) {
    const err = `Username "${userParam.username}" is already taken`;
    throw err;
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.password = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}

async function updateUser(id, userParams) {
  const userParam = userParams;
  const user = await User.findById(id);
  let error;

  // validate
  if (!user) {
    error = 'User not found';
    throw error;
  }

  if (user.username !== userParam.username
    && await User.findOne({ username: userParam.username })) {
    error = `Username "${userParam.username}" is already taken`;
    throw error;
  }

  // hash password if it was entered
  if (userParam.password) {
    userParam.password = bcrypt.hashSync(userParam.password, 10);
  }

  // copy userParam properties to user
  Object.assign(user, userParam);

  await user.save();
}

async function deleteUser(id) {
  await User.findByIdAndRemove(id);
}

export default {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
