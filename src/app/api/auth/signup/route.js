    import connectDB from "@/lib/mongodb";
    import User from "@/models/User";
    import { NextResponse } from "next/server";
    import bcrypt from "bcryptjs";

    export async function POST(req) {
    try {
        await connectDB();

        const {username , password , email } = await req.json();
        
        if(!username || !password ||!email){
            return NextResponse.json(
            {error : 'please provide all fields'},
            {status :400}
            )
        }

        const user_check = await User.findOne({email})
        if(user_check){
            return NextResponse.json({message : 'user already exists'},
                                    {status : 400} )
        }

        const hashed_password = await bcrypt.hash(password,10)
        console.log(hashed_password);
        

        const new_user = new User({
            username : username,
            password : hashed_password,
            email : email,
            role : 'USER'
        })

        await new_user.save()

        return NextResponse.json({
            message : 'user created successfully',
            status : '200',
            user : {
                username : new_user.username
            }
        })

    } catch (error) {
        return NextResponse.json({error : 'error.message'},{status : 500})    
    }
    }