import mongoose, { Schema } from 'mongoose';

/**
* Create database scheme for Users
*/
const UserScheme = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdDate: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserScheme);
