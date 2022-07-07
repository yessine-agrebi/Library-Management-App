import User from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  const { nom, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newUser = new User({
    nom: nom,
    email: email,
    password: hash,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getusers = async (req, res) => {
  try {
    const user = await User.find().select('-password');

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s',
  });
};

export const getuserBYEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user == '') {
      res.status(401).send('utilisateur non existant');
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ msg: 'mot de passe incorrect' });

    //  if(user.isAdmin!="false") throw Error('Accès authorisé sauf pour admin');

    const accessToken = generateAccessToken(user);

    //   const refreshToken = generateRefreshToken(user);

    res.status(200).json({
      accessToken,
      //   refreshToken
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//   export const getuserBYEmailUser = async (req, res) => {
//     try {
//         const{email,password}=req.body;
//         const user = await User.findOne({email});
//        if(!user){  res.status(400).send('utilisateur non existant');
//         return} ;

//         const isMatch=await bcrypt.compare(password,user.password);

//        if(!isMatch) {res.status(400).json({msg:'mot de passe incorrect'})
//        return
//       }

//         const accessToken = generateAccessToken(user);
//         // const refreshToken = generateRefreshToken(user);
//        res.status(200).json({
//         accessToken,
//         // refreshToken
//       })
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
// Refresh
// function generateRefreshToken(user) {
//   return jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1y' });
// }

// export const RefreshToken = async (req, res) => {
//   try {
//       const{email,password}=req.body;
//       const user = await User.findOne({email});
//      if(user==""){  res.status(404).send('utilisateur non existant');
//       return} ;
//       const isMatch=await bcrypt.compare(password,user.password);
//        if(!isMatch) {res.status(400).json({msg:'mot de passe incorrect'})
//        return} ;

//       const refreshedToken = generateAccessToken(user);
//       res.status(200).json({
//              accessToken: refreshedToken,
//           })
//   } catch (error) {
//       res.status(404).json({ message: error.message });
//   }

// };