import User from "../models/users.model.js"
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js";
import jwt from "jsonwebtoken"
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            isAdmin: false
        })
        await newUser.save();
        res.status(200).send(newUser)
    }catch(err){
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        console.log(user)
        if(!user) return next(createError('400', "no user found!"));
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError('402', 'Wrong password!'))
        
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT); 
        
        const {isAdmin, ...otherDetails} = user._doc;
        console.log(user._doc)
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...user._doc});
    }catch(err){
        next(err)
    }
}