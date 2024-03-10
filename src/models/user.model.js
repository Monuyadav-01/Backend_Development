import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
const user_schema = new Schema(
    {
        userName: {
        type:  String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true,
        index :true
        },
        email: {
        type:  String,
        required: true,
        unique: true,
        lowerCase: true,
        trim: true,
        },
        fullName: {
        type:  String,
        required: true,
        trim: true,
        index : true
        },
        avatar: {
            type: String, // cloudnary url use for this
            required: true,   
        },
        coverImage: {
            type: String, // cloudnary url use for this 
        },
        watchHistry: [
            {
                type: Schema.Types.ObjectId,
                ref : "Video"
            }
        ],
        password: {
            type: String,
            required : [true , 'Password is required']
        },
        refreshToken: {
            type : String
        }
        
    },
    {
        timeStapms : true
    }
   
)

user_schema.pre("save", async function (next) {
    if (this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})

user_schema.methods.isPasswordCorrect = async function (password) {
 return  await bcrypt.compare(password, this.password)
}

user_schema.methods.generateAccessToken = function () {
    return    wt.sign(
        {
            _id: this._id,
            email: this.email,
            userName: this.userName,
            fullName:this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
user_schema.methods.generateRefreshToken = function () {
     return    wt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",user_schema)