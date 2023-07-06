import connectMongoDB from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse} from "next/server"


export async function POST(req){
    const{username, password, email} = await req.json()
    await connectMongoDB()
    await User.create({username, password, email})
    return NextResponse.json({message: "todo r"},{status: 200})
}

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
  }