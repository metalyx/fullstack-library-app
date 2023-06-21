import { Schema, model } from 'mongoose';

const Author = new Schema({
    name: { type: String, required: true },
});

export default model('Author', Author);
