import mongoose  from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if(!MONGO_URI){
    throw new Error('there is no conneciton string')
}

let catched = global.mongoose;
if(!catched){
    catched = global.mongoose = {connection : null , Promise : null}
}

const connectDB= async () => {
    if(catched.connection) return catched.connection
    if(!catched.Promise){
        const opts = {
      bufferCommands: false,
    };

    catched.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose;
    });
}
    catched.connection = await catched.promise;
    return catched.connection
}

export default connectDB;