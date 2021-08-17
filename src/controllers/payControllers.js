const transfers=require('../model/transfers')


module.exports = {
    show(req, res, next) {
        res.render('./user/pay');
    },
    pay(req, res, next) {
        transfers.create({
            userId: req.signedCookies.userId,
            account: req.body.account,
            amount: req.body.amount,
        })
            .then(()=>{
                res.redirect('back');
            })
    }
}