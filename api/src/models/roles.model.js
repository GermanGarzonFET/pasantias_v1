import { Schema, model } from 'mongoose';

const RolesSchema = new Schema({
    name: String,

}, {
    versionKey: false
})

export default model("Roles", RolesSchema);