import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    created: { type: Date, default: Date.now },
});
