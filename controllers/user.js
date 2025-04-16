const userModel = require('../models/user');
const adminModel = require('../models/admin');
const jwt = require('jsonwebtoken');

async function handelCreateUser(req, res){
    let {email, password} = req.body;
    const admin = await adminModel.findOne({_id: req.params.adminId});
    const user = await userModel.create({
        email,
        password,
        admin: admin._id
    });

    admin.users.push(user._id);
    await admin.save();
    return res.redirect("/");
}

async function handelUserLoginPage(req, res){
    return res.render("userLoginPage");
}

async function handelUserLogin(req, res){
    let {email, password} = req.body;
    const user = await userModel.findOne({email: email});
    if(!user) return res.redirect("/user/userLogin");

    if(user.password === password){
        let token = jwt.sign({email: user.email, userid: user._id},"secret");
        res.cookie("token", token);
        return res.redirect("/info/createInfo");
    } else {
        return res.redirect("/user/userLogin");
    }

    return res.render("infoPage",{user});

}


module.exports = {
    handelCreateUser,
    handelUserLoginPage,
    handelUserLogin,
}