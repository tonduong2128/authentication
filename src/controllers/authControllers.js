const user=require('../model/user');
const md5 = require('md5');
const bcrypt = require('bcrypt');

module.exports = {
    show(req, res, next) {
        user.find({})
            .then((user)=>{
                //res.json(user);
                res.render('./authentication/authentication')
            })
    },
    login(req, res, next) {
        user.findOne({
            userName: req.body['user-name'],
        })
            .then((user)=>{
                bcrypt.compare(req.body.password,user.password)
                    .then((result)=>{
                        if (result){
                            res.cookie('userId',user._id,{signed: true});
                            res.locals._error =false
                            res.json('Đăng nhập thành công')
                        } else{
                            res.locals._error=true
                            res.render('./authentication/authentication')
                        }
                    })
            })
    },
    user(req, res, next) {
        res.json("Vào user thành công")
    },
    showCreate(req, res, next) {
        res.render('./authentication/createAccount')
    },
    create(req, res, next) {
        user.findOne({
            userName: req.body['user-name'],
        })
            .then((oneUser)=>{
                if (oneUser){
                    res.locals._existed=true
                    res.render('./authentication/createAccount')
                } else{ return oneUser}   
            })
            .then((oneUser)=>{
                bcrypt.hash(req.body.password, 10)
                    .then((hash)=>{
                        user.create({
                            userName: req.body['user-name'],
                            password: hash,
                        })
                            .then(()=>{
                                res.json("Tạo tài khoản thành công")
                            })
                            .catch((error)=>{
                                res.json(error)
                            })    
                    })   
            })
            
    }
}       