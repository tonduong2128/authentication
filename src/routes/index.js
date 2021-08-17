const authRouter=require('./authentication');

module.exports = function(app){
    
    app.use('/',authRouter);
    app.use('/',function(req,res){
        res.render('home')
    })
}