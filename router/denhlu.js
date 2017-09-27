const exp = require('express');
const fs = require('fs');
const denglu = exp.Router();

denglu.post('/api/v1/user/denglu', (req, res) => {
    var a = req.body;
    // console.log(a);
    var filename = `users/${req.body.yonghuming}.json`;
    // console.log(filename);

    fs.exists(filename, function (exists) {
        if (exists) {
            var user = JSON.parse(fs.readFileSync(filename).toString());
            // console.log(typeof user);
            // console.log(user.password);
            if (req.body.password == user.password) {
                res.cookie('petname', req.body.yonghuming);
                res.status(200).json({ code: 'success', message: '登录成功' })
            } else {
                res.status(200).json({ code: 'password error', message: '密码错误' })
            }
        } else {
            res.status(200).json({ code: 'file errpr', message: '用户未注册,请先去注册' })
        }
    })
})

denglu.get('/api/v1/user/shanchu', function (req, res) {
    //  清除cookie
    res.clearCookie('petname');
    res.status(200).json({ code: 'success', message: '退出成功' })
})

module.exports = denglu;