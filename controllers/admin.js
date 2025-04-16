const adminModel = require('../models/admin');

async function handelMainPage(req,res){
    return res.render("index");
}

async function handelAdminPage(req, res){
    return res.render("adminLoginPage");
}

async function handelAdminLogin(req, res){
    let {name, password} = req.body;
    const admin = await adminModel.findOne({password: password});
    if(admin){
        return res.render("createUserPage", {admin});
    } else {
        return res.redirect("/adminLogin");
    }
}

module.exports = {
    handelMainPage,
    handelAdminPage,
    handelAdminLogin,
}