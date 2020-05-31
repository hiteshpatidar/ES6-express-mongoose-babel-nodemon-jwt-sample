import user from '../models/userModel';

const User = user;

async function getAll() {
  // eslint-disable-next-line no-return-await
  return await User.find({}).select('-password');
}

async function getById(id) {
  // eslint-disable-next-line no-return-await
  return await User.findById(id).select('-password');
}

export default {
  getAll,
  getById
};
