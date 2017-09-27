const exp = require('express');
const bodyParser = require('body-parser');
const fs=require('fs');
const app = exp();


app.use(exp.static('wwwroot'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./router/zhuce.js'))
app.use(require('./router/denhlu.js'))

// 请求左边菜单
app.get('/leftmenu',(req,res)=>{
    var data=fs.readFileSync(`files/leftmenu.json`).toString();
    data=JSON.parse(data);
    // console.log(data);
    res.status(200).json(data);
})

// 请求地址信息
app.get('/adress',(req,res)=>{
    var data=fs.readFileSync(`files/adress.json`).toString();
    data=JSON.parse(data);
    // console.log(data);
    res.status(200).json(data);
})

// 请求网站导航信息
app.get('/wanzhandaohan',(req,res)=>{
    var data=fs.readFileSync(`files/wanghiz.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求发现好货信息
app.get('/faxian',(req,res)=>{
    var data=fs.readFileSync(`files/faxian.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求会买信息
app.get('/huimai',(req,res)=>{
    var data=fs.readFileSync(`files/huimai.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求排行榜信息
app.get('/paihanban',(req,res)=>{
    var data=fs.readFileSync(`files/paihanban.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求觅me的信息
app.get('/findMe',(req,res)=>{
    var data=fs.readFileSync(`files/findMe.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求享品质的信息
app.get('/xiangpingzhi',(req,res)=>{
    var data=fs.readFileSync(`files/xiangpingzhi.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

//请求爱生活的信息
app.get('/aishenghuo',(req,res)=>{
    var data=fs.readFileSync(`files/aishenghuo.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

//请求更多东西的信息
app.get('/gengduo',(req,res)=>{
    var data=fs.readFileSync(`files/gengduo.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求左边的二级菜单
app.get('/zuobianerji',(req,res)=>{
    var data=fs.readFileSync(`files/zuobiancaidan.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

// 请求购特色
app.get('/goutese',(req,res)=>{
    var data=fs.readFileSync(`files/goutese.json`).toString();
    data=JSON.parse(data);
    res.status(200).json(data);
})

app.listen(3000, () => {
    console.log('序列之战...启动!')
})



