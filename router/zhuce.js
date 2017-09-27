// 注册模块
const exp = require('express');
const fs = require('fs');
const zhuce = exp.Router();

// 注册接口
zhuce.post('/user/zhuce',(req,res)=>{
    // console.log(req.body);
    // 获取保存用户信息的文件路径
    var filename = `users/${req.body.name}.json`;
   
    function sendData(code,message){
        res.status(200).json({code,message});
    }
    // 保存文件的方法
    function saveFile(){
        fs.exists(filename,(exists)=>{
            if (exists) {
                // 文件存在
                sendData('registed error',"该用户已经注册，请直接登录！");
            }else{
                // 文件不存在
                fs.appendFile(filename,JSON.stringify(req.body),(error)=>{
                    if (error) {
                        // 注册失败
                        sendData('registed error',"注册失败！");
                    }else{
                        // 注册成功
                        sendData('success',"注册成功");
                    }
                })
            }
        })
    }

    fs.exists('users',(exists)=>{
        if (exists) {
            // 存在,直接写入根据注册信息生成的用户信息文件
            saveFile();
        }else{
            // 不存在
            fs.mkdir('users',(err)=>{
                if (err) {
                    // 创建文件夹失败
                    sendData('file error',"注册失败");
                }else{
                    saveFile();
                }
            })
        }
    })
})

// 导出模块
module.exports = zhuce;