import db from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/auth.config';

const User = db.user;

export const signup = (req, res) => {
// Save User to Database
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(() => {
          res.send({ message: "User was registered successfully!" });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  })
}

export const signin = (req, res) => {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        let passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        let token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
       
          res.status(200).send({
            id: user.id,
            email: user.email,
            accessToken: token
          });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
