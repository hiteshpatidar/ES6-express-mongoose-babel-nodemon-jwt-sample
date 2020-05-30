// export default mongoose => {
//   const User = mongoose.model(
//     "user",
//     mongoose.Schema(
//       {
//         username: { type: String, unique: true, required: true },
//         password: { type: String, required: true },
//         firstName: { type: String, required: true },
//         lastName: { type: String, required: true },
//         createdDate: { type: Date, default: Date.now }
//       }
//     )
//   );
//   return User;
// }; 

import mongoose, {
  Schema
} from 'mongoose';

/**
* Create database scheme for notes
*/
const UserScheme = new Schema({
  username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        createdDate: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserScheme);

// import mongoose from 'mongoose';
// // import { bluebird } from "bluebird";
// const bluebird = require('bluebird');

// // Setting the mongoose promise as global (mpromise is deprecated)
// mongoose.Promise = bluebird;

// /**
// * Create database scheme for user
// */
// const UserScheme = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   createdDate: { type: Date, default: Date.now }
// });
// // const User = mongoose.model('user', UserScheme);

// // module.exports = mongoose.model('user', UserScheme);

// export default mongoose.model('user', UserScheme);;