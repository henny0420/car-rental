import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type :String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type :String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type :String,
        required : true,
    },
    role: {
        type : String,
        enum : ['ADMIN','USER','OWNER'],    
        default : 'USER',
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps : true})

const User = mongoose.models.Users || mongoose.model('Users',UserSchema);
export default User;