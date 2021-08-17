const user=require('../model/user')


module.exports=function(req, res, next){
    user.findOne({_id: req.signedCookies.userId})
        .then((user)=>{
            if(user){
                next()
            } else{
                res.redirect('/login')
            }
        })
}