import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },
});
