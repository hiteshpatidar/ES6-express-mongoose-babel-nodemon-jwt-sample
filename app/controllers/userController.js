import mongoose from 'mongoose'; 
import user from '../models/userModel';

exports.getAll = (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};
