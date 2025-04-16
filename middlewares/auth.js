const jwt = require('jsonwebtoken');

async function isLoggedIn(req,res,next){
    if(req.cookies.token === ""){
        return res.redirect("/adminLogin");
    } else { 
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
        next();
    }
}

module.exports = {isLoggedIn}
