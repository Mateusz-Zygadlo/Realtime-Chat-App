import type { Request, Response, NextFunction } from 'express';

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = [
  async (req: Request, res: Response, next: NextFunction) => {
    const { nickname, password } = req.body;
    let { email } = req.body;
    email.toLowerCase();
    const isExistEmail = await User.findOne({email: email});

    const hashedPassword = await bcrypt.hash(password, 10)

    if(isExistEmail){
      return res.redirect('http://localhost:3000/failedAuth')
    }

    const user = new User({
      email,
      password: hashedPassword,
      nickname
    }).save((err: any) => {
      if(err){
        return next(err);
      }

      return res.redirect('http://localhost:3000/login');
    })
  }
]

exports.login = [
  async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if(user == null){
      return res.redirect('http://localhost:3000/failedAuth');
    }
    try{
      if(await bcrypt.compare(password, user.password)){
        const userObj = {
          email: user.email,
          lastName: user.nickname,
          id: user._id,
        }
        
        const accessToken = jwt.sign(userObj, process.env.SECRET_KEY);

        return res
          .status(202)
          .cookie('JWT-TOKEN', accessToken, {
            sameSite: 'strict', 
            path: '/', 
            expires: new Date(new Date().getTime() + 1000000 * 1000),
            secure: true,
          })
          .redirect('http://localhost:3000/')
      }else{
        return res.redirect('http://localhost:3000/failedAuth')
      }
    }catch(err: any){
      console.log(err);
    }
  }
]