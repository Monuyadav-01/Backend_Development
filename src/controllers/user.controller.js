import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists : username and emails
    // check for images , check for avatar
    // upload them to cloudinary, avatar
    // create user object -  create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response
    
    const { fullName, email, userName, password } = res.body
    console.log("email" , email);
})


export {registerUser}